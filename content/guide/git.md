+++
date = "2016-06-01T22:16:53+02:00"
title = "Git"
type = "guide"
author_twitter = "sbeleidy"
coffee_link = "https://cash.me/sbeleidy/5"
caption = "Track changes with Git's version control system"

+++

Slides available [here](/slide/git).

# Git

Git is a popular version control system that is commonly used on most software
development projects. A version control system allows you to keep track of
changes you make over time as well as revert back to a previous state of the
code. This can be useful when you work for a long time on a part of the code
but you can't figure out how to complete it. You would need to revert instead
of trying to figure out what you added or removed.

## Download & Install

You can download and install git by going to the [git website](https://git-scm.com/downloads). Once complete,
you can then use git to add a version control system to any of your projects.

## Hosting

When you work on a git repository / project, you can store it using a cloud
service so that others can access your code and work on it. Check out the
following services for hosting your git projects:

* [GitLab](https://gitlab.com) - recommended for private work
* [Github](https://github.com) - recommended for public work
* [Bitbucket](https://bitbucket.com)

You can think of these like DropBox, Box.net, Google Drive, iCloud and others
but for your code. Just like there are many alternatives for file sharing,
the same applies for code.

## Tools

When you are still new to git and still getting the hang of things, you
benefit a lot from using a tool that shows you exactly what's going on. There
are many git tools out there but these are the most commonly used:

* [SourceTree](https://www.sourcetreeapp.com/) - recommended
* [GitHub Desktop](https://desktop.github.com/)

## Commands and concepts

Several commands and concepts are available for git. We will
cover the common ones at a high level so you can get an idea of how powerful
git can be.

The basic idea is that git is something you add to your project to track
changes. It then gives you a history of your entire changes that you can
access and return to whenever you need to. Git also makes it easy to share
code with others. Let's cover everything at a high level before we dive in:

1. `Clone` - get a local copy of a repository/project that is shared with you
1. `Init` - add git to a local folder to begin tracking it
1. `Branches` - additional copies of the code, usually referring to a portion that is still a work in progress
1. `Checkout` - switch between branches
1. `Commits` - saving the current state to the repository history for a specific branch
1. `Merge` - commit additions of one branch onto another - usually used to add completed code into the main branch
1. `Remote` - a url where the code is stored that can be accessed by others you want to share the repository with
1. `Push` - update a remote with your local history
1. `Pull` - update your local copy with a remote's history
1. `Fork` - create a copy of a repository where you are free to make changes without pushing your code back to the initial repository
1. `Pull / Merge request` - a request to merge code from one branch to another - sometimes from a forked copy
1. `Feature Branch Workflow` - a common workflow where a branch is created for each new feature then it is merged into the main branch

<!-- 1. Rebase - modify a branch's history in order to simplify it and ensure compatibility with any new changes on the main branch - usually done prior to merging -->

### Clone

Cloning means downloading a local copy of a hosted git repository/project. This
will download the code so you can access it on your computer.

You can clone a repository once you have the url for the repository. You can then
run: `git clone <URL>` where `<URL>` is the url for the repository.

### Init

Often, you will be starting from scratch with your project locally. You can
start tracking changes to your project by running the init command. init will 
transform the folder you run it in into a git repository.

To initialize a git repository in a folder, you run `git init`.

### Branches

When working with others on a project it can be a problem to have everyone work on the
same part at the same time. Which person's updates would get saved? A better
way of working on the same part of the code at the same time is to use branches.

Branches are additional copies of the code that you can edit and commit to without worrying
about breaking things on the main branch.

The default/ main branch is the `master` branch. Some projects will also use a `dev`
or `develop` branch to represent the next release or work in progress.

When you create a new branch its version of history will be a copy of the branch it
was created from.

### Checkout

Checkout means to switch to another branch. It is quite important to be able to switch
between one branch and another as well as be able to create new branches. Both can
be done using the `git checkout` command.

You can switch to an already available branch using `git checkout OTHER_BRANCH` or
you can create a new branch and switch to it by adding `-b` so the command is
`git checkout this_is_a_new_branch -b`

### Commits

A commit is saving any changes to the project's history. Every time you commit code,
it adds a record in history showing what was done. Commits have a commit message
which is text that is provided by the author who is committing the code. This message
should be used to describe the changes in the next history save. Commits will save
changes on to the branch that is checked out.

To create a commit, you first need to stage files. You can do that by adding them:
`git add *` will add all modifications to staging. `git add filename.txt` will add
a specific file to staging.

If you want to remove a file from staging you can use `git rm *` or `git rm filename.txt`
to remove all files or a specific file from staging.

Once you've completed adding the portion you want to the next commit to history, you can
commit your changes by doing `git commit -m "My commit message"`. If you just want to commit
everything, you can skip the adding step by running `git commit -a -m "My commit message"`.

Your commit message should describe what the changes are. This is very important so that
when you're looking back at the history of the code, you can understand what was done and
how you got where you are. It's also useful for when coming back to a previous point in history
if you ever need that.

### Merge

Merging is how you combine 2 branches together. This allows you to add changes that
were complete on one branch into another - often the master or dev branch. You can
think of it as updating the main code history with work from a specific branch.

You will want to switch to the main branch you are merging into using `git checkout <branch_name>`
then you can merge the other branch using `git merge <other_branch_name>`.

### Remotes

A remote is a hosted location for the repository / project. You can have multiple
remotes for one project. You can have a remote on GitHub where you store the public
code for everyone to see. You can also have a remote on your private server that is
serving your code on a domain. 

When you set up a git hosting provider like GitHub or GitLab, that remote is often
called `origin`. This is supposed to act as the original copy of the code. The copy
that everyone should work on.

### Push

To update a remote, you push your local copy to it. You can do so using `git push <remote> <branch>`
and that will push your local copy to the entered branch at the entered remote.

### Pull

To update your local copy from a remote, you pull the code from it. You can do so using
`git pull <remote> <branch>` which will pull the remote code at the entered branch
from the entered remote.

### Fork (Advanced)

You may sometimes work on projects where you do not have access to edit the code. You
can still contribute to the project by forking it and using Pull / Merge Requests. A fork
is a copy of the code where you have full access. This means you can modify the code however
you please. Once you have modified the code you can then request the original project to
use your modifications through a Pull / Merge Request.

### Pull/Merge Request

A Pull / Merge Request is a request to merge a branch with another. This is a function of the
Git hosting provider you selected. Each will have different features on these but commonly,
you can comment on code as well as the pull/merge request to discuss the changes made. You
can also mention other users to notify them about your comment.

To create a request you select a base or target branch as well as a compared branch.
When the request is accepted, the base or target branch receives all the new code from the
compared branch. Just like a merge would work.

Pull/Merge Requests are used for:

* reviewing collaborators' code before adding it to master
* discussing code
* contributing to projects you do not have direct access to
* many others

To contribute to a project you do not have write access to, fork the project, add your code
and then create a pull/merge request to add it. You would commonly use the project's master
branch as the base/target branch and compare it to the branch of your fork where you have
committed your code.

#### Merge Conflicts

If you modify a line twice differently on two different branches that you are about to merge
you will get merge conflicts. A merge conflict means that your code won't automatically merge
when you run the command. It also means that git isn't sure which lines you want to keep and
which to discard. Often times with conflicts, you will actually want a part of each branch's
code. The way git handles conflicts is by merging everything else and then letting you know
that there were conflicts on specific files.

Files with merge conflicts will have clearly marked sections with the branch name and a separator
to show you the 2 different versions of code. You should then remove the section you don't want
and keep the section you want. If you needed a combination of both then you can copy the lines
you need. You should remove the separators - those are just there to let you know which branch
the lines of code are. Once you're done with editing the conflicts you can commit the changes.


### Feature Branch Workflow

A common workflow used with Git is the feature branch workflow. The idea here is to create
a new branch for every new feature that requires development. The new branch should only contain
code that is directly relevant to the feature. Once the feature is complete, merge the feature
branch into master.


## In-Depth Git

To go in-depth with Git, check out the following resources:

[Git How To](https://githowto.com/)

[Pro Git Book](https://git-scm.com/book)