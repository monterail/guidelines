# General guidelines

* Follow [12 factor](http://12factor.net/) rules during whole development process.

* For cycle cron-like tasks which should be run each X minutes/hours do not forget that each app restart (e.g. after deploy) will reset the timer. So it would be safe to, instead of

  ```ruby
  every(4.hours) { Mailer.perform_async }
  ```
  do
  ```ruby
  every(1.day, at: ['00:00', '04:00', '08:00', ..., '20:00']) { Mailer.perform_async }
  ```

* Add new gems in feature branches (or `next`). Perform big gem updates on `next` branch.
