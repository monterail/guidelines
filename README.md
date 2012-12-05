The Monterail's Rules
=====

## 0. General

1. Leave the campground cleaner than you found it.

## 1. Git

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

## 2. JavaScript

* "classes are for designers", so don't scope with `ids` and `classes` in js. JavaScript developers should use [data-* attributes](http://roytomeij.com/2012/dont-use-class-names-to-find-HTML-elements-with-JS.html), [js-* prefix for classes](http://coderwall.com/p/qktuzw) or [role attribute](https://github.com/kossnocorp/role) (go to [discussion](https://github.com/monterail/rules/pull/4))

### 2.1. JS on Rails

* [use callbacks](https://gist.github.com/3019231) instead of low-level `$.ajax` when possible
* [move javascript tags](https://github.com/rails/rails/pull/7888) from `HEAD` to the bottom (go to [discussion](https://github.com/monterail/rules/pull/2))

## 3. Rails

* add [miniprofiler](http://railscasts.com/episodes/368-miniprofiler) to the `Gemfile` when using `RDBMS` (go to [discussion](https://github.com/monterail/rules/pull/3))

### Every app should

* [rotate logs in produciton](http://www.stackednotion.com/blog/2011/09/12/how-to-setup-log-rotation-for-rails-apps/)

* Make redirect to one domain (on nginx level).
  Example: http://www.monterail.com => http://monterail.com

* When making time-based statistic use the midnight of next day as upper limit

* Split upload path into subdirectories
```ruby
# partition_uid("1234567890")
# => "123/456/789/0"
def partition_uid(uid, size)
    uid.gsub(/(.{#{size}})/, "\\1/")
end
```

* If converting images, optimize them for web. imagemagick options: `-strip +profile "exif" -quality 80`

* Use honeybadger or airbrake

* If using whenever, set absolute paths
```ruby
set :output, File.join("log", "cron.log")
job_type :rake, "cd :path && RAILS_ENV=:environment /usr/local/bin/bundle exec rake :task :output"
```

* Use some kind of process monitor (e.g. monit)

* If using devise, set correct "from" email address


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

#### Frontend

* [active_link_to](https://github.com/twg/active_link_to.git) - easy way to handle active links
* [select2-rails](https://github.com/argerim/select2-rails.git) - fancy select and autocomplete

## 4. Ruby

## 5. Projects in general

* prepare maintenance screens for server errors and configure http servers / proxies

## 6. Coding / development enrivonments

* use [livereload](https://gist.github.com/653bb4d039adcf7f35b3)

