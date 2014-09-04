# HTML guidelines

* **Use consistent class names and markup for HTML components.**

    If possible, use [Twitter Bootstrap](http://twitter.github.com/bootstrap/) conventions, e.g. don’t use `<div class="crumbs"></div>` for breadcrumbs when `<ul class="breadcrumb"></ul>` feels more appropriate.

    This also concerns layout, forms, buttons, flash messages, navigation and others.

* **Don’t use underscores in class names, `id`s and other HTML attributes, like `data-*`.**

    Use dashes instead.

* **Always use double quotes for attributes.**

    Especially in Slim templates.

* **Use `//` instead of `http://` for images, script or iframes. This will make life much easier if someday you decide to use https for site.


* Use anchor (`a` HTML tag element) when click should change page url.

* Use `button type="submit"` if click would submit a form.

* Use `button type="button"` for any other click actions (e.g. next page with ajax loading, toggle view etc).

If possible, document new markup proposals in our [styleguide](https://github.com/monterail/boilerplate-rails).
