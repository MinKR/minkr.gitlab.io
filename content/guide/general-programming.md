+++
date = "2016-06-01T22:16:53+02:00"
title = "General Programming"
type = "guide"
author_twitter = "sbeleidy"
coffee_link = "https://cash.me/sbeleidy/5"
caption = "Learn the basics of programming"

+++

Slides available [here](/slide/general-programming).

# General Programming

This section will cover general programming concepts that are often used,
regardless of what you're creating or what language you're using.

## Data Types

The most commonly used data types in programming are:

1. `String` - A string of characters or text. Often represented using `""` Ex. `"This is a string"`
1. `Integer` - An integer number. An integer is a full number that has no decimal portion. Ex. `3`
1. `Float` - A float or double. A number that has a decimal portion. Ex. `2.5`
1. `Boolean` - True or False. 0 means false while 1 means true.
1. `Array` - A list or group of data. Multiple elements of other data types. You can also have an array of arrays. Often represented using `[]` Ex. `[1,2,3,4]`

## Variables

A variable is a way to access or record data so it can be used later. For example
You can have a variable `x` set to 5 or a variable `message` set to `"Hello min(KR) readers"`.
This means that you can access their values later by referring to the variable directly.
When we cover different languages we will look at how each language defines variables.
For now, you only need to understand the concept of a variable.

## Mathematical Operations

You can create new values by combining or interacting with multiple variables. You
can add, subtract, multiply, divide and apply other mathematical operations. This
is specifically useful when you want to calculate certain values. Ex. `5 + 2` would
give you a value of `7`.

Mathematical operations usually only apply to Integers or Float values but some languages have
different ways of handling how Strings and other data types can interact mathematically.
In some languages, adding 2 strings together creates a combined string. Ex.
`"Hello " + "min(KR) Readers!"` would equal `"Hello min(KR) Readers!"`

Another cool thing is that you can apply a mathematical operation to a variable itself.
For example, let's say you have a variable `sum` that you want to increase by 5.
You can do so by saying `sum = sum + 5`. This sets the new value of sum to its previous
value plus 5.

## Logical Operations

A logical operation is a check of whether something is true or not.
Logical operations always return a Boolean value. Examples of logical operators are:

* equal to
* not equal to
* greater than
* greater than or equal to
* less than
* less than or equal to

You can also combine logical operations together using:

* not - returns the opposite of the provided value
* and - returns true if both provided values are true. Returns False otherwise
* or - returns true if one or both provided values are true. Returns false otherwise

Here is a table that can help you understand how logical operations work:

| A | B | Not A | A and B | A or B |
|:-----:|:-----:|:-----:|:-----:|:-----:|
| True  | True  | False | True  | True  |
| True  | False | False | False | True  |
| False | True  | True  | False | True  |
| False | False | True  | False | False |

The first row of the table can be read as follows:

If `A` is True and `B` is True then `Not A` is False, `A and B` is True and `A or B` is True.

And if you prefer numbers:

| A | B | Not A | A and B | A or B |
|:-----:|:-----:|:-----:|:-----:|:-----:|
| 1  | 1  | 0 | 1  | 1  |
| 1  | 0 | 0 | 0 | 1  |
| 0 | 1  | 1  | 0 | 1  |
| 0 | 0 | 1  | 0 | 0 |


## Control Flow

Control flow is a very complicated way of saying something very simple. It is a
way of controlling the flow the computer takes while going through your code.
You can control this flow by using `if` and `else` statements.

If statements take a logical expression (that you can create using logical
operations) and a set of operations to perform based on the value of the expression.
`If` will perform the operations if the expression is true and `else` will perform
them if the `if`'s logical expression was false.


## Functions

A function is a set of operations that are re-used often.

Key things to know about a function:

* It can take inputs (known as parameters)
* It can return a value

Every language has its own predefined set of functions. These are special
keywords that when typed can provide you a useful value. An example of this
is a function that provides you with the current Date. Another example is a
function that provides you with a random number. Both can be useful depending
on your application.

If you find yourself repeating a set of operations you might want to
create your own function. An example of a function would be one that accepts
the name of a user and returns a greeting "Hello" followed by the entered name.

For now, all you need to know is that you can create these things called functions
which allow you to repeat a set of operations using 1 line of code.

## Loops

Loops allow you to repeat a set of operations based on a condition. There are
two main types of loops, `for` and `while`.

`For` loops often work on an Array variable. The for loop will then go through
each element in the Array and use each element to perform a set of operations.

An example of a `for` loop would be adding up all the elements of an array. You
would have a sum variable set to zero. Then for each element in the array you
would set the sum to the sum value plus the element.

A `while` loop is different. A `while` loop will take a logical expression and
repeatedly perform a set of operations until the logical expression is false.
You must make sure that the set of operations that run can affect the logical
expression. Otherwise you end up in what is called an infinite loop which
may crash the program that is running depending on the operations that are running.

An example of a `while` loop is a game where you have multiple lives.
The game will keep working until you are out of lives. When you are out of lives
it will stop and you may get a "Game Over" message. If the developer of the game
forgot to create a way where while playing the game your lives can decrease then
you would be able to play forever and never lose the game.

## Errors

Sometimes you'll try to run certain operations but the code will result in an error.
A simple example of this is trying to divide a number by zero. The code will result
in an error stating that it can't divide by zero. If you have a user running the
output of your code and they get an error, what they will see is that the code
crashed. You don't want that. To avoid these crashes we can prevent errors using
control flow or handle the errors using try/catch blocks.

You can use control flow to prevent errors in a simple way. For example, if you are
about to divide two variables, you can check if the divisor is zero. If it's zero,
then you can tell your code to do something else. That way you avoid getting the error.

You can use try/catch blocks to try and run a certain set of code. What try/catch blocks
do is try to run some code and if it results in an error it will run another set of code
based on the error it received. For example, you can tell it to try running some code
where you divide two numbers by each other. You would then catch the error that the divisor
is zero and you could run another set of code based on that. For example, you could return
a message to the user to try again.

Try to use control flow to prevent errors whenever possible. If necessary you should then
use try/catch blocks to handle the cases when errors occur. This is called Error Handling.

## Tests

Testing is an important part of programming, especially when working on large projects.
You can test one or many functions to make sure they work independently as well as collectively.
The most common method of testing is unit testing. Unit tests look at a small unit of code,
a function, and test that it works as expected.

For example, let's say that we created a dividing function. The function would take 2 inputs,
the dividend and divisor and should return the value of the quotient. You could run tests on
this function by saying:

* If I input 12 and 3, I should get 4
* If I input 90 and 10, I should get 9
* If I input 5 and 1, I should get 5
* If I input 12 and 0, I should get a message letting me know I shouldn't divide by zero

Testing helps you prove that the code you wrote actually works as expected. There are many
testing tools to choose from, but the idea is that you can run a lot of tests all at once
to make sure that your entire codebase is functioning as expected. This helps drastically
with development, especially on large products.

Sometimes, even though each part works fine, when you connect the pieces together something
can break. To test that all the pieces of the code work together, you can work on Integration
Testing. Integration Testing tests that different parts of the code can work together and
return the expected result. Just like Unit Testing, the idea is to provide inputs to the code
with the results you expect to get and tell it to make sure it gets those. If the code returns
a different value from what you expect then you know something is wrong and you can try to fix
it.