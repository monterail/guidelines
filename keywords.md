# Technology keywords

**Thing we prefer (and use) are in bold**


### [Ruby][1]
- 1.8 - legacy unsupported
- 1.9, **2.0+**
- [rvm][2]
- [**rbenv**][3]

### [Rails][4]
- 1.x and earlier - ancient
- 2.x - really old, not cool anymore
- 3.0 - fine, but missing assets pipeline
- 3.1, 3.2 - fine
- **4.x** - the only option for new apps
- [**bundler**][5]

### Browser ecosystem
- **[coffeescript][6]** - JavaScript language replacement
- **[Single Page Applications (SPA)][7]**
- **[angularjs][8]** - the frontend framework of choise
- [jquery][9]

### Frontend (css/html)
- [bootstrap][10]
- [sass][11]
- **[BEM convention][12]**
- [haml][13], **[slim][14]**

### Real Time / [PubSub][15]
- [**websockets**, longpolling, server sent events (SSE)][16]
- **[faye][17]**

### Internet protocols
- [HTTP][18] & [HTTPS][19] / [SSL][20]
- [SSH][21], SFTP ([SSH keys][22])
- SMTP/IMAP/POP3

### Source Code Management (SCM)
- **[git][23]**
- **[GitHub][24]**
- [BitBucket][25]

### Storage and friends
- **[postgres][26]** (pg) - very cool
- [mysql][27] - not so cool, better use postgres
    - [amazon RDS][28] - AWS managed mysql
- [mongodb][29] - document store, be very careful
- **[redis][30]** - key-value store, good for cache or queues
- [memcached][31] - mostly replaced by redis as a cache
- **[neo4j][32]** - graph database
- **[elasticsearch][33]** - great search and analytics engine
- **[RabbitMQ][34]** - messaging


### Scheduling / Background processing
- **[sidekiq][35]** / resque / delayed_job
- [cron][36]
- **clockwork** / whenever

### Internationalization (i18n)
- [localeapp][37]
- **[phraseapp][38]**

### Sending emails
- sendmail
- [sendgrid][39]
- **[mailchimp][40]**

### Analytics
- [Google Analytics][41]
- [Kissmetrics][42]
- [Mixpanel][43]

### Online payments
- [stripe][44]
- [braintree][45]
- [chargify][46]
- [recurly][47]

### Hosting & others
- [Dedicated vs IaaS vs PaaS][48]
- [heroku][49]
- [hetzner][50]
- [rackspace][51]
- [Amazon AWS][52]
    - [S3][53]
    - [EC2][54]
    - [CloudFront][55]

### Mac
- [homebrew][56]


  [1]: https://www.ruby-lang.org/en/
  [2]: https://rvm.io/
  [3]: https://github.com/sstephenson/rbenv
  [4]: http://rubyonrails.org/
  [5]: http://bundler.io/
  [6]: http://coffeescript.org/
  [7]: http://en.wikipedia.org/wiki/Single-page_application
  [8]: http://angularjs.org/
  [9]: http://jquery.com/
  [10]: http://getbootstrap.com/
  [11]: http://sass-lang.com/
  [12]: http://bem.info/
  [13]: http://haml.info/
  [14]: slim-lang.com
  [15]: http://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern
  [16]: http://stackoverflow.com/a/12855533/301093
  [17]: http://faye.jcoglan.com/
  [18]: http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol
  [19]: http://en.wikipedia.org/wiki/HTTP_Secure
  [20]: http://en.wikipedia.org/wiki/Secure_Sockets_Layer
  [21]: http://www.slashroot.in/secure-shell-how-does-ssh-work
  [22]: https://help.github.com/articles/generating-ssh-keys
  [23]: http://git-scm.com/
  [24]: http://github.com
  [25]: https://bitbucket.org/
  [26]: http://www.postgresql.org/
  [27]: http://www.mysql.com/
  [28]: http://aws.amazon.com/rds/
  [29]: http://www.mongodb.org/
  [30]: http://redis.io/
  [31]: http://memcached.org/
  [32]: http://www.neo4j.org/
  [33]: http://www.elasticsearch.org/
  [34]: http://www.rabbitmq.com/
  [35]: http://sidekiq.org/
  [36]: http://en.wikipedia.org/wiki/Cron
  [37]: http://localeapp.com/
  [38]: https://phraseapp.com/
  [39]: http://sendgrid.com/
  [40]: http://mailchimp.com/
  [41]: http://www.google.com/analytics/
  [42]: https://www.kissmetrics.com/
  [43]: https://mixpanel.com/
  [44]: https://stripe.com/
  [45]: https://www.braintreepayments.com/
  [46]: http://chargify.com/
  [47]: https://recurly.com/
  [48]: http://en.wikipedia.org/wiki/Cloud_computing#Service_models
  [49]: http://heroku.com/
  [50]: http://www.hetzner.de/en/
  [51]: http://rackspace.com/
  [52]: http://aws.amazon.com/
  [53]: http://aws.amazon.com/s3/
  [54]: http://aws.amazon.com/ec2/
  [55]: http://aws.amazon.com/cloudfront/
  [56]: http://brew.sh/
