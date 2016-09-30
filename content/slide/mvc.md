+++
date = "2016-06-01T22:16:53+02:00"
title = "MVC"
type = "slide"
author_twitter = "sbeleidy"
coffee_link = "https://cash.me/sbeleidy/5"
caption = "Structure your site to scale"

+++

## Outline

* MVC
* Model
* View
* Controller

Note:
In-depth guide available [here](/guide/mvc).



## MVC

MVC stands for Model View Controller.

A design pattern used to abstract software into three interconnected components.



## Model

The model is an abstraction of the database and business logic.

Easily accesses data from the database



## View

A view is what the user sees.

May use a templating language to:

* abstract layout into partials and include them
* control flow - conditionally display visual elements
* repeat with loops - display several of the same elements



## Controller

A controller connects the model and the view.

It can get data from the model and provide it to the view to display it to the user.

For web, a controller may be associated with a url path which it can take parameters
and valiables through.



## Summary

* MVC is a useful design pattern since it breaks the code up into smaller components
* MVC stands for Model View Controller
* The model describes the data and how it should be organized
* The view describes what the elements on the page will look like.
* The controller specifies which data to show on each view
