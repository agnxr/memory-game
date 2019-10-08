var backgrounds = ["watermelon.svg", "banana.svg", "lime.svg", "lime.svg", "grapes.svg", "mangosteen.svg",  "banana.svg", "passion-fruit.svg", "watermelon.svg", "mangosteen.svg", "passion-fruit.svg", "grapes.svg"];
//losowanie ale zeby liczba par sie zgadzala
// mozliwosc zresetowania planszy
// czy kazda karta powinna byc osobnym elemenetem jquery - opakowac wszystkie karty w 1 obiekt
//mozna z tego zrobic gre w sapera albo kolo fortuny
var randomBg = backgrounds.sort(function(a, b){return 0.5 - Math.random()});

var cards = document.querySelectorAll(".card");
var oneVisible = false;
var turnCounter = 0; //licznik rund
var visibleIndex; //index karty aktualnie widocznej to compare if both bakcgorunds are the same
var lock = false;
var pairsLeft = 6;


cards.forEach(function(item, index) {
    item.addEventListener("click", function(){ 
        //alert(("ma index: " + index));
        if (!lock) {
            lock = true;
            var bg = `url("images/${randomBg[index]}")`;
            //var bg = `url("images/lime.svg")`;
            $(`#c${index}`).css('background-image', bg);
            //$(`#c${index}`).css('background-size', 'contain');
            $(`#c${index}`).addClass('active');
            //$(`#c${index}`).removeClass('card');

            if (!oneVisible) {
                oneVisible = true;
                visibleIndex = index;
                lock = false
            } else {
                backgrounds[visibleIndex] == backgrounds[index] ? setTimeout(function() {hide2cards(index, visibleIndex)}, 750) : setTimeout(function() {restore2cards(index, visibleIndex)}, 1000);

                turnCounter++;
                $('.score').html(`Turn counter: ${turnCounter}`);
                oneVisible = false;
            }
        }
    });
});


function hide2cards(firstItem, secondItem) {
    $(`#c${firstItem}`).css('visibility', 'hidden');
    $(`#c${secondItem}`).css('visibility', 'hidden');
    pairsLeft--;
    if(pairsLeft === 0){
        $('.board').html(`<h1>You win!<br>Done in ${turnCounter} turns </h1>`);
    }
    lock = false;
}

function restore2cards(firstItem, secondItem) {
    $(`#c${firstItem}`).css('background-image', 'url("images/question.svg")');
    $(`#c${firstItem}`).removeClass('active');
    $(`#c${secondItem}`).css('background-image', 'url("images/question.svg")');
    $(`#c${secondItem}`).removeClass('active');

    lock = false;
}

