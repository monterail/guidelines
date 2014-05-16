# Rails guidelines

* If app is running on ruby 2.0 put the ruby version in `Gemfile` else just put the ruby version it uses in the README.md file.

* [Use service objects for decomposing application](http://blog.codeclimate.com/blog/2012/10/17/7-ways-to-decompose-fat-activerecord-models/)
  Try not to use for example observers or filters.

* Group gems in [meaningful groups](https://gist.github.com/teamon/69a31a132ce18825f003) (not alphabetically).

* When using an unofficial version of a gem (from a fork or different branch/revision) always include a short comment explaining the reasons. The idea is to know when the declaration can be switched back to using official version. E.g.

  ```ruby
  # We need feature X that is available only in this branch
  gem 'activeadmin', github: 'gregbell/active_admin', branch: 'master'
  ```

* Use CoffeeScript instead of plain JavaScript.

* When making time-based statistic use the midnight of next day as upper limit.

* Split upload path into subdirectories.

  ```ruby
  # partition_uid("1234567890")
  # => "123/456/789/0"
  def partition_uid(uid, size)
      uid.gsub(/(.{#{size}})/, "\\1/")
  end
  ```

* If converting images, optimize them for web. imagemagick options: `-strip +profile "exif" -quality 80`.

* If using whenever, set absolute paths.

  ```ruby
  set :output, File.join("log", "cron.log")
  job_type :rake, "cd :path && RAILS_ENV=:environment /usr/local/bin/bundle exec rake :task :output"
  ```

* In non-SPA applications render URLs for JavaScript on server side. If you need to add them to custom JavaScript component, just print the links and iterate through them:

  ```coffee
  $('a').each (index, el) -> carousel.add(index, el)
  ```

* Use I18n kes instead of plain text in views. In order to keep the reusability, the translation strings shouldn’t contain punctuation at their end, because those belong to the very UI.

* Use attr_accessible instead of attr_protected.

* Occasionally run `rails_best_practices` command, and follow the hints.
* For more advanced apps, setup [vagrant](http://www.vagrantup.com/) along with [puppet provisioner](http://docs-v1.vagrantup.com/v1/docs/provisioners/puppet.html). The puppet file shoud be kept in `manifests/site.pp`.

* If using `strong_parameters` gem, turn `whitelist_attributes` off, otherwise leave it enabled.

* Use unicorn server in production.

* Secure secure token in public projects.

    Put it in settings.yml on production and generate once during initial setup, change when needed.

* Use `rails-timeago` gem by default. Don't render "ago" dates on server-side.

    The reason is they need to be often updated in real-time on browser side.
    For example 3 minutes after staying on page "1 minute ago" should say "4 minutes ago".

* Use `bin/setup` file as [thoughtbot describes](http://robots.thoughtbot.com/post/41439635905/bin-setup) (for example for git hooks).

* Never ever ever use natural keys in your database.

* Do not add files to `vendor/assets`. Find proper gem or create a new one in [rails-assets](https://github.com/rails-assets).

* Use InnoDB database format instead of MyISAM

* Use [lograge](https://github.com/roidrage/lograge) to improve Rails default logging format.

* If you want your model to be compatible with ActiveModel, `include ActiveModel::Model` in Rails 4,
  and `include ActiveAttr::Model` in Rails 3. If not, use `Virtus` instead

* Add `db/schema.rb` to `.gitignore`

* Use single file extension for default cases. Instead of `file.html.slim`, `file.css.sass`, `file.js.coffee` use `file.slim`, `file.sass`, `file.coffee`

* Use `\A` and `\z` to validate user input instead of `^` and `$`

```
username = "<script>alert(1)</script>\nsheerun"
!!username.match(/^[a-z]+$/)   # => true
!!username.match(/\A[a-z]+\z/) # => false
```

## How to choose database

* If you think about using mysql - use postgresql
* If you think about using mongodb - think again, spend more time thinking if you really need mongodb features, if not - use postgres

## Setup generators

```ruby
# config/application.rb
config.generators do |g|
  g.helper      false
  g.stylesheets false
  g.javascripts false
  g.view_specs  false
end
```

## Remember to add indexes for foreign keys

```ruby
class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.integer :post_id
      t.integer :user_id

      # ...
    end

    add_index :comments, :post_id # <= this
    add_index :comments, :user_id # <= and this
  end
end
```

## Suggested gems for Rails applications

```ruby
gem 'yajl-ruby', require: 'yajl'
gem 'strong_parameters'
gem 'slim-rails'
gem 'sidekiq'
gem 'devise-async'
gem 'decent_exposure'
gem 'schema_plus'
gem 'coffee-rails-source-maps'
gem 'no_more_pending_migrations'

group :test do
  gem 'rspec-rails'
  # gem 'rspec-fire' # anytime you use mocks or stubs
end

group :assets do
  gem 'rails-timeago', '~> 2.0'
end

group :development do
  gem 'letter_opener'
  gem 'rails_best_practices'
  gem 'commands'
end
```

See also [useful gems](gems.md).

## Setup proper redis namespaces

![redis namespaces](images/redis-namespace.png)

### Rails cache store

```ruby
# config/application.rb
config.cache_store = :redis_store, "redis://localhost:6379/0/app_name:#{Rails.env}:cache"
```


### Rails session store

```ruby
# config/initializers/session_store.rb
Rails.application.config.session_store :redis_store, :redis_server => { :namespace => "app_name:#{Rails.env}:session" }
```


## Rack cache

```ruby
# config/environments/production.rb
config.action_dispatch.rack_cache = {
  :metastore    => "redis://localhost:6379/0/app_name:#{Rails.env}:rack-cache:metastore",
  :entitystore  => "redis://localhost:6379/0/app_name:#{Rails.env}:rack-cache:entitystore"
}
```

## Sidekiq

```ruby
# config/initializers/sidekiq.rb
Sidekiq.configure_server do |config|
  config.redis = { :namespace => "app_name:#{Rails.env}:sidekiq" }
end

Sidekiq.configure_client do |config|
  config.redis = { :namespace => "app_name:#{Rails.env}:sidekiq" }
end
```

## Faye server

```ruby
# faye.ru
faye_server = Faye::RackAdapter.new(
  :mount => '/faye',
  :timeout => 30,
  :engine => {
    :type  => Faye::Redis, # or Faye::PersistentRedis
    :namespace => "app_name:#{ENV["RACK_ENV"]}:faye:"
  }
)
```

## Source maps

```ruby
# Do not compress assets
config.assets.compress = false

# Expands the lines which load the assets
config.assets.debug = true

# Enable sources maps
config.sass.debug_info = true
config.sass.line_comments = false
```


## Redis

Use `raw: true` option when using redis as a cache store.

Example:

```ruby
class MyController
  def index
    render_cached_json("api:foos", expires_in: 1.hour) do
      Foo.all
    end
  end

  def render_cached_json(cache_key, opts = {}, &block)
    opts[:expires_in] ||= 1.day

    expires_in opts[:expires_in], :public => true
    data = Rails.cache.fetch(cache_key, {raw: true}.merge(opts)) do
      block.call.to_json
    end

    render :json => data
  end
end
```

This will store rendered json in redis, plain json, as string, as you should it should always do. Notice where is to_json and raw: true option. And you get HTTP cache headers for free.

## Mongodb

Remember to include

```ruby
gem "bson_ext"
```

when using mongodb (you know, for speed)


## Add environment tag in Raven config

```ruby
Raven.configure do |config|
  config.dsn = 'https://some-dsn-here'
  config.tags = { environment: Rails.env }
end
```

## Configuration files

Add sample configuration.yml file to repository and write about it in README. The file should be named using the following convention:

`FILE_NAME.EXT` -> `FILE_NAME.sample.EXT`, so `database.yml` becomes `database.sample.yml`. This is better than `FILE_NAME.EXT.example` because it keeps the file extension in place.

Files that should have samples:

* `config/database.yml` - obvious
* `config/mongoid.yml` - if using mongo...
* `config/application.yml` - for [lovely cat](https://github.com/laserlemon/figaro#does-figaro-have-a-mascot)
* `config/settings.*.yml`, `config/settings/*.yml` madness - rails_config you bustard


## Remember to set reserved subdomains

```ruby
RESERVED_SUBDOMAINS = %w(
  about abuse account accounts admin admins administrator
  administrators anonymous assets billing billings board calendar
  contact copyright e-mail email example feedback forum
  hostmaster image images inbox index invite jabber legal
  launchpad manage media messages mobile official payment
  picture pictures policy portal postmaster press privacy
  private profile search sitemap staff stage staging static
  stats status support teams username usernames users webmail
  webmaster login use jars main data user img css stylesheets
  cdn gallery info system www
)

validates :domain, presence: true,
                   subdomain: { reserved: RESERVED_SUBDOMAINS }
```

## Devise

Avoid switching from `DELETE` to `GET` for signout. It should be considered as a potential [security hole](http://homakov.blogspot.com/2012/04/csrf-afterparty-must-read-rules.html).

## If using gem from github put it under monterail organization

```ruby
gem "ssl_routes", :github => "monterail/ssl_routes"
```

instead of

```ruby
gem "ssl_routes", :github => "sheerun/ssl_routes"
```

Bus factor++

## Disable Rack::Cache for rails < 4

For apps running rails version < 4 set

```ruby
config.action_controller.perform_caching = true
```

Rails will automagicly add `Rack::Cache` middleware to the top of stack. This will cause request with cache headers to be cached which can break e.g. authentication when you want to send cache headers but also always require http basic auth. It is also much better to use nginx or varnish as cache in case auth is not an issue. See [this pull request](https://github.com/rails/rails/pull/7838) for reference.

## localeapp pull policy

- When using `localeapp pull` always do that on the same branch (preferebly `master`).
- Do not commit translation files in feature branches. If you do you gonna have a baaaad time when merging it to master.

## roar

Prevent weird bugs when using roar representers modules with `extend`.

```ruby
# config/initializers/roar.rb

# When accidentally `extend`ing `nil` singleton with
# representer module it will be added to every `nil`
# (since it's a singleton).
# Representers override various methods that will cause bugs
# in weird places until next restart of ruby process
class NilClass
  def extend(*args)
    raise ArgumentError.new("Can't extend nil:NilClass")
  end
end
```

## Sentry

Override sentry log level to distinguish between production and other (e.g. staging) environments

```ruby
# config/initializers/raven.rb
class Raven::Event
  class << self
    def from_exception_with_level_override(exc, options = {}, &block)
      options[:level] ||= ENV["SENTRY_LOG_LEVEL"]
      from_exception_without_level_override(exc, options, &block)
    end

    alias_method_chain :from_exception, :level_override
  end
end
```
