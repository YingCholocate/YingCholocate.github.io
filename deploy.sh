#!/bin/sh
\# 实现脚本部署
while read oldrev newrev refname
do
    branch=$(git rev-parse --symbolic --abbrev-ref $refname)
    if [ "master" == "$branch" ]; then
        # Do something
        echo "post-receive in branch master" >> /tmp/git-sample.log
        unset GIT_DIR
        wwwPath=/var/www/html/sample
        cd $wwwPath && /usr/bin/git pull origin master
        exit 0
    fi
done
