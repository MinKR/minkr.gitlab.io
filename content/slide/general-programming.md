+++
date = "2016-06-01T22:16:53+02:00"
title = "General Programming"
type = "slide"
author_twitter = "sbeleidy"
coffee_link = "https://cash.me/sbeleidy/5"
caption = "Learn the basics of programming"

+++

## Outline

* Data Types
* Variables
* Mathematical Operations
* Logical Operations
* Control Flow
* Functions
* Loops
* Errors
* Tests

Note:
In-depth guide available [here](/guide/general-programming).



## Data Types

* `String` - Text - `"This is a string"`
* `Integer` - An integer number - `3`
* `Float` - A float or double - `2.5`
* `Boolean` - True or False
* `Array` - A list or group of data - `[1,2,3,4]`



## Variables

A variable is a way to access or record data so it can be used later.

Eg. You can have a variable `x` set to 5 or a variable `message` set to `"Hello min(KR) readers"`.



## Mathematical Operations

You can add, subtract, multiply, divide and apply other mathematical operations.

You can apply a mathematical operation to a variable itself. Eg. `sum = sum+5`



## Logical Operations

A logical operation is a check of whether something is true or not. Returns a boolean.

Examples:

* equal to
* not equal to
* greater than
* greater than or equal to
* less than
* less than or equal to



## Combining Logical Operations

You can combine logical operations using `not`, `and` or `or`.

| A | B | Not A | A and B | A or B |
|:-----:|:-----:|:-----:|:-----:|:-----:|
| True  | True  | False | True  | True  |
| True  | False | False | False | True  |
| False | True  | True  | False | True  |
| False | False | True  | False | False |



## Control Flow

You can control the flow the computer takes to go through your code
by using `if` and `else` statements.

`If` will perform operations if the expression is true and `else` will perform
them if the `if`'s expression was false.



## Functions

A function is a set of operations that are re-used often.

* It can take inputs (known as parameters)
* It can return a value



## User - Defined Functions

If you find yourself repeating a set of operations you might want to
create your own function. An example of a function would be one that accepts
the name of a user and returns a greeting "Hello" followed by the entered name.



## Loops

Loops allow you to repeat a set of operations based on a condition.

`For` loops often work on an Array variable by going through each element
and using it to perform a set of operations.

`While` loops will take a logical expression and repeatedly perform a set
of operations until the logical expression is false.



## Errors

Sometimes you'll try to run code that will result in an error.

<small>Eg. Dividing by 0</small>

You can prevent errors using control flow.

<small>Eg. If divisor is 0, don't divide</small>

You can handle errors using try/catch blocks.

<small>Eg. If there's an undefined error, send a message saying shouldn't divide by 0.</small>

Use control flow whenever possible, otherwise use error handling with try/catch.



## Tests

Unit testing: testing one unit / function independently.

Integration testing: testing multiple units working together.

Testing is providing inputs to 1 or many functions with known expected outputs.
If you get the expected output then the test succeeded, otherwise the test fails
and you need to review your code to make sure it works appropriately.

Eg. Dividing function: If I input 12 and 3, I should get 9