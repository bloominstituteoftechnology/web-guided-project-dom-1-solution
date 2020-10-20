# Lesson Plan

## 1- Preliminaries

* Walk the class through the clone, install and start process of the GP repo.
* Test out with the students the git flow for resetting their branch to the instructor's.

## 2- Instructor's Checklist

This is a deceptively simple (or deceptively complicated?) lesson filled with _lots_ of new concepts and syntax. It's easy to run out of time. Here's a quick checklist of things that need covering:

* The DOM as an API for our programs to manipulate the page
* The global object document
* Types of nodes inside the DOM
* Collections in the DOM: the NodeList and the HTMLCollection
* Basic DOM traversal: .parentElement, .nextElementSibling, .children
* Selecting single elements with older .getElementById
* Selecting single elements with the more modern .querySelector
* Selecting multiple elements with older .getElementsByClassName and TagName
* Selecting multiple elements with the more modern .querySelectorAll
* Making a real array from a DOM collection with Array.from
* Manipulating the text content of an element with .textContent
* Manipulating attributes of an element with object dot notation
* Manipulating attributes of an element with .setAttribute
* Manipulating inline styles with .style
* Manipulating class names with .classList API
* Adding elements to the DOM with .appendChild and .prepend
* Creating new elements with document.createElement

## 3- DOM Intro (don't spend more than 30 minutes on the 🚀 sections)

### 🚀 Basic idea

* `document` is a big, deeply nested object, built by Chrome from the HTML.
* Through it our JavaScript programs can intereact with the page.
* Some of the things we can _get_ from the DOM, we can also _set_.
* We can inspect the properties of `document` with `console.dir`
  
### 🚀 The DOM is made of different kinds of nodes

* Show the diagram in Canvas showing the hierarchy of nodes in a page
* The types of elements we care about the most are element (1) and text (3)
* When we say element we normally mean node of type element
* When we say node we normally mean any type of node

### 🚀 We can navigate the DOM using special properties of its nodes

* Explain there are certain relationships between the nodes:
  * parent/ancestor
  * child/descendant
  * sibling

* Demo the following properties of nodes and allow time for students to experiment:
  * `parentElement` / `parentNode`
  * `firstElementChild` / `firstChild`
  * `nextElementSibling` / `nextSibling`

### 🚀 There are different types of collections of nodes in the DOM

* `children` is an array-like `HTMLCollection` showing nodes of type element
* `childNodes` is an array-like `NodeList` showing all kinds of nodes (elements, text, comments...)
* `childNodes` has a forEach method whereas `children` does not
* We can always turn these structures into real arrays with `Array.from()`

### 🚀 Selecting elements and collections of elements from the DOM using older techniques

```javascript
  const allLinks = document.getElementsByTagName('a')        // HTMLCollection (can be empty)
  const allCards = document.getElementsByClassName('card')   // HTMLCollection (can be empty)
  const logoTitleOld = document.getElementById('logo-title') // single element (or null)
```

## 4- DOM Demo (we should spend the bulk of the class here!)

* Starting at `👉 STEP 1` inside `index.js` follow the instructions in the comments.

## 5- Links of Interest

* [The DOM chapter in Eloquent JS](https://eloquentjavascript.net/14_dom.html)
* [DOM Nodes on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Node)
* [insertAdjacentHTML on MDN](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML)

## 6- Following Along and Catching Up

* The instructor should make sure students clone the starter repo without forking it.
* The instructor must make commits to a `lecture` branch and push them regularly (or use a script to do it).
* If the students work on their own named branch, `main` is kept clean so they can re-do the demo later.
* In order to catch up, the students can reset their branch to the instructor's last pushed commit:

  ```bash
    git fetch && git reset --hard origin/lecture
  ```
