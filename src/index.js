// See this in the console to make sure the project is wired up correctly
console.log('The project is UP')

// STEP 1- console.dir document and study it

// STEP 2- Grab the Lambda Cat heading in the console. Access the following:
//  - the .id
//  - the .classList
//  - the data inside a data-attribute using .dataset
//  - the text content using .textContent
//  - any attribute using .getAttribute('id') // example using id

// STEP 3- find the body of the document in the DOM and find:
//  - Its parentElement
const parentOfBody = document.body.parentElement
//  - Its firstElementChild
const header = document.body.firstElementChild
//  - Its firstElementChild's nextSibling element
const cardContainer = document.body.firstElementChild.nextElementSibling

// STEP 4- find the Lambda Cat heading with firstElementChild and nextSibling
const heading = document.body.firstElementChild.firstElementChild.firstElementChild.nextElementSibling
console.log(heading, '<- barbara')

// STEP 5- find the children of the nav, convert it into a real array
const navChildren = document.body.firstElementChild.firstElementChild.nextElementSibling.children
console.log(navChildren, '<- gabri')

const navChildrenArr = Array.from(navChildren)
console.log(navChildrenArr, '<- the REAL array')

navChildrenArr.forEach(link => {
  console.log(link.textContent)
})

// STEP 6- NO CSS SELECTOR - find the following elements or groups of elements:
//  - all the divs in the page
//  - all elements with a className of 'card'
//  - the element with an id of 'mainNav'
document.getElementsByTagName('div')
document.getElementsByClassName('card')
document.getElementById('mainNav')

// examples
const allLinks = document.getElementsByTagName('a') // [COLLECTION]
const allCards = document.getElementsByClassName('card') // [COLLECTION]
const logoTitleOld = document.getElementById('logo-title') // [SINGLE ELEMENT]

// STEP 7- do the same, but using CSS selectors
//  - all the divs in the page
//  - all elements with a className of 'card'
//  - the element with an id of 'mainNav'

document.querySelectorAll('div')
document.querySelectorAll('.card')
document.querySelector('#mainNav')

// examples
const logoTitle = document.querySelector('#logo-title') // [SINGLE ELEMENT]
const anchorTagsNav = document.querySelectorAll('nav a') // [COLLECTION]

const nav = document.querySelector('nav') // [SINGLE ELEMENT]
const linksfromNav = nav.querySelectorAll('a') // [COLLECTION]

// STEP 8- use setAttribute to change an attribute of an element
// elem.getAttribute('href')
// elem.setAttribute('id', 'newId')

// (change the href of the first link inside the nav
// so it takes to google.com)

// 1- capture the element
// 2- set the attribute
nav.firstElementChild.setAttribute('href', 'https://google.com') 

// STEP 9- use style to change inline styles of an element
//  - make the first h3 subheading be a different color
const theH3 = document.querySelector('h3')
theH3.style.color = 'green'
//  - make all the h3 subheadings be a different color using a loop
const theH3s = document.querySelectorAll('h3')
theH3s.forEach(link => link.style.color = 'orange')

// STEP 10- use classList to add, remove and toggle a class name
// elem.classList // the list of classNames
// elem.classList.add('foo') // this adds a className of 'foo' to elem
// elem.classList.remove('foo') // this removes the className of 'foo' from elem
// elem.classList.toggle('foo') // this toggles the className on the element

//  - remove the 'extra-stuff' class name from the last paragraph
//  - add it to the first paragraph
//  - toggle it in the second paragraph
document.querySelectorAll('.extra-stuff').forEach(elem => elem.classList.toggle('extra-stuff'))

// STEP 11- get a collection of h2s and loop over them setting text content from cardTitles
const cardTitles = {
  cardTitle1: 'Cats Are the Supreme Rulers',
  cardTitle2: 'Cats Rule Dogs Drool',
  cardTitle3: 'Give Me All the Belly Rubs',
  cardTitle4: 'I Haz CheeseBurger',
}
const keys = Object.keys(cardTitles)

document.querySelectorAll('h2').forEach((h2, idx) => {
  h2.textContent = cardTitles[keys[idx]]
})

// STEP 12- create a new link and append it to the main nav
const newLinkProps = {
  href: '#',
  textContent: 'Site Map',
  className: 'menu-item',
}

// create link out of thin air, put it in a variable
const newLink = document.createElement('a')

// add all the attrs and content it needs
newLink.href = newLinkProps.href
newLink.textContent = newLinkProps.textContent
newLink.classList.add(newLinkProps.className)

// append it to the nav
nav.appendChild(newLink)
