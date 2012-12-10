Rails
=====

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

