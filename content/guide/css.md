+++
date = "2016-06-01T22:16:53+02:00"
title = "CSS"
type = "guide"
draft = true
author_twitter = "sbeleidy"
coffee_link = "https://cash.me/sbeleidy/5"
caption = "Design and style the web"

+++

Slides available [here](/slide/css).

# CSS

If HTML is the building block of the web, CSS is how you make the building blocks pretty.
CSS is what separates a beautiful site from an ugly one. It's important to have a visually appealing
site to get the viewer's attention and establish credibility. Your site should look and feel like
your brand. You should express every part of your brand identity through your site. This ensures
your customers get a consistent message no matter how they interact with you.

Well, this all sounds great but how do you actually make your site appealing? Well, first we must
learn how to interact with certain parts of the page using selectors. Then we will learn the available
styles that you can use to make the elements on the page more appealing.

## Setup

Before we get started, let's get your testing ground set up. You can continue to use the HTML
file you were using or create a new one with the following code:

```HTML
<!DOCTYPE html>
<html lang="en">
    <head>
        <title></title>
        <meta charset="UTF-8">
        <link href="css/style.css" rel="stylesheet">
    </head>
    <body>
    
    </body>
</html>
```

If you're using another HTML file you were already working on, what you need to make sure you have
is the following line in the `<head></head>`:

```html
<link href="css/style.css" rel="stylesheet">
```

You must then create a folder called `css` and a file inside of that called `style.css`. You could
also rename the path in the `href` attribute to whatever file you want and make sure that file exists.
That is where you'll be adding your CSS code to see it update the style of the HTML. In your web browser,
open the HTML file you created or are using. Now let's begin with understanding CSS.

## Selectors

"Selectors" is a complicated way of saying selecting which element to apply design styles to. If you recall
from the HTML post, we talked about `classes` and `id`s. We use those to refer to specific elements on the page.
To refer to an id we use the `#` sign. Eg. `#first-child`. To refer to a class we use the `.`. Eg. `.awesome-child`.

Placing selectors separated by a space means child elements of the first selector that have the second selector applied.
Eg. `.awesome-child .okay-child` will select all children of elements with the class "awesome-child" which have the class
"okay-child"

Not separating selectors at all will select elements where both selectors apply. Eg. `.awesome-child.okay-child` will
select all elements that have both the `awesome-child` class and the `okay-child` class.

You can also select elements by a specific tag. For that, you use the tag name without a prefix. Eg. `body`

You can combine selectors as you wish. Eg. `div.awesome-child p.okay-child` will select all paragraphs with the
class "okay-child" that are children of `div`s with a class of "awesome-child".

## Styles

Now that you know what selectors are, what's the point of selectors? Well, the idea is to apply a specific style to a selected
element or group of elements. The way we do that in CSS syntax is as follows:

``` css
selector {
    property: value;
    another-property: value;
}
```

We add the selector followed by `{}` with the style properties inside of it. Each style property is its name
followed by a colon, the property value and then a semi colon.

There are many available properties in CSS and we will cover a few key ones that can get you
building most of what you need. Whenever we cover a new property try it out with some HTML elements.
If you don't have any HTML code, feel free to review the HTML guide and start adding some elements.

### Size

Size is important to understand in CSS. There are several measurement units that you can use
to specify the size value of a property. You can think of it like meters and yards. They
are both units of measurement and they both measure the same thing - distance. Let's
cover the most commonly used size units of measurement:

1. px - pixels
1. em - 
1. rem - 
1. vh/vw - Viewport height and viewport width. Not used often

### Color

Colors are an important part of specifying styles. Just like size, colors have multiple ways
of expressing them. There are 4 types of values that you can use to specify a color:

* color name - Eg. `color: red;`
* color hex value - Eg. `color: #ff0000;`
* color rgb value - Eg. `color: rgb(255,0,0);`
* color rgba value - like RGB but the final number specifies the transparency where 1 is fully colored and 0 is fully transparent Eg. `color: rgba(255,0,0.4);`

You can find out a specific color's hex and rgb value by googling "hex value" + the color name.
The result I get searching for "hex value red" links me to [Color Hex - Red](http://www.color-hex.com/color/ff0000).

You can also use color picker tools like [Colorzilla](http://www.colorzilla.com/).

### Display

Display specifies the structure of a tag/element relative to others. The following
are the available values for the `display` property.

* `inline` - Elements afterwards will on the same line (default behavior of the `<span></span>` tag)
* `block` - Elements afterwards will be on the next line (default behavior of the `<div></div>` tag)
* `inline-block` - Elements afterwards will be on the same line
* `flex` - A special setup allowing you to more easily organize child tags/elements

#### Inline

#### Block

#### Inline-Block

#### Flex

For a more in-depth guide on `display: flex;` check out [A Complete Guide To Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

#### Grid

`display: grid;` is not fully complete yet and for now, you should only be aware that it exists. 
Later when it gains support, you will want to use it. The idea behind grid is to allow
you to create grid like structures with minimal effort. Most layouts are already structured in the
form of a grid, so `display: grid;` is relevant to the majority of sites on the web.

For an in-depth look at `display: grid;` check out [A Complete Guide To Grid](https://css-tricks.com/snippets/css/a-guide-to-grid/)

### Position

After setting the display of a tag/element, you may want to precisely position it.
To do so, you can use one of a few positioning types using the `position` property.
We will cover the possible values for `position` but regardless of its value, there
are 4 other properties that you will use to set the exact position. Those are:

* `top` - space from the top
* `right` - space from the right
* `bottom` - space from the bottom
* `left` - space from the left

All four properties take a value of the size units we covered earlier.

The most commonly used `position` values are:

* `relative` - space set by the spacing properties is from the tag/element's parent
* `absolute` - space set by the spacing properties is from the entire page
* `fixed` - space set by the spacing properties is from the view the user sees in the browser

A key difference to note between `absolute` and `fixed` is that:

* with `absolute`, you can scroll and the tag/element will move away
* with `fixed`, the element will stay in its position even as you scroll (Eg. fixed nav bars will always show even as you scroll so users can always access important links throughout the site)

### Typography

Typography can make or break your site. Choosing a good font is critical. Making
sure the fonts used are the right sizes in various areas on the site is crucial as well.

#### Font Overview

There are a few key types of fonts that you should know and understand when to use:

1. Sans-serif
1. Serif
1. Cursive
1. Monospace

#### Setting a font

To set a font, you can use the `font-family` property. Eg. `font-family: 'Roboto', sans-serif;`.
You should also make sure that you have imported the font you are using. You can do that in CSS
using the `@import` command. Eg:

```css
@import url(https://fonts.googleapis.com/css?family=Roboto);
```

You can check out some freely available web fonts at [Google Fonts](https://fonts.google.com/).
You can add several fonts to your collection to see them side by side with custom text that you
will use. Then once you know the font or fonts you want to use you can find the code needed to
add it to your project.

#### Font Size & Color

Another important property when working with fonts is `font-size` which allows you to specify the
font size of content in the selected element(s). The `color` property allows you to specify the
font color.

```css
.regular-size {
    font-size: 14px;
}
.bright-font {
    color: yellow;
}
```

### The Box

Every HTML tag/element is a box and each box has some defined attributes that describe its
structure and spacing inside of it and around it. Inside of each box is its content.
The structure and spacing begins at the content and there are 3 main properties you should
be familiar with:

1. Padding - the space between the content and the edge of the box
1. Border - the edge of the box
1. Margin - the space between the box and the next box

#### Padding & Margin

The following properties are available for padding:

* `padding-top`, `margin-top`
* `padding-right`, `margin-right`
* `padding-bottom`, `margin-bottom`
* `padding-left`, `margin-left`
* `padding`, `margin`

You can use the side specific padding/margin properties or use the `padding`/`margin` property to set all of them.

You can enter 1, 2, or 4 values for `padding`/`margin`:

* 1 value - all sides will get that size
* 2 values - will reflect on the sides with the first value for top and bottom and the second value for right and left. So that is: vertical horizontal
* 4 values - will reflect on the sides in clockwise order starting at the top. So that is: top right bottom left

#### Border

For border, the property value can be 3 parts:

* size - the size in the unit of measure you prefer
* type - solid, dashed
* color - the color of the border, see colors above on how to specify them

So as an example:

```css
.bordered-class {
    border: 1px solid red;
}
```

#### Height & Width

There are two main properties for size; `height` and `width`. There are also 2 other variations
of these that are useful: `min-height` and `max-height` as well as `min-width` and `max-width`.
These allow you to set minimum and maximum values instead of an exact fixed value.

You can use any size unit of measure from those covered before.

#### Background

##### Background images

##### Gradients

#### Shadow