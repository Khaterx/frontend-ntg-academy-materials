# JavaScript

##### Module Overview

In this module, we’ll start with a short tour of JavaScript. We’ll experiment with them through examples that explain their role and behavior. From there, we’ll dive deep into each technology, exploring concepts like forms and controls in HTML and the most important CSS patterns to make our web pages look good. By the end of this module, we’ll be able to make your own web applications that are responsive, stylized, and performant.

---
##### Module Objectives

- Master the basics of JavaScript such as variables, data types, functions, conditional statements, arrays, and loops.
- Learn how to use objects, JSON, spread, and rest syntax.
- ~~Understand the concept of closures.~~
- Understand the concept of generators.
- Understand the concept of promises.
- Learn DOM manipulation with JavaScript.

---
## Introduction and Variables

### Introduction to `JavaScript`

`JavaScript` is a programming language created by Brendan Eich in 1995 that enables interactive web pages and is an essential part of web applications.

If you want to learn more about the history of the language and its name, I suggest that you read this brief article on [Medium.com](https://medium.com/@benastontweet/lesson-1a-the-history-of-javascript-8c1ce3bffb17).

### How to insert `JavaScript` into `HTML`

If you’ve ever opened the Chrome developer tools or a similar tool you may have already seen how `JavaScript` is inserted into an `HTML` page.

We do that by using the `script` tag and either inserting our `JavaScript` code directly inside of it or by referencing an external file.

Code inside of the script tag:
```html
 <script type="text/javascript">YOUR SCRIPT HERE</script>
```

Reference an external file:
```html
    <script src="script.js"></script>
```

Of course, you can add as many scripts as you want and also use both relative, absolute and full path such as:
```html

```

>[!NOTE] **Note:** It’s better to not write your code inside of the script tag, but instead put it in its own file so that it can be cached by the browser and downloaded only once, regardless of how many files import it. Those files will use the cached version of the file, improving performance

### Variables

We use variables to store values, which can be anything from a username, an address or an item from our e-commerce site, for example.

Prior to ES6 (ES2015) the way we would declare a variable was:
