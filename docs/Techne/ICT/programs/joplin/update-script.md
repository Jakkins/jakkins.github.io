# update script

```bash
#!/usr/bin/env bash

script_name=update-joplin-jakkins
git_user_name=Jakkins
git_project_name=jakkins.github.io
default_proj_path=~/$git_project_name
main_branch=origin/main

#
# sources
# - https://www.youtube.com/watch?v=CPjOLq2FjsQ
# - https://joplinapp.org/terminal/
#

#
# FUNCTIONS
# 

function error_exit() {
    echo "Error: $1"
    exit 1
}

function yes_or_no() {
    while true; do
        read -ep "$* [y/n]: " yn
        case $yn in
            [Yy]*) return 0  ;;  
            [Nn]*) echo "Aborted" ; return 1 ;;
        esac
    done
}

function sync_with_remote () {
    cd $default_proj_path
	git config --local pull.rebase true
	git config --local user.email "none"
    git config --local user.name $git_user_name
    git fetch --all					|| error_exit "sync_with_remote failed"
    git reset --hard $main_branch   || error_exit "sync_with_remote failed"
    git clean -df
}

function load_project_ifnot_present () {
    if [ ! -d $default_proj_path ]; then
        git clone https://github.com/$git_user_name/$git_project_name.git $default_proj_path || error_exit "load_project_ifnot_present, git clone failed"
	else
		sync_with_remote
    fi
}

function sync_local_with_remote () {
    echo "sync_local_with_remote"   
    sync_with_remote
    joplin rmbook docs
    cp -r $default_proj_path/docs/_resources $default_proj_path/_resources
    joplin import $default_proj_path/docs --format md --notebook docs
    sync_with_remote
}

function sync_remote_with_local () {
	# get the local docs and push it to remote
    echo "sync_remote_with_local"
    find -name '-1' -delete
    mv $default_proj_path/docs-local/_resources/* $default_proj_path/docs-local/docs/_resources/
    mv $default_proj_path/docs/_resources/* $default_proj_path/docs-local/docs/_resources/
    rm -rf $default_proj_path/docs
    mv $default_proj_path/docs-local/docs $default_proj_path/docs
    rm -rf $default_proj_path/docs-local
    cd $default_proj_path
	printf "\n----------- start git status -----------\n\n"
	git status
	printf "\n------------ end git status ------------\n"
	yes_or_no "Go ahead and push?" || exit 1
    git add .
    git commit -m "update docs"
    git push origin
}

docs_local_size=0
function export_docs_from_local () {
    # joplin export ~/sfc/dev/repos/github/jakkins/jakkins.github.io/docs-local --format md --notebook docs
    joplin export $default_proj_path/docs-local --format md --notebook docs 2>/dev/null
    if [ -d $default_proj_path/docs-local ]; then
        docs_local_size=$(echo $(du -s $default_proj_path/docs-local) | cut -d" " -f1)
    fi
}

automatic_sync() {
	load_project_ifnot_present
	docs_repo_size=$(echo $(du -s $default_proj_path/docs) | cut -d" " -f1)
	export_docs_from_local
	echo $docs_repo_size
	echo $docs_local_size
	if [ "$docs_repo_size" -gt "$docs_local_size" ]; then sync_local_with_remote; else sync_remote_with_local; fi
}

print_usage() {
	clear
	echo "Usage:"
	echo "	automatic sync    -> $script_name -a"
	echo "	use the menu      -> $script_name "
	read -ep "Press Enter to continue..."
}

show_menu() {
    clear
    echo "ujj (update-joplin-jakkins)"
    echo "1. automatic sync"
    echo "2. export docs notebook"
    echo "3. delete docs notebook"
    echo "4. Quit"
}

get_path() {
    while true; do
		echo "Enter a path:"
		read -e user_path
		if [ -d "$user_path" ]; then
			# path exists and is a directory
			break
		else
			echo "The path should point to a dir."
			echo ""
		fi
    done
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
            clear
            exit 0
            ;;
        *)
            echo "Invalid choice, please try again."
            ;;
    esac
}

#
# CODE
#

if [ -n "$1" ]; then
    if [ "$1" = "-a" ]; then
		automatic_sync
	else
		print_usage
	fi
else
    while true; do
		show_menu
		read -ep "Enter your choice (1-4): " choice
		perform_action
		read -ep "Press Enter to continue..."
	done
fi
```
