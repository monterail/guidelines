# Text Editors Guidelines

###Table of content:
1. [Obligatory settings](#obligatory-settings)
2. [Sublime Text](#sublime-text)

##Obligatory Settings
###We use 2 spaces indent and also take care about trailing whitespaces

**Ensure your editor is configured properly:**

*.vimrc*

```
if has("autocmd")
  " remove trailing white spaces
  autocmd BufWritePre * :%s/\s\+$//e
endif
```

*Neatbeans config*

```
* Tools -> Options -> Editor -> On Save > Remove Trailing Whitespace From
* Select: All lines
```
*RubyMine config*

```
Go to preferences / editor and check:

* Ensure line feed at file end on Save
* Strip trailing spaces on Save
```

*SublimeText config*

```
// Trims white space added by auto_indent when moving the caret off the line.
"ensure_newline_at_eof_on_save": true,
"tab_size": 2,
"translate_tabs_to_spaces": true,
"trim_automatic_white_space": true,
"trim_trailing_white_space_on_save": true
```

##Sublime Text

###Useful resources:

- [Useful keyboard shortcuts](https://gist.github.com/eteanga/1736542)
- [Unofficial Documentation](http://sublime-text-unofficial-documentation.readthedocs.org/en/latest/index.html)
- [SublimeText Screencasts](http://code.tutsplus.com/articles/perfect-workflow-in-sublime-text-free-course--net-27293)

###In order to improve your workflow you may consider using some of extensions listed below:

- [Package Control](https://sublime.wbond.net/installation) - helps in installing and managing packages. Absolulety **must have**.
- [GitGutter](https://github.com/jisaacks/GitGutter) - keeps track of `git diff` stats and shows them inline

     ![screenshot-gitgutter](https://raw.github.com/jisaacks/GitGutter/master/screenshot.png)
- [SideBarEnhancements](https://github.com/titoBouzout/SideBarEnhancements) - adds some useful file operations available from sidebar panel

    ![screenshot-sidebar](https://camo.githubusercontent.com/9c427039fb2e97570edf760c4abeaf43d208f702/687474703a2f2f646c2e64726f70626f782e636f6d2f752f34333539363434392f7469746f2f7375626c696d652f536964654261722f73637265656e73686f742e706e67)

- [Emmet *(zencoding)*](https://github.com/sergeche/emmet-sublime) - with code shortcuts *(like `ul>li.class*3`)* helps you write code much faster. Visit [smashing magazine](http://www.smashingmagazine.com/2013/03/26/goodbye-zen-coding-hello-emmet/) for more examples.

  ![demo-emmet](http://www.smashingmagazine.com/wp-content/uploads/2013/03/extra.gif)

- [CursorRuler](https://github.com/icylace/CursorRuler) - draws vertical ruler in cursor position. Helps in tracking indentation level.

    ![screenshot-ruler](http://blog.ysmood.org/wp-content/uploads/2013/06/CursorRuler.jpg)


- [DashDoc](https://github.com/farcaller/DashDoc) - you can look up the word under the cursor or selected text in `Dash` using `ctrl+h` shortcut. *We use Dash in Monterail, ask your PM for license details*

   ![screenshot-dashdoc](http://christophheer.me/static/img/2012-07-30-dash/search_datetime.png)

- [Gist](https://github.com/condemil/Gist) - you can create gists directly from sublime text in just few seconds.

   ![screenshot-gist](http://www.neverstopbuilding.com/images/post-content/gist.png)
