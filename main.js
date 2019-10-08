var backgrounds = ["watermelon.svg", "banana.svg", "lime.svg", "lime.svg", "grapes.svg", "mangosteen.svg",  "banana.svg", "passion-fruit.svg", "watermelon.svg", "mangosteen.svg", "passion-fruit.svg", "grapes.svg"];


var cards = document.querySelectorAll(".card");
var oneVisible = false;
var turnCounter = 0; //licznik rund
var visibleIndex; //index karty aktualnie widocznej to compare if both bakcgorunds are the same

cards.forEach(function(item, index) {
    item.addEventListener("click", function(){ 
        //alert(("ma index: " + index));
        var bg = `url("images/${backgrounds[index]}")`;
        //var bg = `url("images/lime.svg")`;
        $(`#c${index}`).css('background-image', bg);
        //$(`#c${index}`).css('background-size', 'contain');
        $(`#c${index}`).addClass('active');
        //$(`#c${index}`).removeClass('card');

        if (!oneVisible) {
            oneVisible = true;
            visibleIndex = index;
        } else {
            backgrounds[visibleIndex] == backgrounds[index] ? setTimeout(function() {hide2cards(index, visibleIndex)}, 750) : alert("pudło");

            turnCounter++;
            $('.score').html(`Turn counter: ${turnCounter}`);
            oneVisible = false;
        }
    });
});


function hide2cards(firstItem, secondItem) {
    $(`#c${firstItem}`).css('opacity', '0');
    $(`#c${secondItem}`).css('opacity', '0');
}
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
