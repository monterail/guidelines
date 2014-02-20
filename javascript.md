# JavaScript guidelines

* "classes are for designers", so don't scope with `ids` and `classes` in js. JavaScript developers should use [data-* attributes](http://roytomeij.com/2012/dont-use-class-names-to-find-HTML-elements-with-JS.html), [js-* prefix for classes](http://coderwall.com/p/qktuzw) or [role attribute](https://github.com/kossnocorp/role) (go to [discussion](https://github.com/monterail/rules/pull/4))
* prefix jQuery objects with `$` sign unless you are working with [angular project](http://angularjs.org/) (go to [discussion](https://github.com/monterail/rules/pull/10))
* [Detect and inform about network issues](http://html5demos.com/offline-events#view-source), especially in SPA
* Prefer $(this) over $(@) in CoffeeScript.
* Try to avoid using [date.js](http://www.datejs.com/), use [moment.js](http://momentjs.com/) instead. datejs overwrites native methods and tends to break stuff.

## JavaScript on Rails

* [use callbacks](https://gist.github.com/3019231) instead of low-level `$.ajax` when possible
* [move javascript tags](https://github.com/rails/rails/pull/7888) from `HEAD` to the bottom (go to [discussion](https://github.com/monterail/rules/pull/2))
