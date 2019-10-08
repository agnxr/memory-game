var backgrounds = ["watermelon.svg", "banana.svg", "lime.svg", "lime.svg", "grapes.svg", "mangosteen.svg",  "banana.svg", "passion-fruit.svg", "watermelon.svg", "mangosteen.svg", "passion-fruit.svg", "grapes.svg"];


var cards = document.querySelectorAll(".card");
var oneVisible = false;
var turnCounter = 0; //licznik rund
var visibleIndex; //index karty aktualnie widocznej to compare if both bakcgorunds are the same
var lock = false;

cards.forEach(function(item, index) {
    item.addEventListener("click", function(){ 
        //alert(("ma index: " + index));
        var bg = `url("images/${backgrounds[index]}")`;
        //var bg = `url("images/lime.svg")`;
        $(`#c${index}`).css('background-image', bg);
        //$(`#c${index}`).css('background-size', 'contain');
        $(`#c${index}`).addClass('active');
        //$(`#c${index}`).removeClass('card');

        if (!oneVisible && !lock) {
            oneVisible = true;
            visibleIndex = index;
            lock = false
        } else {
            backgrounds[visibleIndex] == backgrounds[index] ? setTimeout(function() {hide2cards(index, visibleIndex)}, 750) : setTimeout(function() {restore2cards(index, visibleIndex)}, 1000);

            turnCounter++;
            $('.score').html(`Turn counter: ${turnCounter}`);
            oneVisible = false;
        }
    });
});


function hide2cards(firstItem, secondItem) {
    $(`#c${firstItem}`).css('visibility', 'hidden');
    $(`#c${secondItem}`).css('visibility', 'hidden');
    lock = false;
}

function restore2cards(firstItem, secondItem) {
    $(`#c${firstItem}`).css('background-image', 'url("images/question.svg")');
    $(`#c${firstItem}`).removeClass('active');
    $(`#c${secondItem}`).css('background-image', 'url("images/question.svg")');
    $(`#c${secondItem}`).removeClass('active');

    lock = false;
}

