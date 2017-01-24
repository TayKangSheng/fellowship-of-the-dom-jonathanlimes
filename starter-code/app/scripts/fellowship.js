console.log('Linked.')

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
]

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
]

var lands = ['The Shire', 'Rivendell', 'Mordor']
var body = document.querySelector('body')

// Part 1

function makeMiddleEarth () {
  // create a section tag with an id of middle-earth
  // add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body
  var middleEarth = document.createElement('section')
  middleEarth.id = 'middle-earth'

  lands.forEach(function (land) {
    console.log(land)
    var article = document.createElement('article')
    article.className = 'land'
    var h1 = document.createElement('h1')
    h1.textContent = land

    article.appendChild(h1)
    middleEarth.appendChild(article)
  })
  body.appendChild(middleEarth)
}
makeMiddleEarth()

// Part 2

function makeHobbits () {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit
  var listOfLi = []
  hobbits.forEach(function (hobbit) {
    var li = document.createElement('li')
    li.textContent = hobbit
    li.className = 'hobbit'
    listOfLi.push(li)
  })

  var ul = document.createElement('ul')
  listOfLi.forEach(function (list) {
    ul.appendChild(list)
    ul.className = 'hobbits'
  })
  var theShire = document.getElementById('middle-earth').querySelector(':first-child')
  theShire.appendChild(ul)
}
makeHobbits()

// Part 3

function keepItSecretKeepItSafe () {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
  var ring = document.createElement('div')
  ring.id = 'the-ring'
  ring.className = 'magic-imbued-jewelry'
  ring.addEventListener('click', nazgulScreech)
  var frodo = document.querySelector('.hobbit')
  frodo.appendChild(ring)
}
keepItSecretKeepItSafe()

// Part 4
var theShire = document.getElementById('middle-earth').querySelector(':first-child')

function makeBuddies () {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  var aside = document.createElement('aside')
  var ul = document.createElement('ul')
  buddies.forEach(function (buddy) {
    var li = document.createElement('li')
    li.textContent = buddy
    li.className = 'buddy'
    ul.appendChild(li)
  })

  aside.appendChild(ul)
  var rivendell = document.getElementsByTagName('Article')[1]
  rivendell.appendChild(aside)
}
makeBuddies()

// Part 5

function beautifulStranger () {
  // change the 'Strider' textnode to 'Aragorn'
  var strider = document.getElementsByTagName('Aside')[0].querySelector(':nth-child(4)')
  strider.textContent = 'Aragorn'
}
beautifulStranger()

// Part 6

var rivendell = document.getElementsByTagName('Article')[1]

function leaveTheShire () {
  // assemble the hobbits and move them to Rivendell
  var hobbits = theShire.querySelector(':nth-child(2)')
  theShire.removeChild(hobbits)
  rivendell.appendChild(hobbits)
}
leaveTheShire()

// Part 7

function forgeTheFellowShip () {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  var theFellowship = document.createElement('div')
  theFellowship.id = 'the-fellowship'
  rivendell.appendChild(theFellowship)
  var pippin = rivendell.getElementsByClassName('hobbit')[3]
  var merry = rivendell.getElementsByClassName('hobbit')[2]
  var sam = rivendell.getElementsByClassName('hobbit')[1]
  var frodo = rivendell.getElementsByClassName('hobbit')[0]
  var boromir = document.getElementsByTagName('Aside')[0].querySelector(':nth-child(5)')
  var aragorn = document.getElementsByTagName('Aside')[0].querySelector(':nth-child(4)')
  var gimli = document.getElementsByTagName('Aside')[0].querySelector(':nth-child(3)')
  var legolas = document.getElementsByTagName('Aside')[0].querySelector(':nth-child(2)')
  var gandalf = document.getElementsByTagName('Aside')[0].querySelector(':first-child').querySelector(':first-child')
  theFellowship.appendChild(boromir)
  alert('Boromir has joined your party!')
  theFellowship.appendChild(aragorn)
  alert('Aragorn has joined your party!')
  theFellowship.appendChild(gimli)
  alert('Gimli has joined your party!')
  theFellowship.appendChild(legolas)
  alert('Legolas has joined your party!')
  theFellowship.appendChild(gandalf)
  alert('Gandalf has joined your party!')
  theFellowship.appendChild(pippin)
  alert('Pippin has joined your party!')
  theFellowship.appendChild(merry)
  alert('Merry has joined your party!')
  theFellowship.appendChild(sam)
  alert('Sam has joined your party!')
  theFellowship.appendChild(frodo)
  alert('Frodo has joined your party!')
}
forgeTheFellowShip()

// Part 8

function theBalrog () {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
  var gandalf = document.getElementById('the-fellowship').querySelector(':nth-child(5)')
  gandalf.textContent = 'Gandalf the White'
  gandalf.style.background = 'white'
  gandalf.style.border = 'grey'
}
theBalrog()

// Part 9

function hornOfGondor () {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
  alert('Horn of Gondor has been blown!')
  var theFellowship = document.getElementById('the-fellowship')
  var boromir = document.getElementById('the-fellowship').querySelector(':first-child')
  boromir.style.textDecoration = 'line-through'
  theFellowship.removeChild(boromir)
}
hornOfGondor()

// Part 10
var theFellowship = document.getElementById('the-fellowship')

function itsDangerousToGoAlone () {
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
  var mountDoom = document.createElement('div')
  mountDoom.id = 'mount-doom'
  var mordor = document.getElementsByTagName('Article')[2]
  mordor.appendChild(mountDoom)
  var sam = document.getElementById('the-fellowship').querySelector(':nth-last-child(2)')
  var frodo = document.getElementById('the-fellowship').querySelector(':nth-last-child(1)')
  theFellowship.removeChild(sam)
  theFellowship.removeChild(frodo)
  mordor.appendChild(sam)
  mordor.appendChild(frodo)
}
itsDangerousToGoAlone()

// Part 11
var mordor = document.getElementsByTagName('Article')[2]
var mountDoom = document.getElementById('mount-doom')
function weWantsIt () {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
  var gollum = document.createElement('div')
  gollum.id = 'gollum'
  mordor.appendChild(gollum)
  var frodo = mordor.querySelector(':nth-child(4)')
  var ring = document.getElementById('the-ring')
  frodo.removeChild(ring)
  gollum.appendChild(ring)
  mountDoom.appendChild(gollum)
}
weWantsIt()

// Part 12

function thereAndBackAgain () {
  // remove Gollum and the Ring from the document
  // remove all the buddies from the document
  // Move all the hobbits back to the shire
  var gollum = document.getElementById('gollum')
  mountDoom.removeChild(gollum)
  rivendell.removeChild(theFellowship)
  theShire.appendChild(theFellowship)
  var frodo = mordor.querySelector(':nth-child(4)')
  var sam = mordor.querySelector(':nth-child(3)')
  mordor.removeChild(frodo)
  theShire.appendChild(frodo)
  mordor.removeChild(sam)
  theShire.appendChild(sam)
  var pippin = theFellowship.querySelector(':nth-child(5)')
  var merry = theFellowship.querySelector(':nth-child(6)')
  theFellowship.removeChild(merry)
  theShire.appendChild(merry)
  theFellowship.removeChild(pippin)
  theShire.appendChild(pippin)
  theShire.removeChild(theFellowship)
}
thereAndBackAgain()
