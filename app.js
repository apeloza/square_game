$(document).ready(function(){
$('.boxcontainer').append('<div data-color="red" class="red box"></div><div data-color="blue" class="blue box"></div><div data-color="rainbow" class="rainbow box"></div><div data-color="peachpuff" class="peachpuff box"></div>')

colorQ();
$('.boxcontainer').on('click', '.box', checkAnswer);


});

function checkAnswer(){

if ($(this).data('color') == $('.Qcontainer').data('color')){
		$('.Acontainer').append('Correct!</p>');
	colorQ();
} else {
	$('.Acontainer').append('Incorrect!</p>');
	$('.boxcontainer').off('click', '.box', checkAnswer);

}
}
function colorQ (){
	var array = ["red", "blue", "rainbow", "peachpuff"];
var colorcode = randomNumber(0, array.length - 1);
var color = array[colorcode];
$('.Qcontainer').data('color', color);
var containercolor = $('.Qcontainer').data('color');
$('.Qcontainer').append('<p>' + containercolor);


}
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}