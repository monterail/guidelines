# Git Guidelines

###Table of content:
1. [Master Branch](#master-branch)
2. [Commit messages](#commit-messages)
3. [Commiting and pushing](#commiting-and-pushing)
4. [Coding features](#coding-features)
5. [Applying fixes](#applying-fixes)
6. [Commit review](#commit-review)
7. [Deploying](#deploying)
8. [Git configuration](#git-configuration)


## Master branch

The `master` branch should be kept stable at all times.

Master reflects code currently running on production.

## Commit messages

We use following format for our commit messages:

```
[JIRA-123] Capitalized, short (50 chars or less) summary

More detailed explanatory text, if necessary.

[skip ci] [no review] [accepts eecafe123]
```

1. Summary is maximally 80 characters long, from capital letter, no dot at the end
2. We prepend ID of an issue in issue tracker at the beginning of summary
3. Next lines are description explaining the details
4. At the very end we use tags for code integration and code review tools.
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

If pushing fails because remote is not in sync, we use `git pull --rebase` command.

If we really need to use `git push --force`, we use it immediately after push, or not at all.

## Coding features

We commit directly to `next` branch unless:

1. Feature cannot be easily disabled by feature flag
2. Feature is not going to be released at the end of current sprint
3. Feature concern code redesign that can affect other developers

If we decide that feature in `next` is not to be released on next deploy, we mark it with [feature toggle](http://martinfowler.com/bliki/FeatureToggle.html)

The feature toggles should span as little code as possible, for example only hiding view through which feature can be accessed.

We name feature branches prepending "feature/" prefix and using dashes, like: `feature/something-new`.

If we use Trello in project, we also prepend ID of Trello card, like: `feature/123-something-new`

Feature branches are branched from `next`, and merged back to `next` after finishing them.

We use `--no-ff` flag when merging feature branches to `next` (for easy reverts).

Before merging feature branch to `next` we always issue `git rebase -i next` on feature branch and:

1. Remove all "fix" commits marking them as "fixup"
2. Move fix commits after commits they fix
3. Cleanup commit messages marking them as "rename"
4. We squash “Work in Progress” commits

We make sure all tests on feature branch are passing after rebasing.

We remove feature branch from repository after we merge it to `next`.

## Applying fixes

Fixes are applied using following rules:

1. Bugs in `master` branch are fixed in `master` and immediately merged to `next` branch.
2. Bugs in `next` are fixed in `next`, no need to merge to feature branches
3. Bugs in feature branches are fixed in feature branched and rebased before merge to `next`

Once feature is merged to `next`, all fixes should go to `next`.

## Commit review

We use internal [GHCR](https://github.com/monterail/ghcr) tool for doing code review.

We use `[no review]` tag in *description* of commits that don't need code review
(like pulling translations from localeapp, debug logging, automatically generated commits).

If our commit `xxx` was rejected, we commit fix and add `[accepts xxx]` in *description* of it.

## Deploying

When we decide the `next` branch is to be deployed, we:

1. We make sure everything works as expected on staging and CI
2. We merge `next` branch to `master` branch
3. We push code to production

After deployment all feature branches are rebased to current `next`.

## Git configuration

```
git config --global branch.autosetuprebase always
git config --global rerere.enabled true
```

The autorebase prevents "merge hells" that happend when we `git pull` without `--rebase` flag.

The [`rerere` git feature](http://git-scm.com/2010/03/08/rerere.html) feature remembers our past merge conflicts.
