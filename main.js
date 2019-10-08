const backgrounds = ["watermelon.svg", "banana.svg", "lime.svg", "lime.svg", "grapes.svg", "mangosteen.svg",  "banana.svg", "passion-fruit.svg", "watermelon.svg", "mangosteen.svg", "passion-fruit.svg", "grapes.svg"];
const randomBg = backgrounds.sort(function(a, b){return 0.5 - Math.random()});
const cards = document.querySelectorAll(".card");

let oneVisible = false;
let turnCounter = 0; //licznik rund
let visibleIndex; //index of visible card to compare if both backgrounds are the same
let lock = false;
let pairsLeft = 6;

cards.forEach(function(item, index) {
    item.addEventListener("click", function(){ 
        if (!lock) {
            lock = true;
            var bg = `url("images/${randomBg[index]}")`;
            $(item).css('background-image', bg);
            $(item).addClass('active');

            if (!oneVisible) {
                oneVisible = true;
                visibleIndex = index;
                lock = false
            } else {
                backgrounds[visibleIndex] == backgrounds[index] ? setTimeout(function() { hide2cards(index, visibleIndex) }, 750) : setTimeout(function() {restore2cards(index, visibleIndex)}, 1000);

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
        $('.board').html(`<h1>You win!<br> Done in ${turnCounter} turns </h1>`);
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

