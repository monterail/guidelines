# [Monterail.com](http://monterail.com) development guidelines

### Hi there.

This is a place on the Internet where we write down guidelines that we follow in our daily work.

Feel free to fork, comment and add your own.


## Guidelines

* [Ruby](#ruby)
* [Ruby on Rails](#ruby-on-rails)
* [JavaScript](#javascript)
* [CSS](#css)
* [HMTL](#hmtl)
* [Git](#git)
* [Open Source](#open-source)


## Extras

* [Checklists](#checklists)
* [Tools](#tools)
* [Gems](#gems)
* [Mac](#mac)


## Ruby

# Ruby guidelines

* Consider using `Hash#fetch` instead of `Hash#[]`.

  The first one throws exception where it fails to read a key.
  In the second case we usually get `undefined method ... for nil:NilClass`
  somewhere else in the code. The first one is better for debug.

* Use of new ruby hash syntax for new projects.

  Use old syntax only when necessary, for example to put non-symbol as a key.

* Avoid rescuing StandardError and Exception

  They [should never be rescued](http://stackoverflow.com/questions/10048173/why-is-it-bad-style-to-rescue-exception-e-in-ruby#answer-10048406), if they are raised, we should get notified by getsentry and fix them.

* Use semantic versions for all gems in Gemfile before pushing to production.

* Try to avoid calling self explicitly on reads

  Prefer

  ```ruby
  def pay_with_balance?
    has_payment? && balance > 0 && payment_applied > 0
  end
  ```
  over

  ```ruby
  def pay_with_balance?
    self.has_payment? && self.balance > 0 && self.payment_applied > 0
  end
  ```

* Don't overuse one letter variables unless it is very short block, repeating variable or exception.

Acceptable:

```ruby
[1,2,3].map{ |e| e + 1 }
```

```ruby
rescue Exception => e
  # ...
end
```

```ruby
user.tap do |u|
  u.uid   = user_hash['uid']
  u.email = user_hash['email']
  u.name  = user_hash['name']
  u.save!
end
```

Not acceptable:

```ruby
if a = variant.address
  [a.country_code, a.state || a.city].join("-")
end
```

```ruby
array.inject({}) do |h, e|
  h[foo] = e.bar
  h
end
```

```ruby
def process_text(s)
  # ...
end
```

## Testing

* use a [new expectation syntax](http://myronmars.to/n/dev-blog/2012/06/rspecs-new-expectation-syntax) when using RSpec (see [issue](https://github.com/monterail/guidelines/issues/170)):

```ruby
it { expect(something).to be_valid }
```

* Use Node.js instead of therubyracer for execjs runtime


## Ruby on Rails

# Rails guidelines

* Follow [12 factor](http://12factor.net/) rules during whole development process.

* If app is running on ruby 2.0 put the ruby version in `Gemfile` else just put the ruby version it uses in the README.md file.

* [Use service objects for decomposing application](http://blog.codeclimate.com/blog/2012/10/17/7-ways-to-decompose-fat-activerecord-models/)
  Try not to use for example observers or filters.

* Group gems in [meaningful groups](https://gist.github.com/teamon/69a31a132ce18825f003) (not alphabetically).

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


## JavaScript

# JavaScript guidelines

* "classes are for designers", so don't scope with `ids` and `classes` in js. JavaScript developers should use [data-* attributes](http://roytomeij.com/2012/dont-use-class-names-to-find-HTML-elements-with-JS.html), [js-* prefix for classes](http://coderwall.com/p/qktuzw) or [role attribute](https://github.com/kossnocorp/role) (go to [discussion](https://github.com/monterail/rules/pull/4))
* prefix jQuery objects with `$` sign unless you are working with [angular project](http://angularjs.org/) (go to [discussion](https://github.com/monterail/rules/pull/10))
* [Detect and inform about network issues](http://html5demos.com/offline-events#view-source), especially in SPA
* Prefer $(this) over $(@) in CoffeeScript.
* Try to avoid using [date.js](http://www.datejs.com/), use [moment.js](http://momentjs.com/) instead. datejs overwrites native methods and tends to break stuff.

## JavaScript on Rails

* [use callbacks](https://gist.github.com/3019231) instead of low-level `$.ajax` when possible
* [move javascript tags](https://github.com/rails/rails/pull/7888) from `HEAD` to the bottom (go to [discussion](https://github.com/monterail/rules/pull/2))


## Angular.js

#### Use array notation instead of $inject

Instead of:

```coffee
@MyCtrl = ($scope, $http) ->
  $scope.foo = 1

@MyCtrl.$inject = ["$scope", "$http"]
```

use:

```coffee
@app.controller "MyCtrl", ["$scope", "$http", ($scope, $http) ->
  $scope.foo = 1
]
```

and for long list of dependencies use

```coffee
@app.controller "MyCtrl", [
  "$scope", "$http", "$timeout", "$q", "$location",
  ($scope, $http, $timeout, $q, $location) ->
    $scope.foo = 1
]
```

Note that the body is indented more than with single line syntax (due to coffee rules)

#### Pass Rails env as Angular constant

application_helper.rb
```ruby
class ApplicationController < ActionController::Base
  def js_env
    data = {
      :foo => Figaro.env.foo,
      :bar_baz_foo => Figaro.env.bar_baz_foo,
    }.to_json

    <<-EOS
    this.app.constant("envConfig", #{data})
    EOS
  end
  helper_method :js_env
end
```

application.html.slim
```slim
script
  == js_env
```

Then you can simple include env module and get the value.

```coffee
@app.controller "MyCtrl", [
  "$scope", "envConfig",
  ($scope, envConfig) ->
    $scope.something = envConfig.foo + envConfig.bar_baz_foo
]
```

#### Inject CSRF token

```coffee
for meta in document.getElementsByTagName('meta')
  if meta.name.toLowerCase() == 'csrf-token' && meta.content
    angular.element(document).ready () =>
      @app.config ['$httpProvider', (provider) ->
        provider.defaults.headers.common['X-CSRF-Token'] = meta.content
      ]
```

### Optimalization

* Consider using [bindonce directive](https://github.com/Pasvaz/bindonce) to optimize number of `$watch`es. Highly recommended in bigger, long-running projects.



## CSS

# CSS guidelines

* **For each new project create a CSS style guide first.**

    Like [Github’s one](https://github.com/styleguide/css). It’s implemented in our apps as a Rails engine available
under `/styles` URL in development mode. It consists of rendered components with ready-to-copy snippets of HAML and SCSS.

* **Use [CSS normalize](http://necolas.github.com/normalize.css/) as the foundation.**

    Don’t use CSS reset.

* **Write stylesheets and html in accordance with [BEM](http://bem.info).**

  Our selectors:

  ```
  .block {}
  .block__element {}
  .block--modifier {}
  ```

* **Use SCSS preprocessor for all stylesheets.**

* **Don’t use Sprockets’ commands in Sass files.**

    Sprocket’s `require` commands are primitive and do not work well with SCSS files.

    Use `@import` command instead. It supports globbing and development mode too.

* **When file is larger than few hundred lines, modularize.**

    Create directory with the same name as SCSS file, and extract code to separate files. After that, `@import` these files using following sprockets template.

    It’s recommended that the extracted files should not be dependent on each other.

* **Keep [selector specificity](http://www.htmldog.com/guides/cssadvanced/specificity/) as low as possible.**

    IDs should never be used in CSS.

    Don’t use `!important` to solve high specificity problems either.

* **Test CSS design using different content for HTML elements.**

    This especially concerns testing different lengths of text for paragraphs, button labels, form labels, etc. Make sure they don’t break with very long words like `supercalifragilisticexpialidocious`.

* **Try to add CSS properties instead of removing them.**

    If you need to remove styles that were applied too early, consider different scoping, usage of mixins or refactoring.

* **Never use data URI with properties that might be vendor-prefixed.**

    [The explanation](https://github.com/monterail/guidelines/issues/146).

* **Don’t use `is-` as prefix for rules describing state rules.**

* **Embrace relative units.**

* **Put temporary styles in `temporary.css` with proper comment**

    ```css
    /* TODO */
    .some .temp .css #foo { width: 100px; }
    .some .other .crap { color: red }
    #pretty #awesome #border { border: 1px dashed purple; }
    ```

* **Use `create`, `delete` and `update` for naming classes in CSS**

    Instead of `modified`, `removed`, `added` etc. It makes back-end guys’ life easier.

* **When using Sass, take advantage of the `rgba(#hex, alpha)` format.

    Apart from being shorter than `rgba(r, g, b, alpha)`, it’s a small step towards better code maintainability.

## Proper SCSS formatting

* Use soft-tabs with a two space indent.
* Put spaces after `:` in property declarations.
* Put spaces before `{` in rule declarations.
* Put spaces after `,` in attribute declarations.
* Use hex color codes (even in `rgba` — Sass understands `rgba(#000, 0.5)`).
* Use `//` for comment blocks instead of `/* */`.
* Don’t nest selectors more than 3 levels deep.
* Put nested components at the end of block.
* Put `@include` and `@extend` before nested components.
* Use a blank line between selectors (both top level and nested ones).
* Use dashes for separating words in class names, don’t use underscores.
* Don’t omit leading zeros in numeric values.
* Don’t use units in zero numeric values.
* Use short hexadecimal notation where applicable.
* Never put multiple property declarations in one line.

### Example syntax

```scss
.styleguide-format {
  border: 1px solid #0f0;
  color: #000;
  background: rgba(0, 0, 0, 0.5);
  @include border-radius(5px);

  .styleguide-nested {
    color: #222;
  }

  .styleguide-another-nested {
    color: #333;
  }
}
```


## HMTL

# HTML guidelines

* **Use consistent class names and markup for HTML components.**

    If possible, use [Twitter Bootstrap](http://twitter.github.com/bootstrap/) conventions, e.g. don’t use `<div class="crumbs"></div>` for breadcrumbs when `<ul class="breadcrumb"></ul>` feels more appropriate.

    This also concerns layout, forms, buttons, flash messages, navigation and others.

* **Don’t use underscores in class names, `id`s and other HTML attributes, like `data-*`.**

    Use dashes instead.

* **Always use double quotes for attributes.**

    Especially in Slim templates.

* **Use `//` instead of `http://` for images, script or iframes. This will make life much easier if someday you decide to use https for site.

If possible, document new markup proposals in our [styleguide](https://github.com/monterail/boilerplate-rails).


## Git

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
* Use `[no review]` tag in description for commits that don't need code review.
  (pulling transaltions from localeapp, debug logging, automatically generated commits)

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

### Fixing future branch
  1. Type `rebase -i master` on feature branch
  2. Marking fix commits as `fixup`, and moving them just above commit they fix.
  3. Marking commits with bad messages with `reword`
  4. Resolving merge conflicts, adding files to index, and typing `git rebase --continue`

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

* Feature branch is ready for merge if there won't be any conflicts when doing merge to master.


## Open Source

# Open Source Guidelines

* Describe what you're going to do in issue before doing anything.


## Checklists

# Checklist

This document contains things which you **always should** check on specific states of project lifetime.

## When initializing project

* use db postgres instead of mysql (--database=postgresql)
* skip test unit (-T)
* skip bundle (--skip-bundle)
* add [required gems](https://github.com/monterail/guidelines/blob/master/RAILS.md#required-gems-for-new-apps) to the Gemfile
* Set up [Vagrantfile](http://vagrantup.com/)

## When pushing project to the staging and/or production

* setup [rotate logs](http://www.stackednotion.com/blog/2011/09/12/how-to-setup-log-rotation-for-rails-apps/)
* Make redirect to one domain (on nginx level).
  Example: http://www.monterail.com => http://monterail.com
* Setup airbrake or getsentry
* Setup process monitor (e.g. monit)
* If using devise, set correct "from" email address
* [prepare maintenance screens for server errors and configure http servers / proxies](http://codetunes.com/2012/11/21/custom-maintenance-page-for-nginx)

When maintaining project on staging and/or production

* Use LOW_PRIORITY update for MySQL for long-lasting queries on production


## Tools

# Coding and development tools

* [httpie](https://github.com/jkbr/httpie) - CLI for HTTP with nice usage and output
* [livereload](https://gist.github.com/653bb4d039adcf7f35b3) - reloads a browser after change in project
* [nginx](http://nginx.org/) - server
* [postgresql](http://www.postgresql.org/) - RDBMS
* [rbenv](https://github.com/sstephenson/rbenv) - manage rubies ([rvm migration help](https://gist.github.com/1384279))
* [vagrant](http://vagrantup.com/) - virtualized development


## Gems

# Useful gems

This list contains suggested gems for specific problems. If you find any specific gem, which should
be treated as a "standard", please add it below.

## API

* [faraday](https://github.com/lostisland/faraday) - easy way to wrap http responses
* [her](https://github.com/remiprev/her) - easy way to wrap RESTful API
* [roar](https://github.com/apotonick/roar) - very flexible way to create JSON representation of resources
* [roar-rails](https://github.com/apotonick/roar-rails) - include roar into rails

## Authentication

* [devise](https://github.com/plataformatec/devise) - auth & more

## Background processing

* [devise-async](https://github.com/mhfs/devise-async) - sending devise emails in background
* [sidekiq](http://mperham.github.com/sidekiq/) - threaded background queue
* [whenever](https://github.com/javan/whenever) - scheduler

## DB

* [schema_plus](https://github.com/lomba/schema_plus) - support for foreign keys, database defined validations and associations for postgresql

## Debug

* [better_errors](https://github.com/charliesome/better_errors) - replace standard rails error page with more useful version
* [miniprofiler](http://railscasts.com/episodes/368-miniprofiler) - profiler for database queries and time spent loading parts of page (go to [discussion](https://github.com/monterail/rules/pull/3))
* [pry-rails](https://github.com/rweng/pry-rails) - `rails console` replacement

## Development

* [guard-livereload](https://github.com/guard/guard-livereload)
* [letter_opener](https://github.com/ryanb/letter_opener) - see sent emails in browser
* [rack-livereload](https://github.com/johnbintz/rack-livereload) - autoreload assets & views

## Frontend

* [coffee-rails-source-maps](https://github.com/markbates/coffee-rails-source-maps) — support for CoffeeScript source maps
* [active_link_to](https://github.com/twg/active_link_to.git) - easy way to handle active links
* [select2-rails](https://github.com/argerim/select2-rails.git) - fancy select and autocomplete
* [simple_form](https://github.com/plataformatec/simple_form) - DSL for generating forms
* [localized_language_select](https://github.com/davec/localized_language_select) - select tag for language
* [country_select](https://github.com/stefanpenner/country_select) - select tag for country

## General

* [activeadmin](http://activeadmin.io) - admin panel for free
* [auto_strip_attributes](https://github.com/holli/auto_strip_attributes) - automatically strip whitespaces
* [carrierwave](https://github.com/jnicklas/carrierwave) - file uploads
* [decent_exposure](https://github.com/voxdolo/decent_exposure) - helper for creating declarative interfaces in controllers
* [figaro](https://github.com/laserlemon/figaro) - storing sensible settings in ENV
* [friendly_id](https://github.com/norman/friendly_id) - slug generation

## Testing

* [capybara](https://github.com/jnicklas/capybara) - webrat replacement
* [database_cleaner](https://github.com/bmabey/database_cleaner) - ensure a clean state during tests
* [factory_girl](https://github.com/thoughtbot/factory_girl) - fixtures replacement
* [factory_girl_rails](https://github.com/thoughtbot/factory_girl_rails) - factory girl integration for rails
* [rspec](https://github.com/rspec/rspec) - testing framework
* [rspec-rails](https://github.com/rspec/rspec-rails) - rspec integration for rails
* [site_prism](https://github.com/natritmeyer/site_prism) - DSL for [Page Object pattern](http://blog.josephwilk.net/cucumber/page-object-pattern.html)


## Mac

# Mac guidelines

* Setup new machine for development

```
# Please install Xcode and command-line tools manually
# Next run boostrap script, will setup dev environment for you

curl https://raw.github.com/monterail/guidelines/master/bin/bootstrap | bash
```
## Guidelines development

User `$ rake readme` to generate `README.md` from sections

## License

This repository is MIT-licensed.
