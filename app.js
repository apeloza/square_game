$(document).ready(function(){

$('.boxcontainer').append('<div class="box1 box"></div><div class="box2 box"></div><div class="box3 box"></div><div class="box4 box"></div>')
randomBoxes();
colorQ();
$('.boxcontainer').on('click', '.box', checkAnswer);


});
	var colorsArray = ["red", "blue", "green", "peachpuff", "purple", "royalblue", "peru", "hotpink", "deepskyblue", "springgreen", "indigo", "chocolate", "silver", "tomato", "indianred", "aliceblue", "tan", "steelblue"];
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
var colorcode = randomNumber(0, colorsArray.length - 1);
var color = colorsArray[colorcode];
$('.Qcontainer').data('color', color);
var containercolor = $('.Qcontainer').data('color');
$('.Qcontainer').append('<p>' + containercolor);


}
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}
function randomBoxes(){
	for (var i = 1; i<=4; i++){
		var randomNum = randomNumber(0, colorsArray.length-1);
$('.box' + i).data('color', colorsArray[randomNum]);
console.log($('.box' + i).data('color'));
$('.box' + i).css('background-color', $('.box' + i).data('color'));
	}
colorsArray = [$('.box1').data('color'), $('.box2').data('color'), $('.box3').data('color'), $('.box4').data('color')]
}