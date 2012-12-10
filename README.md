The Monterail's Rules
=====

## General

1. Leave the campground cleaner than you found it.

## Git

### Use [`git up`](https://github.com/aanand/git-up) tool

especially if you're not experienced with git. It keeps the commit history clean.

```bash
gem install git-up
git config --global git-up.bundler.check true
git config --global git-up.bundler.autoinstall true
git config --global git-up.fetch.all true
git config --global git-up.rebase.arguments --preserve-merges
```

If you're comfortable with Git commands, use [`git config --global branch.autosetuprebase always`](http://blog.aplikacja.info/2010/11/git-pull-rebase-by-default/)

Follow the rules described in our [Git flow](GIT.md)

## JavaScript

* "classes are for designers", so don't scope with `ids` and `classes` in js. JavaScript developers should use [data-* attributes](http://roytomeij.com/2012/dont-use-class-names-to-find-HTML-elements-with-JS.html), [js-* prefix for classes](http://coderwall.com/p/qktuzw) or [role attribute](https://github.com/kossnocorp/role) (go to [discussion](https://github.com/monterail/rules/pull/4))

### JS on Rails

* [use callbacks](https://gist.github.com/3019231) instead of low-level `$.ajax` when possible
* [move javascript tags](https://github.com/rails/rails/pull/7888) from `HEAD` to the bottom (go to [discussion](https://github.com/monterail/rules/pull/2))

## [Rails](RAILS.md)

## Ruby

## Projects in general

* [prepare maintenance screens for server errors and configure http servers / proxies](http://codetunes.com/2012/11/21/custom-maintenance-page-for-nginx)

## Coding / development enrivonments

* use [livereload](https://gist.github.com/653bb4d039adcf7f35b3)

