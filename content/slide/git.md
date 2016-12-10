+++
date = "2016-06-01T22:16:53+02:00"
title = "Git"
type = "slide"
author_twitter = "sbeleidy"
coffee_link = "https://cash.me/sbeleidy/5"
caption = "Track changes with Git's version control system"

+++

## Outline

* Introduction
* Installation
* Hosting
* Tools
* Commands & Concepts

Note:
In-depth guide available [here](/guide/git).



## Introduction

Git is a popular version control system - commonly used in software development

A version control system allows you to keep track of changes you make over time
as well as revert back to a previous state of the project



## Installation

Download & Install from the [git website](https://git-scm.com/downloads). 

You can then use git to add a version control system to any of your projects.



## Hosting

Host your git repositories on a cloud service to share your code. Think DropBox for code.

Popular options:
* [GitLab](https://gitlab.com) - recommended for private work
* [Github](https://github.com) - recommended for public work
* [Bitbucket](https://bitbucket.com)



## Tools

To simplify interacting with Git you may use one of the following tools:

* [GitKraken](https://www.gitkraken.com/) - recommended
* [SourceTree](https://www.sourcetreeapp.com/) 
* [GitHub Desktop](https://desktop.github.com/)



## Commands & Concepts

* `Clone` - get a local copy of a repository/project that is shared with you
* `Init` - add git to a local folder to begin tracking it
* `Branches` - additional copies of the code, usually referring to a portion that is still a work in progress
* `Checkout` - switch between branches
* `Commits` - saving the current state to the repository history for a specific branch
* `Merge` - commit additions of one branch onto another - usually used to add completed code into the main branch



## Commands & Concepts

* `Remote` - a url where the code is stored that can be accessed by others you want to share the repository with
* `Push` - update a remote with your local history
* `Pull` - update your local copy with a remote's history
* `Fork` - create a copy of a repository where you are free to make changes without pushing your code back to the initial repository
* `Pull request` - a request to merge code from one branch to another - sometimes from a forked copy
* `Feature Branch Workflow` - a common workflow where a branch is created for each new feature then it is merged into the main branch



## Clone

Cloning means downloading a local copy of a hosted git repository/project

You can clone a repository from the url where it is located: `git clone <URL>`



## Init

You can start tracking changes to your project by running the init command.

To initialize a git repository in a folder, you run `git init`.



## Branches

Branches are additional copies of the code that you can edit and commit to without worrying
about breaking things on the main branch.

The default/ main branch is the `master` branch.

Some projects will also use a `dev` or `develop` branch to represent the next release or work in progress.



## Checkout

Checkout means to switch to another branch.

You can switch to an already available branch using `git checkout OTHER_BRANCH`

You can create a new branch and switch to it by adding `-b` using
`git checkout this_is_a_new_branch -b`



## Commit

A commit saves changes to the project history. Changes are saved to the checked out branch.

First you should add the files you want to commit to history.

Add files using `git add *` or `git add filename.txt`

Remove files by using `rm` instead of `add`

Commit: `git commit -m "My commit message"`

If you want to commit all changes, you can skip explicitly adding files by adding
`-a` to the command.



## Merge

Merging is how you combine 2 branches together. This allows you to add changes that
from one branch into another.

Switch to the main branch you are merging into using `git checkout <branch_name>`
then merge the other branch using `git merge <other_branch_name>`



## Remotes

A remote is a hosted location for the repository / project. You can have multiple
remotes for one project.

When you set up a git hosting provider like GitHub or GitLab, that remote is often
called `origin`. 



## Push

To update a remote, you push your local copy to it using `git push <remote> <branch>`

That will update the entered remote at the entered branch from your local copy



## Pull

To update your local copy from a remote, you pull the code from it using
`git pull <remote> <branch>`

That will update your local copy with code from the entered remote at the entered branch 



## Fork

You may sometimes work on projects where you do not have access to edit the code

A fork is a copy of the code where you have full access so you can edit it as you please.



## Pull/Merge Request

A Pull / Merge Request is a function of the Git hosting provider that creates a
request to the owner of a repository to merge one branch with another

Uses:

* reviewing collaborators' code before adding it to master
* discussing code
* contributing to projects you do not have direct access to
* many others



## Feature Branch Workflow

A common workflow used with Git is the feature branch workflow

A new branch for every new feature that requires development

Once the feature is complete, merge the feature branch into master