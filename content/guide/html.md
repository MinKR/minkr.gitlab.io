+++
date = "2016-06-01T22:16:53+02:00"
title = "HTML"
type = "guide"
author_twitter = "sbeleidy"
coffee_link = "https://cash.me/sbeleidy/5"
caption = "Building blocks for the web"

+++

Slides available [here](/slide/html).

# HTML

HTML is the language used to define the building blocks for the web.
If you've ever seen code refered to with an icon that looks something like this:
`</>` that's partly due to HTML or the origins of HTML.
Everything you see on the web is made up of HTML. That's why it's the perfect starting point
to dive in to web development.

To work on an html file, open your text editor (see [Development Tools](/post/development-tools))
and save a file as "first.html". Now edit the file and type a message then save. Eg. "Hello World".
And there, you've just started developing for the web. Don't believe me? Go to where you
saved that file and double click it. `.html` files should by default open in your browser but
if for whatever reason that didn't happen, right click the file and select open with then select
a web browser Eg. Google Chrome. You should see your message!!

Okay, this isn't anything crazy, it's just a text file but now you can see it in your browser!
To get started with real HTML, we need to first talk about tags.


## Tags

An HTML file is made up of many tags. Each tag is described as follows:

```html
<tag>content</tag>
```

The first `<tag>` is the opening tag and the one that has a `/`, `</tag>`, is the closing
tag. Anything you type in between the opening and closing tags is the content for that
tag. This content can include other tags! That means you can put tags inside other tags.

### Hierarchy

The way you organize tags is very important to how they will appear on the page. We
can place tags inside of tags, these are then called nested tags. They are also
refered to using a parent/sibling relationship. Here's an example:

```html
<parent-tag>
    <child-tag>
        <grandchild-tag></grandchild-tag>
    </child-tag>
    <child-tag></child-tag>
</parent-tag>
```

Every tag can only have one parent but it can have many siblings and children. In
the above code we see the `<parent-tag>` with 2 `<child-tag>`'s and the first
`<child-tag>` actually has a child which is called `<grandchild-tag>`. The two
`<child-tag>`'s are siblings.

### Attributes

```html
<tag attribute="value"></tag>
```

The two most important attributes that can apply to every tag are `id` and `class`.
They are both more specifically used later on when we cover [CSS](/post/css) and [JS](/post/js).

#### ID

The `id` attribute is like giving a name to a tag. You can use this id to reference
the specific tag. A tag should have a maximum of one `id` and an `id` should apply to
a maximum of one tag.

```html
<parent-tag>
    <child-tag id="first-child"></child-tag>
    <child-tag id="second-child"></child-tag>
</parent-tag>
```

We can use the id to reference the specific child.

#### Class

The `class` attribute is also giving a name to a tag but it's more like a family name.
A `class` allows you to describe several tags that are similar in some way.

```html
<parent-tag>
    <child-tag class="awesome-child"></child-tag>
    <child-tag class="awesome-child"></child-tag>
    <child-tag class="okay-child"></child-tag>
</parent-tag>
```

## Specific Tags

So far we've been using made up names for tags. HTML comes with pre-defined tags
that browsers can understand. Each tag will have some characteristics that make it
different. Let's go back to your file to get started working on things. In your
text editor you may already have a predefined snippet for html5. What that means
is that if you type `html5` then press the tab key, it will expand into the code
you need for html5. On my setup of VS Code, if I use that snippet, I get:

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

If you don't get anything, you can just copy this code into your file now. There
are a lot of tags there that we can will cover but for now you don't need to know
about most of them. Let's focus on the `<body>` tag. If you don't spot it right
away, it might help to know that it's a child of the `<html>` tag and a sibling
of the `<head>` tag.

### `<body></body>`

The body is the main contents of the page. If you type things here they will
show up on the page. Try it out. Type a message inside the body and refresh
your browser page where you had loaded your file.

You should see your message! Now let's actually make your message stand out.

#### `<h1></h1>`

A core part of writing is being able to use headings to organize content and
add emphasis to what's important. We can do that in HTML using the `<h1></h1>`
tag.

In the body tag, add a heading with your message. You can do that by typing:

```html
<h1>Your message</h1>
```

Now refresh and check out your message on the page! You should see a larger
font for your message. This is how you create headings.

You may have noticed that there's a number in the tag `<h1></h1>`. That's because
there are actually several other headings. You can use headings from 1 to 6. Try
it out! You can add a message for each heading or you can copy the following code
into the body tag.

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

You should see all 6 headings one right after the other and you'll see the text
size go from large to smaller and smaller.

#### `<p></p>`

Now that we have some headings, let's add paragraphs with the real content. You
may have noticed that if you type a long message in HTML the text won't skip a line
even if you skipped many many lines. To organize text, you can add a paragraph
by using the `<p></p>` tag. Try it out and refresh the file.
You can use the following code, added to the contents of your `<body>` tag:

```html
<h2>First Paragraph Heading</h2>
<p>This is my first paragraph with a lot of text.</p>

<h2>Second Paragraph Heading</h2>
<p>This is my second paragraph with a lot of text.</p>
```

You can add a lot of text in each paragraph to see that each one will continue
without ever skipping a line. If you ever need to generate a lot of text to
place it in your design just to see what it would look like you can use [lipsum](http://www.lipsum.com/)
or a more hipster version [here](http://hipsum.co/). You can also just copy
text from any article.

#### `<a></a>`

Now that we have text, let's add links!! Links are what make the
web so powerful. With a click, you can navigate to another page or site completely.

To add a link, we can use the `<a></a>` tag. This is the first time where we will
use attributes. We have to use attributes to specify where the link will
go. There's another attribute that's important for links as well. When you click
a link, the normal thing that happens is that you go to the linked page. Sometimes
however, you want to link to an external site for the user to check out later. Or
you simply don't want them to leave your site. We'll use another attribute for that.

For the link that we'll go to when we click we'll use the `href` attribute. And to
open in a new tab we'll use the `target` attribute. To open in a new tab, we set
`target="_blank"` Now let's add a paragraph with some links! You can try it out
yourself or use the following code:

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

Now that we know how to write paragraphs and add links to them, let's see how to
make lists. There are 3 tags that are relevant to lists:

* `<ul></ul>` is an unordered list or bullet point list
* `<ol></ol>` is an ordered list or numbered list
* `<li></li>` is a list item and is used with both unordered and ordered lists

Let's make 2 lists! All we have to do is create one of the two lists and add list
items inside of it. You can try that out yourself or copy the code below:

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

You now have two types of lists! We can also nest lists inside of other lists. 
We can do that in the list item as shown in the code below:

```html
<ul>
    <li>
        An ordered list: 
        <ol>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
        </ol>
    </li>
    <li>
        An unordered list:
        <ul>
            <li>An item</li>
            <li>Another item</li>
            <li>And another</li>
        </ul>
    </li>
    <li>And another item</li>
</ul>
<ol>
    <li>
        An unordered list:
        <ul>
            <li>An item</li>
            <li>Another item</li>
            <li>And another</li>
        </ul></li>
    <li>
        An ordered list: 
        <ol>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
        </ol>
    </li>
    <li>Three</li>
</ol>
```

You can keep nesting lists as much as you want.

#### `<table></table>`

Instead of using lists, you may want full on tables. You can do that in HTML using
the `<table></table>` tag. The `<table></table>` tag has the following related tags:

* `<thead></thead>` is a table header section
* `<tbody></tbody>` is a table body section
* `<tfoot></tfoot>` is a table footer section
* `<tr></tr>` is a table row
* `<th></th>` is a table header cell
* `<td></td>` is a table data cell

You first use the `<table></table>` tag to start the table, then use the `<thead></thead>`,
`<tbody></tbody>` and `<tfoot></tfoot>` tags to separate your table into sections. In
each section you can add rows using the `<tr></tr>` tag. Then in each row, you can add
either `<th></th>` or `<td></td>` tags depending on the cell you want. Let's try an example:

```html
<table>
    <thead>
        <tr>
            <th>First Header</th>
            <th>Second Header</th>
            <th>Third Header</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>First row, First Cell</th>
            <th>First row, Second Cell</th>
            <th>First row, Third Cell</th>
        </tr>
        <tr>
            <td>Second row, First Cell</td>
            <td>Second row, Second Cell</td>
            <td>Second row, Third Cell</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>First Footer Cell</td>
            <td>Second Footer Cell</td>
            <td>Third Footer Cell</td>
        </tr>
    </tfoot>
</table>
```

The`<thead></thead>`, `<tbody></tbody>` and `<tfoot></tfoot>` tags are optional and you can use them
later to customize the styling of each section of the table. There are also two
key attributes that may be useful for the following tags:

* `<tr></tr>`'s "rowspan" attribute which determines how many rows' height the specific row should take
* `<td></td>` and `<th></th>`'s "colspan" attribute which determines how many columns' width the specific cell should take

Here's an example showing these attributes in action:

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

Now let's cover one of the most important tags in HTML, the "div". `<div></div>`'s
allow you to separate your content into chunks. Use `<div></div>`'s to separate 
different logical parts of your page. Try it out with the following code:

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

By default, a `<div></div>` will go to the next line. If you test out the above code, you'll see three sections each with a heading and
a paragraph. That's all you need to know about `<div></div>`'s. If HTML is the building
block of the web, `<div></div>`'s are the building blocks of HTML.

#### `<span></span>`

Another important tag in HTML is the `<span></span>`. A `<span></span>` is
similar to a `<div></div>` in that they are both used to organize content on a page.
The major difference is that a `<span></span>` does not go to the next line by
default. `<span></span>`'s are useful for customizing parts of text that are in the
same section. Let's see what a span will look like:

```html
<div>
    <h2>This is a <span>heading<span></h2>
    <p>This is a <span>paragraph<span> related to the above heading. It's a paragraph with a lot
    of text just to show that we can have a lot of text in the paragraph. Woah!</p>
</div>
```

Could you spot the `<span></span>`'s ? Since we're not customizing the code with [CSS](/post/css)
yet, `<span></span>`'s will appear like any other text in the tag they're in. You'll
later see how powerful `<span></span>`'s can be when you learn about [CSS](/post/css).

#### `<img>`

The `<img>` tag looks a little different from all the others. It doesn't have a closing
tag. The `<img>` tag is a "self-closing" tag. That means it doesn't need to end with
`</img>`. This may seem weird at first but will start to make sense when you look at
what most self-closing tags do.

The `<img>` tag, adds an image to your page. The `<img>` tag needs to know the path
to the image file that you want to display. You can specify the path to the image
using the `src` attribute. Another important attribute for the `<img>` tag is the
`alt` attribute. `alt` specifies the text to show when you hover over an image.

If you ever want some placeholder images in your HTML as you build your site, you
can use [lorempixel](https://lorempixel.com). Let's try adding an image now:

```html
<img src="https://lorempixel.com/200/200/sports" alt="A random sports image from lorempixel">
```

#### `<br>`

The `<br>` tag is another self-closing tag. The `<br>` tag is a line break. That
means that it skips a line. Let's try it out:

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

The `<hr>` tag is another self-closing tag. The `<hr>` tag is a horizontal rule.
That means that it adds a horizontal line across its parent.
By default, the `<hr>` tag will skip a line to display. Let's try it out:

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

An important part of the web is being able to take input from the user. The first
part of doing that is setting up a form. For that, we can use the `<form></form>`
tag. The `<form></form>` tag has some attributes that may seem a little confusing now,
but you will cover them later when you go over other aspects of Full Stack Web.

The two key attributes for a `<form></form>` are "method" and "action". The
"method" is the type of request that is made once the user submits the form. The
"action" is often the url or function that the request is directed at once the
form is submitted. Again, these may sound complicated now but we will cover them
again later on when we start interacting with a backend. For now, let's discuss
how to actually make the form so we can take input from a user.

##### `<label></label>`

It begins with a label. You can use a `<label></label>` tag to label the input
fields you will be requesting from the user. You can do this in two ways:

1. Placing the `<input>` tag inside of the `<label></label>`'s content
1. Using the `for` attribute and setting its value to the `id` of the input

We'll cover both examples in the `<input>` tag's section.

##### `<input>`

`<input>`'s are the core part of a `<form></form>`. There are many types of
`<input>`s that you've probably interacted with before. You can set an `<input>`'s
type using the `type` attribute. In addition to the type, you should use the
`name` attribute to give a name to each input. The `name` attribute is useful
when you submit the form. You can also use the `placeholder` and `value` attributes.
The `value` of an `<input>` field is the initial value that the user will see. Finally,
the `placeholder` will show text but once the user begins to type, it disappears.

Here are the attributes we discussed so far for `<input>`'s:

* `type` - the input type
* `name` - the variable name that can access the value
* `value` - the actual value that is set for the input field
* `placeholder` - fake text that will be visible to the user as a suggestion

Let's start with the most basic `<input>`, a text input. Here's an example:

```html
<form>
    <label>First Name <input type="text" name="first" placeholder="John"></label>
    <label for="last-name" placeholder="Smith">Last Name</label>
    <input id="last-name" type="text" name="last">
</form>
```

Let's cover the other types of `<input>`s though. These are some of the available
types that you'll probably work with:

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

The different input types may show different software keyboard on mobile devices.
For example, the `<input type="number">` will show a number keyboard so the user
can easily enter numbers.

Here's some example code for how to use each of those input types:

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

You can read more about all available types [here](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input).

##### `<textarea></textarea>`

A `<textarea></textarea>` is like a text input but with multiple lines. You can
specify the height and width of a `<textarea></textarea>` using the `rows` and
`cols` attributes. Here's an example:

```html
<textarea rows="5" cols="50"></textarea>
```

##### `<button></button>`

Another important tag that is used is the `<button></button>` tag. You may want to
add a button on your page and for that you may want to use the `<button></button>`
tag. You can enter the text for the button in the content of the tag.

A `<button></button>` can also have its `type` attribute to "submit" to submit
a form.

Here's a basic example:

```html
<button>Click this button</button>
```

### `<head></head>`

Now that we're done with the main tags that you'll be using in the `<body></body>`,
let's go back and revisit the `<head></head>` that was at the top of the file.
The `<head></head>` tag contains all the information that describes the page and
any links to other files that the page needs. Let's start by looking at the
comomonly used tags inside of `<head></head>`.

#### `<title></title>`

The `<title></title>` tag defines the window or tab's name as shown by the browser.
Right now, since I don't have content in my `<title></title>` and I named the file:
"file.html" I see the name of the window/tab as "file.html". Let's change the
`<title></title>` to something else and see what happens. In the `<head></head>` of
your file spot the `<title></title>` tag and change it to:

```html
<title>Learning HTML with min(KR)</title>
```

If you don't see a `<title></title>` tag in the `<head></head>` then add it.
You should now see the name of the tab/window as "Learning HTML with min(KR). If
you look at the title of this page you're reading now - it should say "min(KR) - HTML".
Use `<title></title>`'s for your pages that make sense and describe to your users what
they're looking at. With most news sites, you'll see them incorporate the article
name into the `<title></title>`.

#### `<meta>`

The `<meta>` tag is a self-closing tag that defines metadata related to your page.
Metadata is any information related to your page that you don't necessarily 
display on the page but you want to be associated with.

Each `<meta>` tag has 2 attributes, `name` and `content`. This basically tells
others looking at the page what a value for a data type is. That sounds complicated so
let's try to explain that through examples. Here are a few:

```html
<meta name="og:author" content="sbeleidy">
<meta name="og:title" content="Learning HTML">
```

There are several agreed-upon values for the `name` attribute that search engines
and other sites look for and understand. For a list of these, check out
[The Open Graph protocol](http://ogp.me/).

#### `<link>`

The `<link>` is a self-closing tag that grabs content from another file and
relates it to this page in some way. It uses two main attributes, `rel` and `href`.

The `rel` attribute describes the relationship with the linked file. There are
several possible relationships that you can use with the most commonly used one
being "stylesheet". This tells the page to use styles available in another file and
will be how we use [CSS](/post/css) on the page.

The `href` attribute defines the path to the related file.

Here's an example of linking to different stylesheets:

```html
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet">
<link href="css/style.css" rel="stylesheet">
```

#### `<script></script>`

The `<script></script>` tag can run scripts that can transform a page from a
simple static page to a dynamic one. You can use the `<script></script>` tag
in two main ways. 

You can use the `<script></script>` tag to link to an external file that
has your script. You can do that by specifying the path to the file using the
`src` attribute. Here's an example:

```html
<script src="js/script.js"></script>
```

You can also add your script code in the content of the script. Here's an example:

```html
<script>
// You can add your Javascript code here.
</script>
```

If you're interested in covering interactivity in your page, you can learn more
about how to [work with JS here](/post/js).