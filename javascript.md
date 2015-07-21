# JavaScript guidelines

* "classes are for designers", so don't scope with `ids` and `classes` in js. JavaScript developers should use [data-* attributes](http://roytomeij.com/2012/dont-use-class-names-to-find-HTML-elements-with-JS.html), [js-* prefix for classes](http://coderwall.com/p/qktuzw) or [role attribute](https://github.com/kossnocorp/role) (go to [discussion](https://github.com/monterail/rules/pull/4))
* prefix jQuery objects with `$` sign unless you are working with [angular project](http://angularjs.org/) (go to [discussion](https://github.com/monterail/rules/pull/10))
* [Detect and inform about network issues](http://html5demos.com/offline-events#view-source), especially in SPA
* Prefer $(this) over $(@) in CoffeeScript.
* Try to avoid using [date.js](http://www.datejs.com/), use [moment.js](http://momentjs.com/) instead. datejs overwrites native methods and tends to break stuff.
* Use `camelCase` for variable and function names. The only exception to this rule are JSON properties which are `under_scored`.
* Use trailing commas in **multiline object literails** and **multiline arrays**. If you'd like to add an element you won't left your comma on the previous line. It helps to keep VCS history clean.
```javascript
// Bad          // Good         // Bad            // Good
let arr = [     let arr = [     let obj = {       let obj = {
  'foo',          'foo',          foo: 'foz',       foo: 'foz',
  'bar'           'bar',          bar: 'baz'        bar: 'baz',
];              ];              };                };
```

## JavaScript on Rails

* [use callbacks](https://gist.github.com/3019231) instead of low-level `$.ajax` when possible
* [move javascript tags](https://github.com/rails/rails/pull/7888) from `HEAD` to the bottom (go to [discussion](https://github.com/monterail/rules/pull/2))
