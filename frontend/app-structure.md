# Front-end application structure

## Our principles to the directories/files structure of CSS are slightly simple:
```
/stylesheets
  /base
    ...
  /modules
    ...
  /pages
    ...
```

## The main rule we try to keep with is to split web elements in as small chunks as possible.
#### Imagine inline form(e.g. for signing in) with 2 inputs and 1 submit button.
Normally we'd do something like this:
```html
## login-form.html

<form id="login-form">
  <h2>Sign in</h2>
  <input id="login-form-input-name" type="text" name="name" placeholder="Name" />
  <input id="login-form-input-password" type="password" name="password" placeholder="Password" />
  <button id="login-form-button" type="submit">Sign in</button>
</form>
```

```css
## login-form.css

#login-form {
  float: right;
  width: 400px;
  margin: 20px 0;
  //Let's say those three properties below are page specific
  padding: 20px;
  background-color: yellow;
  border: 1px solid red;
}

#login-form h2 {
  font-size: 20px;
  margin-bottom: 10px;
}

#login-form-input-name {
  display: inline-block;
  vertical-align: top;
  // customizing its appereance
}

#login-form-input-password {
  display: inline-block;
  vertical-align: top;
  margin-left: 10px;
  // customizing its appereance
}

#login-form-button {
  display: inline-block;
  vertical-align: top;
  margin-left: 10px;
  // customizing its appereance
}
```
Okay, so besides that it's the worst written CSS ever, you can see that each selector takes responsibility only for itself. It's not reusable at all.

Now see the real separation of concerns principle basing on foregoing example:
```html
## login-form.html

<div class="page__login">
  <form class="form login-form login-form--inline ui-pull-right">
    <h2 class="form__title">Sign in</h2>
    <div class="login-form__segment">
      <input class="input" type="text" name="name" placeholder="Name" />
    </div>
    <div class="login-form__segment">
      <input class="input" type="password" name="password" placeholder="Password" />
    </div>
    <div class="login-form__segment">
      <button class="btn btn--primary" type="submit">Sign in</button>
    </div>
  </form>
</div>
```
```css
## all.css

.ui-pull-right {
  float: right;
}

.input {
  // customizing its appereance
}

.btn {
  // customizing its appereance
}

.btn--primary {
  // changes e.g. background color
}

.page__login .login-form {
  padding: 20px;
  background-color: yellow;
  border: 1px solid red;
}

.form {
  margin: 20px 0;
}

.form__title {
  font-size: 20px;
  margin-bottom: 10px;
}

.login-form {
  width: 400px;
}

.login-form--inline .login-form__segment {
  display: inline-block;
  vertical-align: top;
  margin-left: 10px;
}

.login-form--inline .login-form__segment:first-child {
  margin-left: 0;
}
```

Taking that refactored code into the stucture would look following:
```
/base
  btn.css
  form.css
  ui-helpers.css

/modules
  login-form.css

/pages
  login.css
```

```css
## btn.css

.btn {
  // customizing its appereance
}
.btn--primary {
  // changes e.g. background color
}
```

```css
## form.css

.form {
  margin: 20px 0;
}

.form__title {
  font-size: 20px;
  margin-bottom: 10px;
}

.input {
  // customizing its appereance
}
```

```css
## ui-helpers.css

.ui-pull-right {
  float: right;
}
```

====> TODO: this needs to be separated anyway to login form and common form
```css
## login-form.css

.login-form {
  width: 400px;
}

.login-form--inline .login-form__segment {
  display: inline-block;
  vertical-align: top;
  margin-left: 10px;
}

.login-form--inline .login-form__segment:first-child {
  margin-left: 0;
}
```

```css
## login.css

.page__login .login-form {
  padding: 20px;
  background-color: yellow;
  border: 1px solid red;
}
```

Of course this structure is flexible. You can freely add your own directories. For instance if your application uses few color variants you can create another directory `/themes` or whatever, you call it. The most important to remember is that we take as a basic structure presented above which can be extended depending of application needs/nature. Cheers!
