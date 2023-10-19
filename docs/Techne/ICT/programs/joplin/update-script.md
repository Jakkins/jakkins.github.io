# update script

```bash
#!/usr/bin/env bash

script_name=update-joplin-jakkins
git_user_name=Jakkins
git_project_name=jakkins.github.io
git_proj_path=~/$git_project_name
main_branch=origin/main

#
# FUNCTIONS
# 

function error_exit() {
    echo "error: $1"
    exit 1
}

print_error_and_exit() {
    if [ $? -ne 0 ]; then
        echo $1
        exit 1
    fi
}

check_if_current_branch_is_main() {
    current_branch=$(git rev-parse --abbrev-ref HEAD)
    if [ "$current_branch" != "main" ]; then
        echo "not in main, change branch to main when possible"
        exit 1
    fi
}

automatic_sync() {
    if [ ! -d $git_proj_path ]; then
        echo "cloning the docs from remote"
        git clone https://github.com/$git_user_name/$git_project_name.git $default_proj_path || error_exit "git clone failed"
    fi
    # rm -rf ~/jakkins.github.io/docs
    rm -rf $git_proj_path/docs
    rm -rf $git_proj_path/_resources
    # joplin export ~/jakkins.github.io --format md --notebook docs
    joplin export $git_proj_path --format md --notebook docs
    find -name '-1' -delete

    # check if there are differences
    git_status=$(git status -s)
    COUNT_UNTRACKED=$(echo $git_status | grep -ow '??' | wc -l) # count
    COUNT_DELETED=$(echo $git_status | grep -ow 'D' | wc -l) # count
    COUNT_MODIFIES=$(echo $git_status | grep -ow 'M' | wc -l) # count
    ahead_behind=$(git rev-list --left-right main...main@{upstream})
    COUNT_AHEAD=$(echo $ahead_behind | grep -c '^<' ) # count
    COUNT_BEHIND=$(echo $ahead_behind | grep -c '^>' ) # count
    echo "ahead $COUNT_AHEAD | behind $COUNT_BEHIND"
    echo "untracked $COUNT_UNTRACKED | deleted $COUNT_DELETED | modify $COUNT_MODIFIES"

    if [ "$COUNT_BEHIND" == "0" ] && [ "$COUNT_AHEAD" == "0" ]; then
        if [ "$COUNT_UNTRACKED" -gt "0" ] || [ "$COUNT_DELETED" -gt "0" ] || [ "$COUNT_MODIFIES" -gt "0" ] ; then
            echo "pushing"
            git add .
            git commit -m "update docs"
            git push origin
        fi
    fi
    if [ "$COUNT_AHEAD" -gt "0" ] && [ "$COUNT_BEHIND" == "0" ]; then
        if [ "$COUNT_UNTRACKED" == "0" ] || [ "$COUNT_DELETED" == "0" ] || [ "$COUNT_MODIFIES" == "0" ] ; then
            echo "pull and import"
            git reset --hard $main_branch   || error_exit "git reset failed"
            git clean -df
            joplin rmbook docs
            joplin import $git_proj_path/docs --format md --notebook docs
        fi
    fi
    if [ "$COUNT_BEHIND" -gt "0" ] && [ "$COUNT_AHEAD" == "0" ]; then
        if [ "$COUNT_UNTRACKED" -gt "0" ] || [ "$COUNT_DELETED" -gt "0" ] || [ "$COUNT_MODIFIES" -gt "0" ] ; then
            echo "local is behind but there are also some changes"
            # todo 
            #  reset to main
            #  export docs-local
            #  rsync ??
            #  diff ??
            #  patch ??
            exit 1
        fi
        echo "pull"
        git reset --hard $main_branch   || error_exit "git reset failed"
        git clean -df
    fi
    if [ "$COUNT_BEHIND" -gt "0" ] && [ "$COUNT_AHEAD" -gt "0" ]; then
        echo "you are a clown :3"
    fi
}

print_usage() {
    clear
    echo "Usage:"
    echo "  automatic sync    -> $script_name -a"
    echo "  use the menu      -> $script_name "
    read -ep "Press any key to continue..."
}

perform_action() {
    case $choice in
        1)
            echo "automatic sync"
            automatic_sync
            ;;
        2)
            echo "export docs notebook"
            get_path
            rm -vrf $user_path/docs-local
            echo "exporting documentation to $user_path/docs-local dir"
            joplin export $user_path/docs-local --format md --notebook docs
            ;;
        3)
            echo "delete docs notebook"
            joplin rmbook docs
            ;;
        4)
            print_usage
            exit 0
            ;;
        5)
            clear
            exit 0
            ;;
        *)
            echo "Invalid choice, please try again."
            ;;
    esac
}

show_menu() {
    clear
    echo "ujj (update-joplin-jakkins)"
    echo "1. automatic sync"
    echo "2. export docs notebook"
    echo "3. delete docs notebook"
    echo "4. print usage"
    echo "5. quit"
}

#
# CODE
#

cd $git_proj_path
git config --local user.email "none"
git config --local user.name $git_user_name
git config --local pull.rebase true
git config --get remote.origin.url > /dev/null
print_error_and_exit "origin does not exists"
echo "fetching..."
git fetch origin # do fetch but not pull
print_error_and_exit "git fetch not successful: check connection, or update origin url"
check_if_current_branch_is_main

if [ -n "$1" ]; then
    if [ "$1" = "-a" ]; then
        automatic_sync
    else
        print_usage
    fi
else
    while true; do
        show_menu
        read -ep "Enter your choice (1-5): " choice
        perform_action
        read -ep "Press Enter to continue..."
    done
fi
```




