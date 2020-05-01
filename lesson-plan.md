# DOM 1

## Lesson Plan

### 🚀 The DOM represents the structure and contents of a browser window

- Walk students through [this resource](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction).

- `document` is a big, deeply nested object, built by Chrome from the HTML
- Through it our programs can intereact with the page
- Some of the things we can **get** from the DOM, we can also **set**

👉 Exercises:

1. Ask students to console.dir `document`
1. Can you find the title of the document?
1. Can you set it to be something different?

### 🚀 We can traverse the DOM using special properties of its nodes

- There are certain relationships between the nodes:
  - parent/ancestor
  - child/descendant

- Demo the following properties of nodes:
  - parentElement / parentNode
  - firstElementChild / firstChild
  - nextElementSibling / nextSibling

👉 Exercises:

1. Point out the h1 tag ont the page and have students find:
   - Its parent element
   - Its first child element or node
   - Its next sibling element

👉 Exercises:

1. Ask students to find a particular element on the page using only dot notation and `children`
2. Same thing but ask them to use `childNodes` instead
3. How are `children` and `childNodes` different?

### 🚀 There are different types of collections of nodes in the DOM

- `children` is an array-like `HTMLCollection` showing nodes of type element
- `childNodes` is an array-like `NodeList` showing all kinds of nodes (elements, text, comments...)
- `childNodes` has a forEach method whereas `children` does not
- We can always turn these structures into real arrays with `Array.from()`

👉 Exercises:

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

👉 Exercises:

1. Find all headings in the page and save them into a `headings` variable
1. Loop over the `NodeList` and console.log the text content of each heading

### 🚀 Using classList to add, remove and toggle classNames on elements

### 🚀 Using dataSet to read information saved in custom data- attributes

### 🚀 Getting and setting atributes using dot notation

### 🚀 Getting and setting attributes using getAttribute and setAttribute

### 🚀 Getting and setting the text content of elements

### 🚀 Creating new elements

### 🚀 Appending newly created elements to the DOM using appendChild and insertAdjacentHTML

## How to Contribute

- clone the [starter code](https://github.com/LambdaSchool/web-guided-project-dom-1).
- create a solution branch: `git checkout -b solution`.
- add this repository as a remote: `git remote add solution https://github.com/LambdaSchool/web-guided-project-dom-1-solution`
- pull from this repository's `master` branch into the `solution` branch in your local folder `git pull solution master:solution --force`.

A this point you should have a `master` branch pointing to the student's repository and a `solution` branch with the latest changes added to the solution repository.

When making changes to the `solution` branch, commit the changes and type `git push solution solution:master` to push them to this repository.

When making changes to the `master` branch, commit the changes and use `git push origin master` to push them to the student's repository.
