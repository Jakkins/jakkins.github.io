```bash
#!/usr/bin/env bash
# update-joplin-jakkins

git_user_name=Jakkins
git_project_name=jakkins.github.io
default_proj_path=~/$git_project_name
main_branch=origin/main

function error_exit() {
    echo "Error: $1"
    exit 1
}

function yes_or_no {
    while true; do
        read -p "$* [y/n]: " yn
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

load_project_ifnot_present
docs_repo_size=$(echo $(du -s $default_proj_path/docs) | cut -d" " -f1)
export_docs_from_local
echo $docs_repo_size
echo $docs_local_size
if [ "$docs_repo_size" -gt "$docs_local_size" ]; then sync_local_with_remote; else sync_remote_with_local; fi
```
