# min(KR)

Minimum Knowledge Required is a site that helps people learn
enough to get started.


## Contributing

If you'd like to contribute and help others get started
working on various projects please follow these instructions:

To contribute to this project you will first need to be
familiar with Git. If you aren't you can check out the [min(KR)
for Git](http://minkr.xyz/guide/git).

min(KR) is built with [Hugo](https://gohugo.io), a Static
Site Generator. You will need to install hugo following their
installation instructions [here](https://gohugo.io/overview/installing/). If you're on a mac, and
you have Homebrew you can run `brew update && brew install hugo`. If
you're on a Mac and you don't have Homebrew...[get Homebrew!](http://brew.sh/)

## Content

There are 3 main types of content on min(KR):

1. Collection - a page that links to related guide that allow our readers to accomplish a large task.
1. Guide - a detailed page covering a specific topic
1. Slide - a detailed set of slides covering a summary of the related guide

Content on min(KR) is writted in Markdown. If you're unfamiliar with
Markdown, you can check out the [min(KR) for Markdown](http://minkr.xyz/guide/markdown).

## Editing Content

To edit already available content you can find it in the content folder.
Content is split into folders by type. You can find a specific page from the url
you were reading it at. A page at `minkr.xyz/collection/test` will  have its
content at `content/collection/test.md`.

## Creating new content

You can create new content by running one of the following commands,
replacing `newOne` for the name you want to use:

* new collection - `hugo new collection/newOne.md`
* new guide - `hugo new guide/newOne.md`
* new slide - `hugo new slide/newOne.md`

## Running it locally

If you have npm installed you can run `npm run dev` to serve the site locally,
displaying all drafts. To only display content that would be live on the site,
you can run `npm start`.

If you do not have npm installed or do not wish to use it, you can run 
`hugo serve --watch --buildDrafts` to serve the site locally, displaying all
drafts. To only display content that would be live on the site, you can run
`hugo serve --watch`