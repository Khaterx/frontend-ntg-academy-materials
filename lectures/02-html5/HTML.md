##### Module Overview
HTML is used to design standard web pages using multiple tags. In this module, we’ll learn about HTML tags from scratch. This module will also teach us how to code and create our own web pages using HTML.

##### Module Objectives
- Learn HTML basics.
- Learn the concept of markup, tags, and attributes.
- Learn the HTML document structure.
- Learn to use common HTML tags.
- Learn to use images, forms, and tables in HTML.
- Learn about semantic HTML tags.

---

#####  1. What is HTML?

**Hyper Text Markup Language** (or **HTML** for short).
HTML is a markup language that provides a description of the structure/layout of your web page.

👉 HTML is a markup language that web developers use to structure and describe the content of a webpage (not a programming language) .
👉HTML consists of elements that describe different types of 
content: `paragraphs, links, headings, images, video, etc`. 
👉 Web browsers understand HTML and **render HTML code as websites**

---
- How Pages Use Structure  ![[Html-Structure.png]]

```HTML
<!DOCTYPE...> This tag defines the document type and HTML version.
 
<body> Everything inside this element is shown inside the main 
 browser window.
 
<head> This contains information about the page .

<title> shown in the top of the browser
```

---
- Elements Structure
![[Elements-Structure.png]]

---

##### 2. Core Attributes + Hyperlinking
- ==Id== used to uniquely identify any element 
-  ==Title== gives a suggested title for the element. 
-  ==Class== used to associate an element with a style sheet 
-  ==Style== allows you to specify Cascading Style Sheet (CSS) rules within the element.
```HTML

Syntax: 
<tagName attribute_name="attribute_value"></tagName>

Example:
<h2 title="This is a subheading">Hello, World!</h2>


```

###### Anchor elements / hyperlinking
```HTML
<a href="http://www.google.com">Google</a>
```
The `href` _attribute_ refers to **Hypertext Reference**, whose value is a **Uniform Resource Locator** (URL). A URL is basically fancy lingo for a web address, or the destination the link is pointing to. The `href` attribute can also refer to things like:
- Email Addresses (`mailto:someone@educative.io`)
- Phone Numbers (`tel:+18004444444`)
- Documents/Files (Give the URL of the file instead of a web page)
- Another different location on the same web page the browser is currently on
---

##### 3. Headings + Lists:


1. Headings
	The HTML standard has `h1` element as well as five additional text heading elements, appropriately named `h2` through `h6`.
	==To practice good style==, you shouldn’t skip heading levels when structuring your HTML pages. In other words, an `h2` element should be used for a header one level below an `h1` element, an `h3` element should be used a level below `h2`, and so on.
2.  Lists:
	1.  Unordered lists
	2. Ordered lists
		```HTML
		// Unordered lists
			<ul>
				<li> Hello </li>
			</ul>
		// Ordered lists
			<ol>
				<li> Hello </li>
			</ol>
		```
-  List element attributes: `type` and `start`:
	- The `type` attribute allows us to change the style of either the bullets for unordered lists or the numbering scheme for ordered lists. 
	- ==Unordered== list `type` values include `circle`, `disc`, and `square`.
	
	- ==Ordered list== `type` values can be used to change the numbering scheme, and include the following:
	- `1`: Default numeric scheme
	- `I`: Upper-case Roman numerals
	- `i`: Lower-case Roman numerals
	- `A`: Upper-case Alphabet
	- `a`: Lower-case Alphabet
	- Ordered lists have an additional `start` attribute, that can be used to start the numbering at a value other than the default of 1.
-

##### 4. Inline vs. Block Elements + Divs:
- ==Block==-level HTML elements take up the full width of a web page, essentially creating a “block” around the content you place within that element. Block-level elements, by default, also start on a new line. The following are some of the block-level elements:
- Headings (`<h1>`-`<h6>`)
- Ordered and Unordered Lists (`<ol>`, `<ul>`)
- List Items (`<li>`)
- Paragraphs (`<p>`)
==Inline elements==
Inline elements, like the name suggests, do not take up the full width of a webpage and are generally _in-line_ with text content. Inline elements also do not start a new line when rendered in the browser. Examples of inline elements include:
- Anchors (`<a>`)
- Images (`<img>`)
- Bolding Text (`<strong>`)
- Emphasizing Text (`<em>`)
==Divs==
	The `<div>`, a block-level element, allows you to section into separate, logical divisions.
	As you can see, the `<div>` element does not render as anything special on the web page and is mainly used to separate content into distinct groups for organization or styling purposes. 
##### 5. id + class Attributes:
The `id` and `class` attributes can be used to identify specific HTML elements across your HTML page.
The `id` attribute provides you with the ability to give any element a **unique identifier**. 
```html
<h1 id="companyName">Ntgclarity.com</h1>
```

Some notes about `id` usage:
- an `id` value should only be used for a single element (you will get unexpected behavior if you use the same `id` value for multiple elements)
- an `id` value must not contain any whitespace
- a single element cannot have multiple `id` values
---
The `class` attribute is similar to the `id` attribute in that it is used to identify specific elements. The main distinctions are:

- the same `class` value can be used across multiple elements
- an element can have multiple `class` values, separated by whitespaces

In the example below, the `id` and `class` attributes are used to apply CSS styles (_hidden_) to our HTML document. Take note of the **main differences** between the two attributes.
```html
<h1 class="companyName text-color">Ntgclarity.com</h1>
```

##### 6. The img Element | Images :

Use the `<img>` tag to embed an image into your web page with an `src` attribute that contains a file path to the image you want to be included. Use the `alt` attribute to provide _alternative text_ with a description of the image in case it doesn’t load, or is being read by a screen reader for people with disabilities.

```HTML
<!-- Incorrect img declaration --><img src="path/to/image/cat.jpg" alt="A cat"></img>
<!-- Correct img declaration --><img src="path/to/image/cat.jpg" alt="A cat">
```

##### 7. Exercise:
In this exercise, you will need to do the following:
- Add an **image** of the final result of the recipe from a search engine of your choice to your HTML page. Give this image an _alternative text_ label. Place this image under the **main level header**
- Wrap the **main level header** and the **image** in a container. Give this container an `id` attribute, with the value `recipeTitle`
- Group the elements comprising `Ingredients` and `Instructions` into separate containers
    - Give each container an `id` value; 
    - one named `ingredients`, the other named `instructions`
    - Give both containers a `class` value of `recipeList`
##### 8. Delving into Semantics HTML:
- What exactly is 'Semantic HTML'? 🤯
	A **semantic element** clearly describes its content _(between the tags)_ to both the browser AND the developer. 🚫 Simply using div's for your header, navbar, footer, sections, etc. is not good practice! 🚫

- More Easily Readable Code w/ Semantic HTML 😋
Take a look at the block of code below ⬇️

Notice all the `<div>`'s?

```HTML
<div id="header"></div>
<div class="section">
    <div class="article">
        <div class="figure">
            <img>
            <div class="figcaption"></div>
        </div>
    </div>
</div>
<div id="footer"></div>
```
Now take a look at this block of code below ⬇️

```HTML
<header></header>
<section>
    <article>
        <figure>
            <img>
            <figcaption></figcaption>
        </figure>
    </article>
</section>
<footer></footer>
```

- Using Semantic HTML Tags Correctly 🤩
![[semantic-tags.png]]

- Now, let's take a look at an example of a semantically correct webpage layout ⬇️

![semanticchart2.jpeg](https://cdn.hashnode.com/res/hashnode/image/upload/v1630794997889/oKnWz5zR4.jpeg?auto=compress,format&format=webp)



#### 9. Summary  HTML topics:
1. how to web work?
2. what's is html?
3. basic html tags. `img,div,p,h1,a,ul,ol,li...etc`
4. core attributes `class, id, title, style, src, href...etc`
5. heading ( h1....h6)
6. lists , nested list
	1. order list `<ol> <li></li</ol>`
	2. unorder list `<ul> <li></li></ul>`
7. inline elements Vs block elements
8. id Vs class
9. `Div` container
10. forms and inputs tags `<form></form>`
11. some semantics HTML tages
	1. `header`
	2. `nav`
	3. `main`
	4. `section`
	5. `footer`
12. References : 
	- https://www.w3schools.com/html/ `English`
	- https://web.dev/learn/html `English`
	- https://www.youtube.com/playlist?list=PLDoPjvoNmBAw_t_XWUFbBX-c9MafPk9ji  `Arabic`
	- https://youtu.be/q3yFo-t1ykw?feature=shared `Arabic`
