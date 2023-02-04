const mainPage = document.getElementById('mainPage');
const coffeeMenuPage = document.getElementById('coffeePage');
const icecoffeeMenuPage = document.getElementById('icecoffeePage');
const milkshakeMenuPage = document.getElementById('milkShakePage');
const TeaMenuPage = document.getElementById('teaPage');
const foodMenuPage = document.getElementById('foodPage');
const dessertMenuPage = document.getElementById('dessertPage');
const pages = document.querySelectorAll('.imgpage')


let pageOnBoard = 0

document.addEventListener('click', (e) => {
let idNumber = e.target.id


if (idNumber >0) {
  mainPage.classList.add("displayNone");

  for (i=0; i<pages.length; i++) {
  pages[i].classList.add('displayNone')
  }
  
    if ( idNumber == 1) coffeeMenuPage.classList.remove("displayNone");
    else if ( idNumber == 2) icecoffeeMenuPage.classList.remove("displayNone");
    else if ( idNumber == 3) TeaMenuPage.classList.remove("displayNone");
    else if ( idNumber == 4) milkshakeMenuPage.classList.remove("displayNone");
    else if ( idNumber == 5) dessertMenuPage.classList.remove("displayNone");
    else if ( idNumber == 6) foodMenuPage.classList.remove("displayNone");

}

})
