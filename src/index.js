// USING THE DOM TO EDIT ELEMENTS ON THE PAGE (AND ADD NEW ONES)

// 1- Finding an element on the page and saving a reference to it
//  1a- querySelector
//  1b- querySelectorAll
const logoTitle = document.querySelector('#logoTitle')

// 2- Changing an element's text content
logoTitle.textContent = 'Lambda Dog'

// 3- Changing any property
//  3a- with dot notation
//  3b- setAttribute
const image = document.querySelector('.card-group .card:nth-of-type(1) img')
// image.setAttribute('src', 'https://herepup.com/wp-content/uploads/2015/12/Dog-Advice-1-1.jpg')
image.src = 'https://herepup.com/wp-content/uploads/2015/12/Dog-Advice-1-1.jpg'

// 4- Changing the style
//  4a- by changing class names on the element
const header = document.querySelector('header')
header.classList.add('sky')
header.classList.remove('sky')

setInterval(() => {
  header.classList.toggle('sky')
}, 1000)

//  4b- by manipulating inline styles on the element
header.style.background = 'pink'

// 5- Creating new elements and appending them
const newLink = document.createElement('a')
newLink.textContent = 'Blog'
newLink.classList.add('menu-item')
newLink.href = '#'
document.querySelector('nav').appendChild(newLink)

// 6- Removing an existing element and putting it back
header.remove()
const body = document.body
body.prepend(header)

// 7- Making a copy of the card and appending it to the card group
const card = document.querySelector('.card-group .card:nth-of-type(1)')
const copyOfCard = card.cloneNode(true)
const cardGroup = document.querySelector('.card-group')
cardGroup.appendChild(copyOfCard)
