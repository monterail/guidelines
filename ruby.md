# Ruby guidelines

* Consider using `Hash#fetch` instead of `Hash#[]`.

  The first one throws exception where it fails to read a key.
  In the second case we usually get `undefined method ... for nil:NilClass`
  somewhere else in the code. The first one is better for debug.

* Use of new ruby hash syntax for new projects.

  Use old syntax only when necessary, for example to put non-symbol as a key.

* Avoid rescuing StandardError and Exception

  They [should never be rescued](http://stackoverflow.com/questions/10048173/why-is-it-bad-style-to-rescue-exception-e-in-ruby#answer-10048406), if they are raised, we should get notified by getsentry and fix them.
