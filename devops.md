# DevOps

This documents contains information about deployment practices and running applications in production mode.

## Deployment

* Deploy only with automated tools (capistrano), never via git pull

## Web server

* Set up domain redirection (e.g. http://www.monterail.com => http://monterail.com)
* Prepare easy to turn on/off [maintenance screens](http://codetunes.com/2012/custom-maintenance-page-for-nginx)

## Monitoring and logs

* Configure process monitor (monit) for application and its components (e.g. background workers, faye, etc.)
* Set up [logs rotation](http://stackednotion.com/blog/2011/09/12/how-to-setup-log-rotation-for-rails-apps/)

## Application

* Configure URLs and e-mail addresses (e.g. devise "from" address)
* Add error notifier (getsentry or airbrake)
* Add newrelic gem