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


#### Setup XSRF-TOKEN cookie in Rails for angular CSRF protection

Official doc says: http://docs.angularjs.org/api/ng.$http

```
Since only JavaScript that runs on your domain could read the cookie, your server can be assured that the XHR came from JavaScript running on your domain.
To take advantage of this (CSRF Protection), your server needs to set a token in a JavaScript readable session cookie called XSRF-TOKEN on first HTTP GET request.
On subsequent non-GET requests the server can verify that the cookie matches X-XSRF-TOKEN HTTP header.
```

Add simply this code in Rails, Angular make the rest.

```ruby
class ApplicationController < ActionController::Base
  protect_from_forgery
  after_filter  :set_csrf_cookie_for_ng

  def set_csrf_cookie_for_ng
    cookies['XSRF-TOKEN'] = form_authenticity_token if protect_against_forgery?
  end

  protected
    def verified_request?
      super || form_authenticity_token == request.headers['X_XSRF_TOKEN']
    end
end
```
