+++
date = "2016-06-01T22:16:53+02:00"
title = "HTML"
type = "slide"
author_twitter = "sbeleidy"
coffee_link = "https://cash.me/sbeleidy/5"
caption = "Building blocks for the web"

+++

## Outline

* HTML
* Tags
    * Hierarchy
    * Attributes
        * id & class
* Specific Tags

Note:
In-depth guide available [here](/guide/html).



## HTML

HTML is the language used to define the building blocks for the web.

If you've ever seen code refered to with an icon that looks something like this:
`</>` that's partly due to HTML or the origins of HTML.

Create and save a file named `first.html` with the contents: "Hello". Then double
click the file to open it in your browser. That's your first HTML File!



## Tags

```html
<tag>content</tag>
```

The first `<tag>` is the opening tag and the one that has a `/`, `</tag>`, is the closing
tag. 

Between the two, is the tag's content



## Hierarchy

Tags can be nested inside each other as seen below:

```html
<parent-tag>
    <child-tag>
        <grandchild-tag></grandchild-tag>
    </child-tag>
    <child-tag></child-tag>
</parent-tag>
```

The two `<child-tag>`'s are siblings.



### Attributes

A tag can have attributes defined for it as follows:

```html
<tag attribute="value"></tag>
```

Two important attributes are `id` and `class`



#### id

The `id` attribute is like giving a name to a tag.

You can use this id to reference the specific tag.

```html
<parent-tag>
    <child-tag id="first-child"></child-tag>
    <child-tag id="second-child"></child-tag>
</parent-tag>
```



#### class

The `class` attribute is also giving a name to a tag but it's more like a family name

A `class` allows you to describe several tags that are similar in some way

```html
<parent-tag>
    <child-tag class="awesome-child"></child-tag>
    <child-tag class="awesome-child"></child-tag>
    <child-tag class="okay-child"></child-tag>
</parent-tag>
```



## Specific Tags

HTML comes with pre-defined tags that browsers can understand.

Starter code for HTML that we'll cover:

```html
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



### `<body></body>`

The body is the main contents of the page.

If you type things here they will show up on the page. Try it out!



#### `<h1></h1>`

Headings with different sizes from 1 to 6

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```



#### `<p></p>`

To organize text, you can add a paragraph by using the `<p></p>` tag.

```html
<h2>First Paragraph Heading</h2>
<p>This is my first paragraph with a lot of text.</p>

<h2>Second Paragraph Heading</h2>
<p>This is my second paragraph with a lot of text.</p>
```



#### `<a></a>`

Links are what make the web so powerful.

To add a link, use the `<a></a>` tag.

* `href` - the link to go to 
* `target` - equal to "_blank" to open in a new tab

```html
<p>
    This is a paragraph that will show different variations of links. First, let's add a link to 
    <a href="https://google.com" target="_blank">
        Google
    </a> 
    that will open in another tab. Next we can add a link to 
    <a href="http://minkr.xyz">
        min(KR)
    </a> 
    that will take you there right away. We used "href" to specify the link.
    We then used "target" set to "_blank" to open the link in a new tab.
</p>
```



#### `<ul></ul>, <ol></ol> & <li></li>`

* `<ul></ul>` is an unordered list or bullet point list
* `<ol></ol>` is an ordered list or numbered list
* `<li></li>` is a list item and is used with both unordered and ordered lists

You can also nest them inside of each other.

```html
<ul>
    <li>An item</li>
    <li>Another item</li>
    <li>And another</li>
</ul>
<ol>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
</ol>
```



#### `<table></table>`

* `<thead></thead>` is a table header section
* `<tbody></tbody>` is a table body section
* `<tfoot></tfoot>` is a table footer section
* `<tr></tr>` is a table row
* `<th></th>` is a table header cell
* `<td></td>` is a table data cell

* `<tr></tr>`'s "rowspan" determines how many rows of height for the specific row
* `<td></td>` and `<th></th>`'s "colspan" determines how many columns' width the specific cell



#### `<table></table>`

```html
<table>
    <tr>
        <th>Name</th>
        <th colspan="2">Some Data Type</th>
        <th>Something else</th>
    </tr>
    <tr>
        <th></th>
        <th>Value</th>
        <th>Percent</th>
        <th></th>
    </tr>
    <tr rowspan="2">
        <td>Boaty McBoatFace</td>
        <td>1473</td>
        <td>12%</td>
        <td>Meh</td>
    </tr>
    <tr>
        <td>Anon</td>
        <td colspan="2">N/A</td>
        <td>Meh</td>
    </tr>
</table>
```



#### `<div></div>`

Allow you to separate and organize your content into blocks

By default, a `<div></div>` will go to the next line

```html
<div>
    <h2>This is a heading</h2>
    <p>This is a paragraph related to the above heading. It's a paragraph with a lot
    of text just to show that we can have a lot of text in the paragraph. Woah!</p>
</div>
<div>
    <h2>This is another heading</h2>
    <p>This is another paragraph related to the above heading. It's a paragraph with a lot
    of text just to show that we can have a lot of text in the paragraph. Woah!</p>
</div>
<div>
    <h2>This is another heading</h2>
    <p>This is another paragraph related to the above heading. It's a paragraph with a lot
    of text just to show that we can have a lot of text in the paragraph. Woah!</p>
</div>
```



#### `<span></span>`

Also used to separate and organize content

Does not go to the next line by default

```html
<div>
    <h2>This is a <span>heading<span></h2>
    <p>This is a <span>paragraph<span> related to the above heading. It's a paragraph with a lot
    of text just to show that we can have a lot of text in the paragraph. Woah!</p>
</div>
```



#### `<img>`

Adds an image to the page

* `src` - path/url to iamge file
* `alt` - text to display when hovering over the image

```html
<img src="https://lorempixel.com/200/200/sports" alt="A random sports image from lorempixel">
```



#### `<br>`

A line break

```html
<div>
    <p>
        This is a paragraph that has a lot of text. I can skip lines by adding 
        a line break.
        <br>
        That was a line break, and here's another <br>
        What happens when I add 3 line breaks:
        <br><br><br>
        Okay...
    </p>
    <p>
        This is another paragraph with no line breaks. That's all.
    </p>
</div>
```



#### `<hr>`

A horizontal rule - will skip a line to display

```html
<div>
    <p>
        This is a paragraph. Let's add a horizontal rule inside it:
        <hr>
    </p>
    <p>
        This is another paragraph, we'll add a horizontal rule after it's done.
    </p>
    <hr>
</div>
```



#### `<form></form>`

Take input from the user using a form

* `method` - the type of request that is made once the user submits the form
* `action` - the url or function that the request is directed at once the form is submitted

Add other tags inside of it to specify what to ask the user


#### `<label></label>`

Labels the input fields you will be requesting from the user



#### `<input>`

The core part of a `<form></form>`

* `type` - the input type
* `name` - the variable name that can access the value
* `value` - the actual value that is set for the input field
* `placeholder` - fake text that will be visible to the user as a suggestion

```html
<form>
    <label>First Name <input type="text" name="first" placeholder="John"></label>
    <label for="last-name" placeholder="Smith">Last Name</label>
    <input id="last-name" type="text" name="last">
</form>
```



#### `<input>` types

* text - just a basic text field
* email - an email input field
* password - a password field that will make inputs show up as ****
* tel - a telephone number field. This will force the value to be a phone number
* number - a number field. This will force values to be a number
* checkbox - a checkbox field
* radio = a radio button field
* file - a file upload button
* hidden - a hidden input where you can set values sent with the form but not visible to the user
* submit - a button that submits the form



#### `<input>`

```html
<form>
    <div>
        <label>Username <input type="text" name="first" placeholder="boatyMcboatFace"></label>
    </div>
    <div>
        <label>Email address <input type="email" name="email" placeholder="email@example.com"></label>
    </div>
    <div>
        <label>Password <input type="password" name="password"></label>
    </div>
    <div>
        <label>PIN <input type="number" name="pin"></label>
    </div>
    <div>
        <label>Phone number <input type="tel" name="phone"></label>
    </div>
    <div>
        <label>Check me<input type="checkbox" name="check"></label>
        <label>Check me too<input type="checkbox" name="checkTwo"></label>
        <label>I'm already checked!<input type="checkbox" name="checkTwo" checked></label>
    </div>
    <div>
        These are all the same radio because we're using the same name
        <label>Pick me<input type="radio" name="myradio" checked value="pickme"></label>
        <label>Or me<input type="radio" name="myradio" value="orme"></label>
        <label>Or me too - but you have to pick one!<input type="radio" name="myradio" value="ormetoo"></label>
    </div>
    <div>
        This is another radio button because we're using a different name
        <label>Pick me<input type="radio" name="anotherRadio" checked value="pickme"></label>
        <label>Or me<input type="radio" name="anotherRadio" value="orme"></label>
    </div>
    <div>
        <label>Upload File<input type="file" name="myFile"></label>
    </div>
    <div>
        <label>A hidden input<input type="hidden" name="myHiddenInput" value="shhhh!!! the user can't see this"></label>
    </div>
    <div>
        <label>And you're done!<input type="submit" value="Submit!"></label>
    </div>
</form>
```



#### `<textarea></textarea>`

Text input with multiple lines

* `rows` - number of rows
* `cols` - number of columns

```html
<textarea rows="5" cols="50"></textarea>
```



#### `<button></button>`

Adds a clickable button

The text of the button should be placed in the content of the tag

```html
<button>Click this button</button>
```



### `<head></head>`

Contains all the information that describes the page and any links to other files that the page needs



#### `<title></title>`

The window or tab's name as shown by the browser

```html
<title>Learning HTML with min(KR)</title>
```



#### `<meta>`

Defines metadata related to your page

* `name` - a commonly used data type name to specify [learn more](http://ogp.me/).
* `content` - the value of the named data type

```html
<meta name="og:author" content="sbeleidy">
<meta name="og:title" content="Learning HTML">
```



#### `<link>`

Grabs content from another file and relates it to this page in some way

* `rel` - describes the relationship with the linked file
* `href` - the path/url to the related file

```html
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
<link href="css/style.css" rel="stylesheet">
```



#### `<script></script>`

Inserts scripts to make the page interactive/dynamic

Uses `src` to link to an external file:

```html
<script src="js/script.js"></script>
```

Or can have the script code in the content of the tag

```html
<script>
// You can add your Javascript code here.
</script>
```