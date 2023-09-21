```bash
#!/usr/bin/env bash

git_user_name=Jakkins
git_project_name=jakkins.github.io
default_proj_path=~/sfc/dev/repos/github/jakkins/$git_project_name
main_branch=origin/main

sync_with_remote () {
    cd $default_proj_path
    git fetch --all
    git reset --hard $main_branch
    git clean -df
}

load_project_ifnot_present () {
    if [ ! -d $default_proj_path ]; then
        git clone https://github.com/$git_user_name/$git_project_name.git $default_proj_path
    fi
}

sync_local_with_remote () {
    echo "sync_local_with_remote"   
    sync_with_remote
    joplin rmbook docs
    cp -r $default_proj_path/docs/_resources $default_proj_path/_resources
    joplin import $default_proj_path/docs --format md --notebook docs
    sync_with_remote
}

sync_remote_with_local () {
    echo "sync_remote_with_local"
    find -name '-1' -delete
    mv $default_proj_path/docs-local/_resources/* $default_proj_path/docs-local/docs/_resources/
    mv $default_proj_path/docs/_resources/* $default_proj_path/docs-local/docs/_resources/
    rm -rf $default_proj_path/docs
    mv $default_proj_path/docs-local/docs $default_proj_path/docs
    rm -rf $default_proj_path/docs-local
    cd $default_proj_path
    git config --local user.email "none"
    git config --local user.name $git_user_name
    git add .
    git commit -m "update docs"
    git push origin
}

docs_local_size=0
export_docs_from_local () {
    sync_with_remote
    # joplin export ~/sfc/dev/repos/github/jakkins/jakkins.github.io/docs-local --format md --notebook docs
    joplin export $default_proj_path/docs-local --format md --notebook docs 2>/dev/null
    if [ -d $default_proj_path/docs-local ]; then
        docs_local_size=$(echo $(du -s $default_proj_path/docs-local) | cut -d" " -f1)
    fi
}

load_project_ifnot_present
docs_repo_size=$(echo $(du -s $default_proj_path/docs) | cut -d" " -f1)
export_docs_from_local
if [ "$docs_repo_size" -gt "$docs_local_size" ]; then sync_local_with_remote; else sync_remote_with_local; fi
```
