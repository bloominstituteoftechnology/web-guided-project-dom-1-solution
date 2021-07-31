// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card

// A- finding across the entire DOM
const header = document.querySelector('header')                  // instructor
const logoTitle = document.querySelector('#logoTitle')           // students
const firstCard = document.querySelector('.card:nth-of-type(1)') // students
// B- finding within one particular element
const imageFirstCard = firstCard.querySelector('img')   // instructor
const titleFirstCard = firstCard.querySelector('h2')    // students
const subtitleFirstCard = firstCard.querySelector('h3') // students
const textFirstCard = firstCard.querySelector('p')      // students
// C- traversing with dot notation
const link1FirstCard = textFirstCard.nextElementSibling  // instructor
const link2FirstCard = link1FirstCard.nextElementSibling // students


// 👉 2- Finding collections of elements in the DOM

// A- find all the anchor tags inside the nav element
const links = document.querySelectorAll('nav a')
// B- loop over the links and console.log their text content
links.forEach(link => console.log(link.textContent))
// C- turn the collection of links into a real array
const linksRealArray = Array.from(links)
// D- use .find to find the anchor tag with the textContent of "Home"
console.log(linksRealArray.find(link => link.textContent === 'Home'))


// 👉 3- Changing an element's text content

//  A- Change the cat-related content into dog-related content
//  B- Have the students research online the difference between textContent and innerText
logoTitle.textContent = 'Lambda Dog'
titleFirstCard.textContent = 'I rulez'
subtitleFirstCard.textContent = 'obviously'
textFirstCard.textContent = 'Puggorino tungg puggorino, waggy wags. thicc wow such tempt. Very jealous pupper doing me a frighten puggorino very taste wow, borkdrive. Smol big ol fluffer pupperino fluffer, waggy wags ruff blep.'
link2FirstCard.textContent = 'Dog Ipsum'


// 👉 4- Changing any property
//  A- using dot notation to change a few attributes
logoTitle.className = 'logo heading banana'
imageFirstCard.src = 'https://herepup.com/wp-content/uploads/2015/12/Dog-Advice-1-1.jpg'
//  B- using .setAttribute to change a few attributes
link1FirstCard.setAttribute('href', 'https://www.pexels.com/search/dog/')
link2FirstCard.setAttribute('href', 'https://doggoipsum.com/')


// 👉 5- Changing the styling of an element
//  A- by changing the class names on the element with the classList API
header.classList.add('sky')
header.classList.remove('sky')
setInterval(() => header.classList.toggle('sky'), 1000)
//  B- by manipulating inline styles on the element
header.style.fontSize = '2em'


// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"
const blogLink = document.createElement('a')
blogLink.textContent = 'Blog'
blogLink.href = '#'
document.querySelector('nav').appendChild(blogLink)


// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM!
// We cannot append the same copy multiple times
const secondCard = firstCard.cloneNode(true)
document.querySelector('.card-group')
  .appendChild(secondCard)


// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]
header.remove()
document.body.prepend(header)

// 👉 9- Go through having an object 'data-store' type of thing and using that to update data, something along the lines of:

const data =   {
  "contact": {
    "contact-heading" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  }
};

const contactHeading = document.querySelector('.contact-heading');
const address = document.querySelector('.address');
const phone = document.querySelector('.phone');
const email = document.querySelector('.email');

// Teacher:
contactHeading.textContent = data["contact"]["contact-heading"];
// Students:
address.textContent = data["contact"]["address"];
phone.textContent = data["contact"]["phone"];
email.textContent = data["contact"]["email"];


// 👉 10- Show to students the insertAdjacentHTML method [STRETCH if time allows]
