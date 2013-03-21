## CSS guidelines

### For each new project implement CSS style guide first

Like [Github's one](https://github.com/styleguide/css). In our apps it is implemented as Rails engine available
under `/styles` URL in development mode. It consists of rendered components with ready-to-copy snippets of HAML and SCSS.

### Use [CSS normalize](http://necolas.github.com/normalize.css/) instead of CSS reset

### Use [Bourbon](http://bourbon.io/) for CSS3 properties

### Use SCSS preprocessor for all stylesheets

### Don't use sprocket's commands in SCSS files

Sprocket's `require` commands are primitive and do not work well with SCSS files.

Instead, use SCSS's `@import` command. It supports globbing and development mode too.

### When file is larger than few hundred lines, think about modularization

If it does, create directory with the same name as SCSS file, and extract code to separate files.

After that import these files using following sprockets template:

```scss
// stylesheets.css.scss

@import "stylesheets/*";
```

This style of importing implies, that extracted files should not be dependent on each other.

Put all code that is dependent at the top of `stylesheets.css.scss`.

### Learn about CSS specificity and keep it as low as possible

http://www.htmldog.com/guides/cssadvanced/specificity/

For example following selectors should be avoided:

```css
div.klass { ... }
ul li .klass { ... }
section a.btn { ... }
html a { ... }
div p { ... }
```

Also remember:

* Don't nest SCSS selectors more than 3 levels deep.
* Don't use `!important` to solve high specificity problems.
* IDs should never be used in CSS.

If you're not sure about this:

* read http://csswizardry.com/2012/11/code-smells-in-css/
* watch http://youtu.be/hou2wJCh3XE?t=16m49s

### Test CSS design using different content for HTML elements

This especially concerns testing different text lengths of paragraphs, button labels, form labels.

It also means you should test very long words like supercalifragilisticexpialidocious.

### Try to add CSS properties instead of removing them

Following styles should be avoided:

```css
margin: 0;
padding: 0;
border: none;
float: left;
background: none;
```

If you need to remove styles, you've applied them too early.

Consider different scoping, think if you can use mixins or refactor CSS to separate class.

### Don't use "is" as prefix for state rules. Use verbs.

[SMACSS](http://smacss.com/) says state rules should be prefixed with "is-", for example "is-active".

**But** we think it is superfluous, as state classes are adjectives,
what cleanly distinguish them from submodule classes like alert-error.

Moreover Bootstrap v2 simple verbs too, so we're consisten with other guidelines.

### Use proper SCSS formatting

* Use soft-tabs with a two space indent.
* Put spaces after `:` in property declarations.
* Put spaces before `{` in rule declarations.
* Put spaces after `,` in attribute declarations;
* Use hex color codes `#000` unless using rgba.
* Use `//` for comment blocks (instead of `/* */`).
* put nested components at the end of block
* puts `@include` and `@extend` just before nested components
* use extra blank line between selectors (both top level and nested ones)
* use dashes for separating words in class names
* don't omit leading zeros in numeric values
* don't use units in zero numeric values
* use short hexadecimal notation if possible
* never put many rule declarations in one line
* Don’t use underscores in class names.

Example syntax:

```scss
// This is a good example!
.styleguide-format {
  border: 1px solid #0f0;
  color: #000;
  background: rgba(0, 0, 0, 0.5);
  @include border-radius(5px);

  .styleguide-nested {
    color: #222;
  }

  .styleguide-another {
    color: #333;
  }
}

#some_element {
  display: none;
}
```

