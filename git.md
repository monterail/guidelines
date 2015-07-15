# Git Guidelines

###Table of content:
1. [The main branches](#the-main-branches)
2. [Supporting branches](#supporting-branches)
3. [Commit messages](#commit-messages)
4. [Commiting and pushing](#commiting-and-pushing)
5. [Code review](#coder-review)
6. [Coding](#coding)
8. [Git configuration](#git-configuration)


## The main branches (required)

Two main branches with an infinite lifetime:

### Master

The `master` branch should be kept stable at all times.

Master reflects code currently running on production.

### Development

Development reflects a state with the latest delivered development changes for
the next release.

## Supporting branches (optional)

### Feature branches

* May branch off from: `development`
* Must merge back into: `development` (--no-ff always)
* Before merge:
    - check all tests
    - rebase with latest `development`
* After merge:
    - remove feature branch
* Branch naming convention: anything except `master`, `develop`, `release-*`, or `hotfix-*`

Preferred name convention: prepending "feature/" prefix and using dashes, like: `feature/something-new`.
If we use Trello or JIRA in project, we also prepend ID of Trello card, like: `feature/123-something-new` or JIRA project code and task number `feature/PRO-123-something-new`

### Release branches

* May branch off from: `development`
* Must merge back into: `development` and `master` (--no-ff, after merge to `master` tag -a)
* Branch naming convention: `release-*`

### Hotfix branches

* May branch off from: `master`
* Must merge back into: `development` and `master` (--no-ff, after merge to `master` tag -a)
* Branch naming convention: `hotfix-*`

## Commit messages

We use following format for our commit messages:

```
[JIRA-123] Capitalized, short (50 chars or less) summary

More detailed explanatory text, if necessary.
```

1. Summary is maximally 50 characters long, from capital letter, no dot at the end
2. We prepend ID of an issue in issue tracker at the beginning of summary
3. Next lines are description explaining the details
5. Write present-tense, imperative-style commit messages

   **GOOD**:
   `[JIRA-123] Add currency service`

   **BAD**:
      `[JIRA-123] Adds currency service`

  **BAD**:
   `[JIRA-123] Added currency service`



If commit is for some reason not assigned to any ticket, we use following tags:

* `[fix]`: Changes fixing code not assigned to issue
* `[docs]`: Changes of documentation, not affecting code
* `[style]`: Changes that do not affect the meaning of the code
* `[refactor]`: Changes that affect code, but not behavior of app
* `[perf]`: Changes that improve performance
* `[test]`: Adding missing tests
* `[chore]`: Other, usually boring or repeating tasks

## Commiting and pushing

We apply "leave the campground cleaner than you found it" rule for the code we commit.

We don't commit code with [trailing whitespaces](https://gist.github.com/4451806) or no new line at the end.

We make sure all tests pass before pushing any code.

If pushing fails because remote is not in sync, you have to rebase your changes,
preferred way of doing it is `git rebase --onto new_parent old_parent`.

Never use `git push --force` on `master` or `development`, if you want to use it
on supporting branches make sure that nobody except you is working on that
branch otherwise do not use it.

## Code review

Each commit which will be merge into `master` or `development` have to be
reviewed, no exception.

## Coding

We never commit directly into `master` or `development`
We use for that purpose supporting branches.

## Git configuration

```
git config --global branch.autosetuprebase always
git config --global rerere.enabled true
```

The autorebase prevents "merge hells" that happened when we `git pull` without `--rebase` flag.

The [`rerere` git feature](http://git-scm.com/2010/03/08/rerere.html) feature remembers our past merge conflicts.
