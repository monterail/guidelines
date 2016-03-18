### Basic performance check

* https://developers.google.com/speed/pagespeed
* http://www.webpagetest.org/

### Images

Too big images are charmful for user data transfer and experience so keep this in mind while changing them.

Check out this guideline to see how to optimize images - https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization?hl=en

There's a lot of tools to compress or convert images
 * `alias imgdim="sips -g pixelHeight -g pixelWidth $1"` - useful on mac to check image dimensions
 * [imagemagic](http://www.imagemagick.org/script/index.php)
   * `convert -resize 1280x old_image.jpg new_image.jpg` - usefull to resize horizontaly keeping proportions
   * `convert old_image.png new_image.jpg` - changes type compression of image
 * [image_optim](https://github.com/toy/image_optim) - uses multiple tools to compress without losing quality.
 
### Database N + 1 queries
 
Use https://github.com/flyerhzm/bullet to detect and correct them.
 
