# Technology keywords

**Thing we prefer (and use) are in bold**


### [Ruby](https://www.ruby-lang.org/en/)
- 1.8 - legacy unsupported
- 1.9, **2.0+**
- [rvm](https://rvm.io/)
- [**rbenv**](https://github.com/sstephenson/rbenv)

### [Rails](http://rubyonrails.org/)
- 1.x and earlier - ancient
- 2.x - really old, not cool anymore
- 3.0 - fine, but missing assets pipeline
- 3.1, 3.2 - fine
- **4.x** - the only option for new apps
- [**bundler**](http://bundler.io/)

### Browser ecosystem
- **[coffeescript](http://coffeescript.org/)** - JavaScript language replacement
- **[Single Page Applications (SPA)](http://en.wikipedia.org/wiki/Single-page_application)**
- **[angularjs](http://angularjs.org/)** - the frontend framework of choise
- [jquery](http://jquery.com/)

### Frontend (css/html)
- [bootstrap](http://getbootstrap.com/)
- [sass](http://sass-lang.com/)
- **[BEM convention](http://bem.info/)**
- [haml](http://haml.info/), **[slim](slim-lang.com)**

### Real Time / [PubSub](http://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern)
- [**websockets**, longpolling, server sent events (SSE)](http://stackoverflow.com/a/12855533/301093)
- **[faye](http://faye.jcoglan.com/)**

### Internet protocols
- [HTTP](http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) & [HTTPS](http://en.wikipedia.org/wiki/HTTP_Secure) / [SSL](http://en.wikipedia.org/wiki/Secure_Sockets_Layer)
- [SSH](http://www.slashroot.in/secure-shell-how-does-ssh-work), SFTP ([SSH keys](https://help.github.com/articles/generating-ssh-keys))
- SMTP/IMAP/POP3

### Source Code Management (SCM)
- **[git](http://git-scm.com/)**
- **[GitHub](http://github.com)**
- [BitBucket](https://bitbucket.org/)

### Storage and friends
- **[postgres](http://www.postgresql.org/)** (pg) - very cool
- [mysql](http://www.mysql.com/) - not so cool, better use postgres
    - [amazon RDS](http://aws.amazon.com/rds/) - AWS managed mysql
- [mongodb](http://www.mongodb.org/) - document store, be very careful
- **[redis](http://redis.io/)** - key-value store, good for cache, queues or inter-process communication
- [memcached](http://memcached.org/) - mostly replaced by redis as a cache
- **[neo4j](http://www.neo4j.org/)** - graph database
- **[elasticsearch](http://www.elasticsearch.org/)** - great search and analytics engine
- **[RabbitMQ](http://www.rabbitmq.com/)** - messaging


### Scheduling / Background processing
- **[sidekiq](http://sidekiq.org/)** / resque / delayed_job
- [cron](http://en.wikipedia.org/wiki/Cron)
- **clockwork** / whenever

### Internationalization (i18n)
- [localeapp](http://localeapp.com/)
- **[phraseapp](https://phraseapp.com/)**

### Sending emails
- sendmail
- [sendgrid](http://sendgrid.com/)
- **[mailchimp](http://mailchimp.com/)**

### Analytics
- [Google Analytics](http://www.google.com/analytics/)
- [Kissmetrics](https://www.kissmetrics.com/)
- [Mixpanel](https://mixpanel.com/)

### Online payments
- [stripe](https://stripe.com/)
- [braintree](https://www.braintreepayments.com/)
- [chargify](http://chargify.com/)
- [recurly](https://recurly.com/)

### Hosting & others
- [Dedicated vs IaaS vs PaaS](http://en.wikipedia.org/wiki/Cloud_computing#Service_models)
- [heroku](http://heroku.com/)
- [hetzner](http://www.hetzner.de/en/)
- [rackspace](http://rackspace.com/)
- [Amazon AWS](http://aws.amazon.com/)
    - [S3](http://aws.amazon.com/s3/)
    - [EC2](http://aws.amazon.com/ec2/)
    - [CloudFront](http://aws.amazon.com/cloudfront/)

### Mac
- [homebrew](http://brew.sh/)

### Unix
- [zsh](http://www.zsh.org/)
