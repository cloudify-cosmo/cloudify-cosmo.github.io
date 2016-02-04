'use strict';

var max;
var cards = $('.card');
var cardsContent = $('.card-content');

function setCardsHeight(){
    max = 0;
    cardsContent.each(function(){
        var titleHeight = $(this).find('h5').height();
        var contentHeight = $(this).find('p').height();

        if (contentHeight + titleHeight > max){
            max = contentHeight + titleHeight;
        }
    });
    console.log(max);
    cards.height(max+60);
}

$(window).resize(function() {
    setTimeout(setCardsHeight,250);
});

setCardsHeight();