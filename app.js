$(document).ready(function(){
$('.boxcontainer').append('<div data-color="red" class="red box"></div><div data-color="blue" class="blue box"></div><div data-color="green" class="green box"></div><div data-color="peachpuff" class="peachpuff box"></div>')

colorQ();
$('.boxcontainer').on('click', '.box', checkAnswer);


});

function checkAnswer(){

if ($(this).data('color') == $('.Qcontainer').data('color')){
	$('.Acontainer').append('<p>Correct!</p>');
	colorQ();
} else {
	$('.Acontainer').append('<p>Incorrect!</p>');
	$('.boxcontainer').off('click', '.box', checkAnswer);

}
}
function colorQ (){
	var array = ["red", "blue", "green", "peachpuff"];
var colorcode = randomNumber(0, array.length - 1);
var color = array[colorcode];
$('.Qcontainer').data('color', color);
var containercolor = $('.Qcontainer').data('color');
$('.Qcontainer').append('<p>' + containercolor + '</p>');


}
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}