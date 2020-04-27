# DOM 1

## Lesson Plan

### 🚀🚀🚀 The DOM represents the contents of a browser tab

- Walk students through [this resource](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction).

- Demo changing `document.title` to make the point that we can change just about anything on the page (except stylesheets, which have their own DOM)

🤔🤔🤔 Exercises:

1. Ask students to console.log `document`
2. Ask students to console.dir `document`
3. How do these representations difer?

### 🚀🚀🚀 We can think of a page as a tree of nested boxes

There are certain relationships between the boxes:

- parent/ancestor
- child/descendant
- sibling

🤔🤔🤔 Exercises:

1. Select an element on the page and ask students to find:
   - the parent and a more distant ancestor
   - a child and a more distant descendant
   - a sibling

### 🚀🚀🚀 We can traverse the DOM using dot notation and children

![traversing the DOM](https://tk-assets.lambdaschool.com/e8d103b8-e83d-430a-ad0f-e40ade208665_traversing-dom.png)

🤔🤔🤔 Exercises:

1. Ask students to find a particular element on the page using only dot notation and `children`
1. Same thing but ask them to use `childNodes` instead
1. How are `children` and `childNodes` different?

### 🚀🚀🚀 There are different types of nodes in the DOM

- `children` is an array-like `HTMLCollection` showing nodes of type element
- `childNodes` is an array-like `NodeList` showing all kinds of nodes (elements, text, comments...)
- `childNodes` has a forEach method whereas `children` does not
- We can always turn these structures into real arrays with `Array.from()`

🤔🤔🤔 Exercises:

1. Convert an `HTMLCollection` or a `NodeList` into an actual array

### 🚀🚀🚀 Selecting elements from the DOM

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

## How to Contribute

- clone the [starter code](https://github.com/LambdaSchool/web-guided-project-dom-1).
- create a solution branch: `git checkout -b solution`.
- add this repository as a remote: `git remote add solution https://github.com/LambdaSchool/web-guided-project-dom-1-solution`
- pull from this repository's `master` branch into the `solution` branch in your local folder `git pull solution master:solution --force`.

A this point you should have a `master` branch pointing to the student's repository and a `solution` branch with the latest changes added to the solution repository.

When making changes to the `solution` branch, commit the changes and type `git push solution solution:master` to push them to this repository.

When making changes to the `master` branch, commit the changes and use `git push origin master` to push them to the student's repository.
