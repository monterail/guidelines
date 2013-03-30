# Git guidelines

* Leave the campground cleaner than you found it.
* [Configure your editor](https://gist.github.com/4451806) to automatically strip trailing whitespaces.
* Feature branch: `feature/name`
* Hotfix branch: `hotfix/name` or `hotfix/bugid` (from ticket system like redmine)
* Realease branch: `release/version`
* Multi word branch name: `really-long-branch-name`
* Use `fix: ` prefix for fix commits. Don't use any other form of the "fix" word.
  (it's the only form that can be used for commit messages like "fix: statistic on home page polluted by google bot")
* Begin git messages from big letter. Don't use dot at the end.
  Sample: `fix: Very important thing, closes #42`

## Successfull branching model

Basically we inherit from [successful git branch model](http://nvie.com/posts/a-successful-git-branching-model/) AKA *git flow* so we strongly recommend reading it first if you have not already.

### Basic flow

When you are working on a new feature create a new branch named `feature/name` from `dev` branch. Separate words with dashes:

    git checkout -b feature/my-new-tiny-feature dev

If you want to share your work with others push your topic branch to the remote server:

    git push -u origin feature/my-new-tiny-feature

On the other hand if you want to fetch others work from remote server use:

    git fetch origin
    git checkout -b feature/my-new-tiny-feature origin/feature/my-new-tiny-feature

When the work is finished merge it into `dev` branch:

    git checkout dev
    git merge --no-ff feature/my-new-tiny-feature

## Flow using [git up](https://github.com/aanand/git-up), [git-flow](https://github.com/nvie/gitflow) and [hub](https://github.com/defunkt/hub) tools

Say you want to contribute to the Docrails project

First, install appropriate tools:

    brew install git git-flow hub
    gem install git-up
    hub alias # do what it says

Configure them:

```bash
git config --global git-up.bundler.check true
git config --global git-up.bundler.autoinstall true
git config --global git-up.fetch.all true
git config --global git-up.rebase.arguments --preserve-merges
```

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

### Ugly [bugs](http://vladstudio.deviantart.com/art/A-bug-142782682)

Bugs found on `dev` branch should be fixed in the proper feature branch which introduced the bug.

Bugs found on `master` branch should be fixed in the `hotfix/bugid` branch:

    git checkout -b hotfix/bugid master

When finished, merge it to the `master` and `dev` branches:

    git checkout master
    git merge --no-ff hotfix/bugid
    git checkout dev
    git merge --no-ff hotfix/bugid

### Revert changes
*... AKA "I don't wanna this any more!"*

From time to time you might need to revert a feature work which were added to the `dev` or `master` but should not. In such a cases find a merge commit and revert it:

    git revert sha1

You can read more about reverting at [gitready](http://gitready.com/intermediate/2009/03/16/rolling-back-changes-with-revert.html) and [git-scm article](http://git-scm.com/2010/03/02/undoing-merges.html).

### [Freeze](http://www.youtube.com/watch?v=qSqnO8iGz9o)

If your development process needs code freezing create a separate branch named `release/version` from the `dev` branch when needed.

    git checkout -b release/version dev # or sha1 if you want to freeze from specific point

Any bugs found in a release branch should be fixed directly in release branch. When the freeze is accepted merge it into master and dev.

    git checkout master
    git merge --no-ff release/version
    git checkout dev
    git merge --no-ff release/version

### Going live

When your work is production-ready merge it to the `master` branch:

    git checkout master
    git merge --no-ff dev # or release branch if used

## Rules

* Never ever commit directly to `dev` or `master` branches!

* Always commit your fixes to the oldest supported branch that requires them.
  Then (periodically) merge the integration branches upwards into each other.

  This results is a very controlled flow of fixes. If you notice that you have
  applied a fix to e.g. master that is also required in develop, you will need
  to cherry-pick it (using git-cherry-pick(1)) downwards. This will happen a
  few times and is nothing to worry about unless you do it very frequently.

* Merge to downstream only at well-defined points.

  Otherwise, the feature that was merged to suddenly contains more than a single (well-separated) change.
  The many resulting small merges will greatly clutter up history. Merge if you need stuff commited to
  develop or master to make feature work or test. For example critical fixes.

* Fast-forward, rebase or run git-up before any commit or merge.

  That is, you should avoid creating avoid merge hell looking like this:

  ![Screen Shot 2013-02-06 at 11 54 24 PM](https://f.cloud.github.com/assets/31995/133685/34e4a9a6-70b0-11e2-8cce-6134cfb4d386.png)

* Once feature is merged to develop, all fixes should go to develop.

  The same way, if feature is released, all fixes should go to master, and merge downstream.

* When deploying on staging multiple features, use throw-away `staging` branch.

  Also, enable the [`rerere` git feature](http://git-scm.com/2010/03/08/rerere.html), to remember and replay resolved merge conflicts.
