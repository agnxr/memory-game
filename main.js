var backgrounds = ["watermelon.svg", "banana.svg", "lime.svg", "lime.svg", "grapes.svg", "mangosteen.svg",  "banana.svg", "passion-fruit.svg", "watermelon.svg", "mangosteen.svg", "passion-fruit.svg", "grapes.svg"];


var cards = document.querySelectorAll(".card");

cards.forEach(function(item, index) {
    item.addEventListener("click", function(){ 
        alert(("ma index: " + index));
        var bg = `url(img/${backgrounds[index]})`;
    });
});

var oneVisible = false;
var turnCounter = 0; //licznik rund

/*
fruits.forEach(myFunction);

function myFunction(item, index) {
  document.getElementById("demo").innerHTML += index + ":" + item + "<br>";
}

var inputs = document.querySelectorAll("input[type=text]")
for (i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('click', function() {
    this.style.width = "500px";
  });
}

c0.addEventListener("click", function(){ revealCard(0)});
c1.addEventListener("click", function(){ revealCard(1)});

function revealCard(nr) {
    alert(nr);
}
*/
