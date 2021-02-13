let chatOuvert = document.getElementById('chatOuvert')
let chatFerme = document.getElementById('chatFerme')

let body = document.getElementById('body')

let pop = document.getElementById("popSound")


function myFunction(){
  chatFerme.style.display = 'block'
  chatOuvert.style.display = 'none'
}

body.addEventListener('click', function(){
  chatFerme.style.display = 'none'
  chatOuvert.style.display = 'block'
  setTimeout(myFunction, 100)
  pop.play()
}
)
