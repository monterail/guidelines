# Ruby guidelines

* Consider using `Hash#fetch` instead of `Hash#[]`

  The first one throws exception where it fails to read a key.
  In the second case we usually get `undefined method ... for nil:NilClass`
  somewhere else in the code. The first one is better for debug.
