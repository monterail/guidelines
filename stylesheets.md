# CSS guidelines

* **For each new project create a CSS style guide first.**

    Like [Github’s one](https://github.com/styleguide/css). It’s implemented in our apps as a Rails engine available
under `/styles` URL in development mode. It consists of rendered components with ready-to-copy snippets of HAML and SCSS.

* **Use [CSS normalize](http://necolas.github.com/normalize.css/) as the foundation.**

    Don’t use CSS reset.

* **Write stylesheets and html in accordance with [BEM](http://bem.info).**

  Our selectors:

  ```
  .block {}
  .block__element {}
  .block--modifier {}
  ```

* **Use SCSS preprocessor for all stylesheets.**

* **Don’t use Sprockets’ commands in Sass files.**

    Sprocket’s `require` commands are primitive and do not work well with SCSS files.

    Use `@import` command instead. It supports globbing and development mode too.

* **When file is larger than few hundred lines, modularize.**

    Create directory with the same name as SCSS file, and extract code to separate files. After that, `@import` these files using following sprockets template.

    It’s recommended that the extracted files should not be dependent on each other.

* **Keep [selector specificity](http://www.htmldog.com/guides/cssadvanced/specificity/) as low as possible.**

    IDs should never be used in CSS.

    Don’t use `!important` to solve high specificity problems either.

* **Test CSS design using different content for HTML elements.**

    This especially concerns testing different lengths of text for paragraphs, button labels, form labels, etc. Make sure they don’t break with very long words like `supercalifragilisticexpialidocious`.

* **Try to add CSS properties instead of removing them.**

    If you need to remove styles that were applied too early, consider different scoping, usage of mixins or refactoring.

* **Never use data URI with properties that might be vendor-prefixed.**

    [The explanation](https://github.com/monterail/guidelines/issues/146).

* **Don’t use `is-` as prefix for rules describing state rules.**

* **Embrace relative units.**

* **Put temporary styles in `temporary.css` with proper comment**

    ```css
    /* TODO */
    .some .temp .css #foo { width: 100px; }
    .some .other .crap { color: red }
    #pretty #awesome #border { border: 1px dashed purple; }
    ```

* **Use `create`, `delete` and `update` for naming classes in CSS**

    Instead of `modified`, `removed`, `added` etc. It makes back-end guys’ life easier.

* **When using Sass, take advantage of the `rgba(#hex, alpha)` format.

    Apart from being shorter than `rgba(r, g, b, alpha)`, it’s a small step towards better code maintainability.

## Proper SCSS formatting

* Use soft-tabs with a two space indent.
* Put spaces after `:` in property declarations.
* Put spaces before `{` in rule declarations.
* Put spaces after `,` in attribute declarations.
* Use hex color codes (even in `rgba` — Sass understands `rgba(#000, 0.5)`).
* Use `//` for comment blocks instead of `/* */`.
* Don’t nest selectors more than 3 levels deep.
* Put nested components at the end of block.
* Put `@include` and `@extend` before nested components.
* Use a blank line between selectors (both top level and nested ones).
* Use dashes for separating words in class names, don’t use underscores.
* Don’t omit leading zeros in numeric values.
* Don’t use units in zero numeric values.
* Use short hexadecimal notation where applicable.
* Never put multiple property declarations in one line.

### Example syntax

```scss
.styleguide-format {
  border: 1px solid #0f0;
  color: #000;
  background: rgba(0, 0, 0, 0.5);
  @include border-radius(5px);

  .styleguide-nested {
    color: #222;
  }

  .styleguide-another-nested {
    color: #333;
  }
}
```
