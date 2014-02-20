# Angular.js (+ Rails)

## Use [RAILS ASSETS](https://rails-assets.org/) to include Angular

    source 'http://rubygems.org'
    source 'http://rails-assets.org'

    gem 'ngmin-rails' # solution to minify problem & array syntax
    gem 'rails-assets-angular'
    gem 'rails-assets-angular-prevent-default'
    gem 'rails-assets-angular-ui-router'

## Catalogues structure

    app
      - assets
        - javascripts
          - controllers
          - directives
          - filters
          - lib
          - services
          application.js
          init.js.coffee
          router.js.coffee

then in application.js

    //= require angular
    //= require angular-prevent-default

    //= require ./init
    //= require ./router
    //= require_tree ./lib
    //= require_tree ./controllers
    //= require_tree ./directives
    //= require_tree ./filters
    //= require_tree ./services

## Use array notation instead of $inject

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

## Pass Rails env as Angular constant

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

## Inject CSRF token

  ```coffee
  for meta in document.getElementsByTagName('meta')
    if meta.name.toLowerCase() == 'csrf-token' && meta.content
      angular.element(document).ready () =>
        @app.config ['$httpProvider', (provider) ->
          provider.defaults.headers.common['X-CSRF-Token'] = meta.content
        ]
  ```

## Optimalization

* Consider using [bindonce directive](https://github.com/Pasvaz/bindonce) to optimize number of `$watch`es. Highly recommended in bigger, long-running projects.

## IE8 dont's

[Official Angular guide about IE](http://docs.angularjs.org/guide/ie)

* avoid HTML5 tags and attributes (avoid HTML5 in general)

* avoid custom tags:

  ```html
  <div ui-view="">
  ```

  or

  ```html
  <span ui-view="">
  ```

  instead of

  ```html
  <ui-view>
  ```

* Add id="ng-app" to the root element in conjunction with ng-app attribute
