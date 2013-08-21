# JavaScript guidelines

* "classes are for designers", so don't scope with `ids` and `classes` in js. JavaScript developers should use [data-* attributes](http://roytomeij.com/2012/dont-use-class-names-to-find-HTML-elements-with-JS.html), [js-* prefix for classes](http://coderwall.com/p/qktuzw) or [role attribute](https://github.com/kossnocorp/role) (go to [discussion](https://github.com/monterail/rules/pull/4))
* prefix jQuery objects with `$` sign unless you are working with [angular project](http://angularjs.org/) (go to [discussion](https://github.com/monterail/rules/pull/10))
* [Detect and inform about network issues](http://html5demos.com/offline-events#view-source), especially in SPA
* Prefer $(this) over $(@) in CoffeeScript.

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
    this.app.constant("envConfig", function(){
      return #{data}
    })
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
angular.element(document).ready () =>
  @app.config ["$httpProvider", (provider) ->
    provider.defaults.headers.common['X-CSRF-Token'] = angular.element('meta[name="csrf-token"]').attr('content')
  ]
```
