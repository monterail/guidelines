The Monterail's Rules
=====

## <a href="#devops"></a>1. Dev Ops

## <a href="#javascript"></a>2. JavaScript

* "classes are for designers", so don't scope with `ids` and `classes` in js. JavaScript developers should use [data-* attributes](http://roytomeij.com/2012/dont-use-class-names-to-find-HTML-elements-with-JS.html), [js-* prefix for classes](http://coderwall.com/p/qktuzw) or [role attribute](https://github.com/kossnocorp/role)

### <a href="#jsonrails"></a>2.1. JS on Rails

* [use callbacks](https://gist.github.com/3019231) instead of low-level `$.ajax` when possible
* [move javascript tags](https://github.com/rails/rails/pull/7888) from `HEAD` to the bottom

## <a href="#rails"></a>3. Rails

* add [miniprofiler](http://railscasts.com/episodes/368-miniprofiler) to the `Gemfile` when using `RDBMS`

## <a href="#ruby"></a>4. Ruby

## <a href="#projects"></a>5. Projects in general

* prepare maintenance screens for server errors and configure http servers / proxies

