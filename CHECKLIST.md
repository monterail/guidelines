# Checklist

This document contains things which you **always should** check on specific states of project lifetime.

## When initializing project

* use db postgres instead mysql (--database=postgresql)
* skip test unit (-T)
* skip bundle (--skip-bundle)
* add [required gems](https://github.com/monterail/guidelines/blob/master/RAILS.md#required-gems-for-new-apps) to the Gemfile
* run `bundle install --binstubs`
* Set up [Vagrantfile](http://vagrantup.com/)

## When pushing project to the staging and/or production

* setup [rotate logs](http://www.stackednotion.com/blog/2011/09/12/how-to-setup-log-rotation-for-rails-apps/)
* Make redirect to one domain (on nginx level).
  Example: http://www.monterail.com => http://monterail.com
* Setup airbrake or getsentry
* Setup process monitor (e.g. monit)
* If using devise, set correct "from" email address
* [prepare maintenance screens for server errors and configure http servers / proxies](http://codetunes.com/2012/11/21/custom-maintenance-page-for-nginx)
