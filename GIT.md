Git flow by Monterail
=====================

## Successfull branching model

Basically we inherent from [successful git branch model](http://nvie.com/posts/a-successful-git-branching-model/) AKA *git flow* so we strongly recommend to read it first if you have not already.

## Basic flow

When you are working on a new feature create a new branch named `feature/name` from `dev` branch. Separate words with dashes:

    in ~/workspace/project
    $ git checkout -b feature/my-new-tiny-feature dev

If you want to share your work with others push your topic branch to the remote server:

    in ~/workspace/project
    $ git push origin feature/my-new-tiny-feature

On the other hand if you want to fetch others work from remote server use:

    in ~/workspace/project
    $ git fetch origin
    $ git checkout -b feature/my-new-tiny-feature origin/feature/my-new-tiny-feature

When the work is finished merge it into `dev` branch:

    in ~/workspace/project
    $ git checkout dev
    $ git merge --no-ff feature/my-new-tiny-feature

## Flow using [git up](https://github.com/aanand/git-up), [git-flow](https://github.com/nvie/gitflow) and [hub](https://github.com/defunkt/hub) tools

Say, you want to contribute to the Docrails project

First, install appropriate tools:

    brew install git git-flow hub
    gem install git-up
    hub alias # do what it says

Then clone repository you want and start new feature:

    git clone lifo/docrails
    git flow feature start my_feature

Do your changes, and test them on updated repository:

    git up # fetches and merges/rebases all remote changes
    git flow feature rebase my_feature
    
Now, publish feature and open pull reqeust:

    git flow feature publish my_feature
    git pull-request

If someone asks you in pull request to do some changes:

    git commit -m "fixes"
    git push

Now you can close feature (but you don't have to):

    git feature finish my_feature

## Ugly [bugs](http://vladstudio.deviantart.com/art/A-bug-142782682)

Bugs found on `dev` branch should be fixed it in the proper feature branch which introduced the bug.

Bugs found on `master` branch should be fixed in the `hotfix/bugid` branch:

    in ~/workspace/project
    $ git checkout -b hotfix/bugid master

When finished, merge it to the `master` and `dev` branches:

    in ~/workspace/project
    $ git checkout master
    $ git merge --no-ff hotfix/bugid
    $ git checkout dev
    $ git merge --no-ff hotfix/bugid

## Revert changes
*... AKA "I don't wanna this any more!"*

From time to time you might need to revert a feature work which were added to the `dev` or `master` but should not. In such a cases find a merge commit and revert it:

    in ~/workspace/project
    $ git revert hash

You can read more about reverting at [gitready](http://gitready.com/intermediate/2009/03/16/rolling-back-changes-with-revert.html) and [git-scm article](http://git-scm.com/2010/03/02/undoing-merges.html).

## [Freeze](http://www.youtube.com/watch?v=qSqnO8iGz9o)

If your development process needs code freezing create a separate branches named `release/version` from the `dev` branch when needed.

    in ~/workspace/project
    $ git checkout -b release/version dev # or hash if you want to freeze from specific point

Any bugs found in a release branch should be fixed directly in release branch. When the freeze is accepted merge it into master and dev.

    in ~/workspace/project
    $ git checkout master
    $ git merge --no-ff release/version
    $ git checkout dev
    $ git merge --no-ff release/version

## Going live

When your work is production ready merge it to the `master` branch:

    in ~/workspace/project
    $ git checkout master
    $ git merge --no-ff dev # or release branch if used

## Caution

Never ever commit directly in `dev` or `master` branches!

## Conventions

* Feature branch: `feature/name`
* Hotfix branch: `hotfix/name` or `hotfix/bugid` (from ticket system like redmine)
* Realease branch: `release/version`
* Multi word branch name: `really-long-branch-name`

## Todo

* describe squashing
* introduce versioning convention
* anything more?

