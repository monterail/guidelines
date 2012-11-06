The Monterail's Rules
=====

## 1. Git

### Use [`git up`](https://github.com/aanand/git-up) tool

especially if you're not experienced with git. It keeps the commit history clean.

```bash
gem install git-up
git config --global git-up.bundler.check true
git config --global git-up.bundler.autoinstall true
git config --global git-up.fetch.all true
```

If you're comfortable with Git commands, use [`git config --global branch.autosetuprebase always`](http://blog.aplikacja.info/2010/11/git-pull-rebase-by-default/)

## 2. JavaScript

* "classes are for designers", so don't scope with `ids` and `classes` in js. JavaScript developers should use [data-* attributes](http://roytomeij.com/2012/dont-use-class-names-to-find-HTML-elements-with-JS.html), [js-* prefix for classes](http://coderwall.com/p/qktuzw) or [role attribute](https://github.com/kossnocorp/role) (go to [discussion](https://github.com/monterail/rules/pull/4))

### 2.1. JS on Rails

* [use callbacks](https://gist.github.com/3019231) instead of low-level `$.ajax` when possible
* [move javascript tags](https://github.com/rails/rails/pull/7888) from `HEAD` to the bottom (go to [discussion](https://github.com/monterail/rules/pull/2))

## 3. Rails

* add [miniprofiler](http://railscasts.com/episodes/368-miniprofiler) to the `Gemfile` when using `RDBMS` (go to [discussion](https://github.com/monterail/rules/pull/3))


### Useful gems

#### General

* [devise](https://github.com/plataformatec/devise) - auth & more
* [devise-async](https://github.com/mhfs/devise-async) - sending devise emails in background
* [friendly_id](https://github.com/norman/friendly_id) - slug generation
* [carrierwave](https://github.com/jnicklas/carrierwave) - file uploads
* [activeadmin](http://activeadmin.io) - admin panel for free
* [rails_config](https://github.com/railsjedi/rails_config) - miscallanous settings for different stages
* [sidekiq](http://mperham.github.com/sidekiq/) - threaded background queue

#### Development

* [pry-rails](https://github.com/rweng/pry-rails) - better `rails console`
* [rack-livereload](https://github.com/johnbintz/rack-livereload) - autoreload assets & views
* [guard-livereload](https://github.com/guard/guard-livereload)
* [letter_opener](https://github.com/ryanb/letter_opener) - see sent emails in browser




## 4. Ruby

## 5. Projects in general

* prepare maintenance screens for server errors and configure http servers / proxies

