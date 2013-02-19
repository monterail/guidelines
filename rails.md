Rails
=====

This page contains Rails specific tips and recommendations. See also [useful gems](rails-gems.md)

## Every app should

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
* If using whenever, set absolute paths
```ruby
set :output, File.join("log", "cron.log")
job_type :rake, "cd :path && RAILS_ENV=:environment /usr/local/bin/bundle exec rake :task :output"
```

* In non-SPA applications render URLs for JavaScript on server side. If you need to add them to custom JavaScript component, just print the links and iterate through them:
  ```
  $('a').each(function(index, el) { carousel.add(index, el); });
  ```
* Use I18n keys instead of plain text in views
* Use attr_accessible instead of attr_protected

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

## Required gems for new apps

* [strong_parameters](https://github.com/rails/strong_parameters) (even for Rails 3.x)
* [letter_opener](https://github.com/ryanb/letter_opener) (for development mode)
* [slim](https://github.com/stonean/slim) and [slim-rails](https://github.com/leogalmeida/slim-rails)
* [sidekiq](http://mperham.github.com/sidekiq/)
* [devise-async](https://github.com/mhfs/devise-async)


## Setup proper redis namespaces

![redis namespaces](redis-namespace.png)

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


### Rack cache

```ruby
# config/environments/production.rb
config.action_dispatch.rack_cache = {
  :metastore    => "redis://localhost:6379/0/app_name:#{Rails.env}:rack-cache:metastore",
  :entitystore  => "redis://localhost:6379/0/app_name:#{Rails.env}:rack-cache:entitystore"
}
```

### Sidekiq

```ruby
# config/initializers/sidekiq.rb
Sidekiq.configure_server do |config|
  config.redis = { :namespace => "app_name:#{Rails.env}:sidekiq" }
end

Sidekiq.configure_client do |config|
  config.redis = { :namespace => "app_name:#{Rails.env}:sidekiq" }
end
```

### Faye server

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

