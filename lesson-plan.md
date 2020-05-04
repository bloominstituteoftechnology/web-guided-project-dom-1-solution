# DOM 1

## A- Lesson Plan

### 🚀 The DOM represents the structure and contents of a browser window

- Walk students through [this resource](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction).

- `document` is a big, deeply nested object, built by Chrome from the HTML
- Through it our JavaScript programs can intereact with the page
- Some of the things we can **get** from the DOM, we can also **set**

👉 (1) Exercises:

1. Can you console.dir `document`?
1. Can you find the title of the document?
1. Can you set it to be something different?

### 🚀 Elements of the page have content and attributes of interest

- Walk students through right-clicking an element and logging it to the console
- Demo grabbing the id, classList, dataset, getAttribute, and textContent
- Demo chaning the text content

👉 (2) Exercises:

1. Point an element on the page and have students pull
   - id, class list, data set, text content and any attribute
1. Change the text content of the element

### 🚀 The DOM is made of different kinds of nodes

- Show on TK the diagram showing the hierarchy of nodes in a page
- The [types of nodes](https://developer.mozilla.org/en-US/docs/Web/API/Node/nodeType) we care about the most are element (1) and text (3)
- When we say element we mean node of type element
- When we say node we mean any type of node

### 🚀 We can navigate the DOM using special properties of its nodes

- Explain there are certain relationships between the nodes:
  - parent/ancestor
  - child/descendant
  - sibling

- Demo the following properties of nodes:
  - `parentElement` / `parentNode`
  - `firstElementChild` / `firstChild`
  - `nextElementSibling` / `nextSibling`

👉 (3, 4) Exercises:

1. Point out `document.body` and have students find:
   - Its parent element
   - Its first child element
   - Its first child element's next sibling element

1. Ask students to find a particular element on the page starting at `document.body`

### 🚀 There are different types of collections of nodes in the DOM

- `children` is an array-like `HTMLCollection` showing nodes of type element
- `childNodes` is an array-like `NodeList` showing all kinds of nodes (elements, text, comments...)
- `childNodes` has a forEach method whereas `children` does not
- We can always turn these structures into real arrays with `Array.from()`

👉 (5) Exercises:

1. Convert an `HTMLCollection` or a `NodeList` into an actual array

### 🚀 Selecting elements from the DOM

#### Older techniques without CSS selector

```javascript
  const allLinks = document.getElementsByTagName('a')
  const allCards = document.getElementsByClassName('card')
  const logoTitleOld = document.getElementById('logo-title')
```

#### Newer techniques using CSS selector

```javascript
  const logoTitle = document.querySelector('#logo-title') // single element
  const anchorTagsNav = document.querySelectorAll('nav a') // NodeList
  // can be called on elements instead of document
  const nav = document.querySelector('nav')
  const linksfromNav = nav.querySelectorAll('a')
```

👉 (6, 7) Exercises:

1. find the following elements or groups of elements:

   - all the divs in the page
   - all elements with a className of 'card'
   - the element with an id of 'mainNav'

1. do the same, but using CSS selectors

### 🚀 Using classList to add, remove and toggle classNames on elements

### 🚀 Getting and setting atributes using dot notation

### 🚀 Getting and setting attributes using getAttribute and setAttribute

### 🚀 Getting and setting the text content of elements

### 🚀 Creating new elements

### 🚀 Appending newly created elements to the DOM using appendChild and insertAdjacentHTML

### 🚀 Using dataSet to read information saved in custom data- attributes (STRETCH)

## B- How to Contribute

- clone the [starter code](https://github.com/LambdaSchool/web-guided-project-dom-1).
- create a solution branch: `git checkout -b solution`.
- add this repository as a remote: `git remote add solution https://github.com/LambdaSchool/web-guided-project-dom-1-solution`
- pull from this repository's `master` branch into the `solution` branch in your local folder `git pull solution master:solution --force`.

A this point you should have a `master` branch pointing to the student's repository and a `solution` branch with the latest changes added to the solution repository.

When making changes to the `solution` branch, commit the changes and type `git push solution solution:master` to push them to this repository.

When making changes to the `master` branch, commit the changes and use `git push origin master` to push them to the student's repository.
