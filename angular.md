# Angular.js (+ Rails)

## Read [5 tips on how to use AngularJS with Rails that changed how we work](http://codetunes.com/2014/5-tips-on-how-to-use-angularjs-with-rails-that-changed-how-we-work/)

## Use [rails-assets.org](https://rails-assets.org/) to include Angular

```ruby
source 'https://rubygems.org'
source 'https://rails-assets.org'

gem 'ngmin-rails' # solution to minify problem & array syntax
gem 'rails-assets-angular'
gem 'rails-assets-angular-prevent-default'
gem 'rails-assets-angular-ui-router'
```

## Directory structure

```
app
  - assets
    - javascripts
      - main
        - filters
        - controllers
        - services
        - compontents # view 'E' directives(view components) 
          - header
          - dashboard
          - leaderboard
      - admin
        - filters
        - controllers
        - services
        - components
          - statistics
          - manage
      - shared
        - directives # mostly 'A' directives
        - services
        - filters
      - lib
      application.js      - only `require` sprockets directives
      init.coffee         - app initialization and configuration
      router.coffee       - ui-router routes
```

then in application.js

```js
//= require angular
//= require angular-prevent-default

//= require ./init
//= require ./router
//= require_tree ./lib
//= require_tree ./main
//= require_tree ./admin
//= require_tree ./shared
```

## View directives / components

View directives(components) should be modular by design and preferably use isolated scope(all dependencies passed explicitly through scope attrs).

You can use [script similar to this one](https://gist.github.com/Machiaweliczny/9a8307b8437f4f452504) to create them easy like this:
```
ruby dir.rb app/assets/javascripts/main/components/dashboard/ directiveName scopeAttr1 scopAttr2
```

## Code style

After stormy debate on weekly dev meeting we agreed to follow this code convention:

```coffee
angular.module('myapp')
.service 'ServiceNameVeryLongLongName', (
  $scope, MyVeryLongServiceName,
  MyService2, MyService3
) ->

  method: (param) ->
    alert(param)

  # ...
```

## Help ngmin handle dependencies instead of using array notation or `$inject`

```coffee
# init.coffee
angular.module("myapp", ["ui.router"])

# controllers/main_ctrl.coffee
angular.module("myapp")
.controller "MainCtrl", (
  $scope, MyService
) ->
  # ...
```
## Controllers


* first params with `$` prefix
* then params passed from routing (objects)
* last comes passed services (classes)

So instead of:

```coffee
angular.module('app')
.controller 'Something', (
  $scope, Project, $http, user
) ->
```

it should be:

```coffee
angular.module('app')
.controller 'Something', (
  $scope, $http, user, Project
) ->
```

## Common useful settings


### Inject CSRF token

```coffee
# init.coffee
angular.module('myapp').config ['$httpProvider', ($httpProvider) ->
  $httpProvider.defaults.headers.common['X-CSRF-Token'] =
    angular.element(document.querySelector('meta[name=csrf-token]')).attr('content')
]
```

### Setup template cache
```coffee
# init.coffee
angular.module('myapp').config [
  '$provide', '$httpProvider', 'Rails',
  ($provide, $httpProvider, Rails) ->
    if Rails.env != 'development'
      $provide.service '$templateCache', ['$angularCacheFactory', ($angularCacheFactory) ->
        $angularCacheFactory('templateCache', {
          maxAge: 3600000 * 24 * 7,
          storageMode: 'localStorage',
          recycleFreq: 60000
        })
      ]

    $provide.factory 'railsAssetsInterceptor', ['$angularCacheFactory', ($angularCacheFactory) ->
      request: (config) ->
        if assetUrl = Rails.templates[config.url]
          config.url = assetUrl

        config
    ]

    $httpProvider.interceptors.push('railsAssetsInterceptor')
]
```

## Use [angular-translate](https://github.com/angular-translate/angular-translate) for i18n

```coffee
# rails_locales_loader
angular.module('shared').factory 'railsLocalesLoader', ['$http', ($http) ->
  (options) ->
    $http.get("locales/#{options.key}.json").then (response) ->
      response.data
    , (error) ->
      throw options.key
]

# init.coffee
angular.module('shared').config ['$translateProvider', ($translateProvider) ->
  $translateProvider.useLoader('railsLocalesLoader')
  $translateProvider.preferredLanguage('en')
]
```

## Optimalization

* Consider using [bindonce directive](https://github.com/Pasvaz/bindonce) to optimize number of `$watch`es. Highly recommended in bigger, long-running projects.

## IE8 dont's

[Official Angular guide about IE](http://docs.angularjs.org/guide/ie)

* Avoid HTML5 tags and attributes (avoid HTML5 in general)

* Avoid custom tags

  Use `<div ui-view="">` or `<span ui-view="">` instead of `<ui-view>`

* Add `id="ng-app"` to the root element in conjunction with `ng-app` attribute

## Debuging
Use [batarang (stable)](https://chrome.google.com/webstore/detail/angularjs-batarang-stable/niopocochgahfkiccpjmmpchncjoapek) to debug scopes(It adds _AngularJS_ tab in chrome developer tools). You have to enable it for particular site and enable debuger in _Models_ section.
