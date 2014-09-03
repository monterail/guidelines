# Text Editors Guidelines

#####We use 2 spaces indent and also take care about trailing whitespaces

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
"trim_automatic_white_space": true
```
