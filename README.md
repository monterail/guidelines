The Monterail's Rules
=====

Following document contains development guidelines for [Monterail.com, LLC](http://monterail.com).

## General

1. Leave the campground cleaner than you found it.
2. [Configure your editor](https://gist.github.com/4451806) to automatically strip trailing whitespaces.

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
* prefix jQuery objects with `$` sign unless you are working with [angular project](http://angularjs.org/) (go to [discussion](https://github.com/monterail/rules/pull/10))

### JS on Rails

* [use callbacks](https://gist.github.com/3019231) instead of low-level `$.ajax` when possible
* [move javascript tags](https://github.com/rails/rails/pull/7888) from `HEAD` to the bottom (go to [discussion](https://github.com/monterail/rules/pull/2))

## [Rails](RAILS.md)

## Ruby
* [avoid rescuing StandardError and Exception](http://stackoverflow.com/questions/10048173/why-is-it-bad-style-to-rescue-exception-e-in-ruby#answer-10048406)

## HTML

### Use consistent class names and markup for HTML components

For basic ones, use [twitter bootstrap 2](http://twitter.github.com/bootstrap/) conventions.
For example don't use `<div class="crumbs">` for breadcrumbs instead of `<ul class="breadcrumb"></ul>`. This also concerns layout, forms, buttons, flash messages, navigation and others.

If possible, document new markup proposals in our [styleguide](https://github.com/monterail/boilerplate-rails).

For proper forms markup, install the [formtastic-bootstrap](https://github.com/mjbellantoni/formtastic-bootstrap) gem.

## [Coding / development enrivonments](TOOLBOX.md)

## Contribution to this repository

According to [this issue](https://github.com/monterail/rules/issues/25) we agreed to:

> * declare if he/she wants to participate in issues tagged with given word, for example #ruby or #css. Then all issues / pull-request would be tagged appropriately.
> * if so, he/she would be obligated to comment on issue or at least give +1 or no opinion comment for example until week after issue has been created.
> * the idea is subscribed persons would be obligated to comment. we will mention them in such cases.
> * final decision for merging is for CTO
> * it's of couse possible for non-declared person to participate. That list would help us determine if issue is ready to be accepted or it needs more discussion / time (for example if everyone would vote "no opinion").

Here is current list of tags along their participants:

* #ruby - @jandudulski, @sheerun, @chytreg, @teamon, @szajbus, @Ostrzy
* #js - @jandudulski, @sheerun, @chytreg, @szajbus, @porada, @Ostrzy
* #git - @jandudulski, @sheerun, @teamon, @szajbus, @Ostrzy
* #html - @jandudulski, @sheerun, @porada, @venticco, @Ostrzy
* #unix - @jandudulski, @sheerun, @teamon, @szajbus
* #css - @jandudulski, @sheerun, @porada, @venticco
* #design -  @jandudulski, @sheerun, @design, @venticco, @szymo, @porada

Pull requests, issues, and comments from third party are welcome too!

