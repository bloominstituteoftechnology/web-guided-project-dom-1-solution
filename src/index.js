// USING THE DOM TO EDIT ELEMENTS ON THE PAGE (AND ADD NEW ONES)

// 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
const header = document.querySelector('header')
const logoTitle = document.querySelector('#logoTitle')
const firstCard = document.querySelector('.card:nth-of-type(1)')
const imageFirstCard = firstCard.querySelector('img')
const titleFirstCard = firstCard.querySelector('h2')
const subtitleFirstCard = firstCard.querySelector('h3')
const textFirstCard = firstCard.querySelector('p')
const link1FirstCard = textFirstCard.nextElementSibling
const link2FirstCard = link1FirstCard.nextElementSibling

// 3- Accessing and changing element attributes
//  with dot notation
//  setAttribute, getAttribute
logoTitle.textContent = 'Lambda Dog'
titleFirstCard.textContent = 'I rulez'
subtitleFirstCard.textContent = 'obviously'
textFirstCard.textContent = 'Puggorino tungg puggorino, waggy wags. thicc wow such tempt. Very jealous pupper doing me a frighten puggorino very taste wow, borkdrive. Smol big ol fluffer pupperino fluffer, waggy wags ruff blep.'
link2FirstCard.textContent = 'Dog Ipsum'

// 3- Changing any property
//  with dot notation
logoTitle.className = 'logo heading banana'
imageFirstCard.src = 'https://herepup.com/wp-content/uploads/2015/12/Dog-Advice-1-1.jpg'
//  setAttribute, getAttribute
link1FirstCard.setAttribute('href', 'https://www.pexels.com/search/dog/')
link2FirstCard.setAttribute('href', 'https://doggoipsum.com/')

// 4- Changing the style
//  by changing the class names on the element
//  by manipulating inline styles on the element
header.classList.add('sky')
header.classList.remove('sky')

setInterval(() => {
  header.classList.toggle('sky')
}, 1000);

// 5- Creating new elements and appending them
const blogLink = document.createElement('a')
blogLink.textContent = 'Blog'
blogLink.href = '#'
document.querySelector('nav').appendChild(blogLink)
// 6- Removing an existing element and putting it back
header.remove()
document.body.prepend(header)

// 7- Making a copy of the card and appending it to the card group
const secondCard = firstCard.cloneNode(true)
document.querySelector('.card-group')
  .appendChild(secondCard)
