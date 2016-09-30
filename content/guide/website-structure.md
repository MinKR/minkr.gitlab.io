+++
date = "2016-06-01T22:16:53+02:00"
title = "Website Structure"
type = "guide"
author_twitter = "sbeleidy"
coffee_link = "https://cash.me/sbeleidy/5"
caption = "Understand and design sites structure with the user in mind"

+++

Slides available [here](/slide/website-structure).

# Website Structure

Understanding the structure of a website and common patterns used will help you
develop your website. The structure covered here is for responsive web design.
Responsive web design is that which accomodates various screen sizes. So you don't
have to send viewers of specific device sizes to a different site designed specifically
for that.

## Components

* Navigation bar
* Body
* Footer

{{< figure src="../../img/website-structure/high-level.png" title="High level display of a site" >}}


### Navigation Bar

The navigation bar is a list of important links to other pages on your site.
This shows users what should be important to them on your site. You shouldn't have
many links here. If you have several categories of links you can create those and
then each link displays a dropdown expansion of links related to that category.

{{< figure src="../../img/website-structure/Navigation.png" title="Navigation" >}}

Most sites will have their logo on the left side and links on the right. They will
also link their logo to the home page.

On mobile, the navigation bar should transform into a navigation drawer or dropdown.
This allows users on mobile to access all the functionality available in the navigation
without it consuming too much space on their small screens.

{{< figure src="../../img/website-structure/Mobile Nav.png" title="Mobile navigation" class="half" >}}
{{< figure src="../../img/website-structure/Mobile Drawer.png" title="Mobile drawer" class="half" >}}

### Body

The body is the main content section of the site. This is what changes from page to
page and is what the user is there for. Sites will often include a sidebar in the body
to make it easy to navigate the site. Check out the common variations for displaying
page body below:

{{< figure src="../../img/website-structure/Body 1 col centered.png" title="Center content" class="third" >}}
{{< figure src="../../img/website-structure/Body left sidebar.png" title="Left Sidebar" class="third" >}}
{{< figure src="../../img/website-structure/Body right sidebar.png" title="Right Sidebar" class="third" >}}

Sidebars include links or some form of functionality that allows users to navigate to similar
content or edit the content in some way. Eg. Sorting or filtering. If you can avoid
a sidebar, you should. This helps users focus on the content and avoid trying to
leave and go somewhere else.

For the responsive design, your content should take up the entire width of the screen
on mobile. The sidebar would go either above or below the content. If it's a functional
sidebar then place it at the top. If it's for navigation, place it at the bottom.


### Footer

The footer should contain any copyright information and other links to the rest of the site.

{{< figure src="../../img/website-structure/Footer.png" title="Footer" >}}

## UX Patterns

There are some common User Experience patterns used to give a "good enough" start
to your site. Different patterns are useful for different functions of a page.
These patterns represent the way a user's eyes will flow on your page.

* Z Pattern - Information followed by an action
* F Pattern - Displaying lists of information

### Z Patten

The Z pattern looks like the letter "Z" and ends with a call to action.
Use the Z pattern when there is a lot of space between the elements displayed
on the page. Do not place the core action on the way to the end. Users may skip
it to continue reading and then would have to go back. You should provide the
information they need before the action and then stop adding more information.
That way, you limit the choices for the user at the end.

{{< figure src="../../img/website-structure/z-pattern.png" title="Z Pattern" attr="Source" attrlink="http://vanseodesign.com/web-design/3-design-layouts/" >}}


### F Pattern

The F pattern looks like the letter "F" and displays a list of content. Use the
F pattern when there is little space between elements and there is a repeat flow.
You can place actions for specific items at the end. This leaves the user with
a decision to choose the item or select another one. This pattern can be
effective for lists of products.

{{< figure src="../../img/website-structure/f-pattern.png" title="F Pattern" attr="Source" attrlink="http://vanseodesign.com/web-design/3-design-layouts/" >}}

## Additional resources

For more information about website structure and UX check out:

[Good UI](https://www.goodui.org)

[UX Crash Course](http://thehipperelement.com/post/75476711614/ux-crash-course-31-fundamentals)