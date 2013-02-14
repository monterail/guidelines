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

## Required gems for new apps

* [strong_parameters](https://github.com/rails/strong_parameters) (even for Rails 3.x)
* [letter_opener](https://github.com/ryanb/letter_opener) (for development mode)
* [slim](https://github.com/stonean/slim) and [slim-rails](https://github.com/leogalmeida/slim-rails)
* [sidekiq](http://mperham.github.com/sidekiq/)
* [devise-async](https://github.com/mhfs/devise-async)
