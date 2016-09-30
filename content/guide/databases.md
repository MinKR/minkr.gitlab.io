+++
date = "2016-06-01T22:16:53+02:00"
title = "Databases"
type = "guide"
draft = true
author_twitter = "sbeleidy"
coffee_link = "https://cash.me/sbeleidy/5"
caption = "Store information for your users"

+++

Slides available [here](/slide/databases).

# Tables

Whenever you build a website, you want to record the information that users provide you with. This information can vary in size and types.
Essentially, storing data is recording data in a table. If you know how a table works, that's all you need to understand databases.

When you are storing data you can think of the major items you want to store as tables. Any high-level category of values that you want to save, like users, books, purchases, products, settings and so on can be considered a table. You're probably thinking, "Why do I need a whole
table for users?" Well, you want to store several pieces of information about each user.

In the table sense, each column is the name of the item you want to store and each row is an actual item. For example, the users table may have a name column. Each row in the table is a user and you can check its name column to get that user’s name.

When using a table, you would reference an item by saying which row it is. For example, the user on the 5th row. There's a more technical term for this reference in databases. The identifying number for an item is called the primary id. This primary id is unique to that specific row. This means that you could have 2 users with the same first name for example but you would know they were two different users from their primary ids.

Examples:

1. Users table with primary id, name, email, address, city
1. Settings table with favorite_color, timezone,
1. Products table with primary id, name, price, description

# Most common data types

1. String - a string of characters or what's commonly known as text
1. Boolean - true or false
1. Float - a number with decimal points allowed
1. Integer - an integer (number with no decimals)

# Relationships

When you want to connect items together, for example a user and a product. It makes sense to store products separately in their own table.
If you wanted to relate users to products though, how would you? Well, it's quite simple. This is where we use relationships.

Relationships are how we can connect items together. To define a relationship, we reference the primary id of one item in a column on another item. For example, we can have a settings_id column in the users table that references a settings row in the settings table. The settings_id is called a foreign key since it's a foreign table’s primary key.

The four types of relationships that you will use to connect different tables are described next.

## One to one

An example is users having one settings row.

## One to many

This occurs when one table has multiple relationships to another table. For example, a user sells many products. Here, the product is only sold by that one user and no one else. For each product we would have a reference to the user who is selling it for example in a column called seller_id which would be the user’s primary id.

## Many to one

The reverse of one to many. A user sells many products (one to many) but a product is sold by many users (many to one).

## Many to many

This occurs when one table has multiple relationships to another table that has multiple relationships with the original table. Think of this as users buying products. A user can buy multiple products and a product can be bought my multiple users. The way to do this in a relational database would be to create another table that connects both tables together. In this example, the table would be called purchases or more commonly, product_user to denote a relationship between products and users. The table should have at least 2 columns, one with the id of each table. 

These relationships may make more sense when you try searching for items. Based on the examples above:

a user’s settings should return one item (settings)
a user’s products that they are selling could return multiple items (products)
a product’s seller should return one item (user)
a user’s purchases could return multiple items (products)
a product’s purchasers could return multiple items (users)

# Document Storage

The previous description of tables is slowly getting outdated. A more recent trend with NOSQL data uses a concept called document storage.
When using tables, we have to specify the columns that apply to every item in the table. With documents, we don't have to! We can just define
what's available for each item.


## Table

| id | name | email |
|:---:|:---:|:---:|
| 1 | John Miller | jmiller@trump.org |
| 2 | John Barron | jbarron@trump.org |

## Document

This is an example in JSON. JSON creates each row designated by `{}` and uses the column name followed by a `:` followed by the value.

``` json
{
    id: 1,
    name: "John Miller",
    email: "jmiller@trump.org"
},
{
    id: 2,
    name: "John Barron",
    email: "jbarron@trump.org"
},
{
    id: 3,
    name: "John Baron",
    email: "jbaron@trump.org",
    isAlias: true
}
```

You can see the last item has an extra column named `isAlias`. This is one of the key features with document storage. You can add different column names for each row item.

For documents, column names are called properties or keys and their values are called values. Documents are sometimes referred to as key value pairs.
