+++
date = "2016-06-01T22:16:53+02:00"
title = "MVC"
type = "guide"
author_twitter = "sbeleidy"
coffee_link = "https://cash.me/sbeleidy/5"
caption = "Structure your site to scale"

+++

Slides available [here](/slide/mvc).

# MVC

MVC, or Model View Controller, is an important concept in web and software development.
MVC abstracts parts of the system and is a good way of separating interactions.
We will begin by defining what each of the three does and means.

## Model

The model is an abstraction of the database table. Models let you access data
from the database easily. For example, you could write a function that searches
the database for a product’s seller in the Product model and then from any product
you can easily access all the seller’s information. You can also do more complex
calculations based on the models you are using.

## View

The view is what the user sees. For the web, it is written in HTML, CSS and
usually a templating language. Templating languages may differ based on the
framework you use.

Templating languages allow you to do some really cool things like

* abstracting the layout into a separate file
* control flow with if/else
* repeating with loops

### Abstracting layout

You can include other files/templates so you can separate your code into
different pieces. For example, you can write the code for the navigation just
once and then add each page’s content below that. When you update the navigation 
section, it would then update everywhere on the site.

### Control Flow

Control flow allows you to show information to the user based on certain
situations. For example, if the user is logged in, show one navigation and
if they’re logged out, show another one. This is functionality available on almost
all websites. At the very least, you would show a log in button for logged out users
and log out button for logged in users.

### Loops

Looping allows you to display the same thing over and over again for multiple items.
This means that you can design it once and apply it for several items at a time.
For example, if you were to display a product, you can code the way you want each
product to look and then simply loop through all products that are available.

## Controller

The controller's role is connecting the model and view. It performs calculations
that need to be done to specify which data to send to the view.

Often, the controller will function based on the url of the current page.
For web, each URL path, or route, that a user goes to (eg. “/user/minkrxyz) is assigned
a function in a controller. The route can also have variables inside of it.
When the `/user` route is setup it could be setup as `/user/{username}` which from
the previous url example "/user/minkrxyz" would return `minkrxyz` as the value for
username.

The controller can then do some calculations based on the provided variables. It can
send the user's data to a view (see Views above) and provide certain values that the view needs. 
For example, where we would loop over a list of products, these products would be provided by
the controller.

## In summary

* The model describes the data and how it should be organized
* The view describes what the elements on the page will look like.
* The controller specifies which data to show on each view

You can read more about MVC on [Wikipedia](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)