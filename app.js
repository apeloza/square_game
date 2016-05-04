
//The following code waits for the document to be ready
$(document).ready(function(){

//Two functions are called. The first randomizes the box colours, and the second generates our initial colour question (see below for further explanation).

randomBoxes();
colorQ();

//An event listener is created that waits for a click on one of the boxes, and then calls a function that checks the user's answer.
$('.boxcontainer').on('click', '.box', checkAnswer);


});

//From here on all code is initialized before the page has fully loaded.
//First, variables are initialized that are used by the functions. numBoxes is used to allow the user to decide how many boxes they want.
var colorsArray = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow"];
var quizArray = [];
var scoreCounter = 0;
var numBoxes = prompt("How many boxes would you like?");

//This function checks the user's answer to see if it is correct.
function checkAnswer(){

//This checks to see if the user's answer has the same color-data as the one the question is currently holding onto.
if ($(this).data('color') == $('.Qcontainer').data('color')){

  //This line animates the box to display a rainbow animation
$(this).addClass('rainbowbox');

		//User is alerted of their correct answer, which also pauses the page
alert("Correct!");

    //The score is updated
    scoreCounter++;
    $('.counter').remove();
    $('.countercontainer').append('<p class="counter">Score: ' + scoreCounter + '</p>');

		//The game is started again
     quizArray = [];
    randomBoxes();
    colorQ();
} else {
	alert("Incorrect!");

	//This line turns off the event listener, ending the game
	$('.boxcontainer').off('click', '.box', checkAnswer);

}
}

//This function generates and applies a color-data property to the Qcontainer div, which is used to check the user's answer.
function colorQ (){

	//A random number is rolled from 0 to 1 less than the array of box colours.
var colorindex = randomNumber(0, quizArray.length - 1);

//The question container holds the correct answer as a data value
$('.Qcontainer').data('color', quizArray[colorindex]);

//A variable is initialized to keep the code simple to read, and then the question container displays text on the DOM prompting the user to click a box of the corresponding color.
var containercolor = $('.Qcontainer').data('color');
$('.question').remove();
$('.Qcontainer').append('<p class="question">Click on the ' + containercolor + ' box!</p>');


}

//This function is responsible for the random numbers generated which are in turn used for random colours.
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

//This function randomizes the box colours every time the page is loaded, using all possible css colour names.
function randomBoxes(){

//Any boxes on the screen are removed
$('.box').remove();

	//This for loop applies the color data and css properties to the boxes.
	for (var i = 1; i<=numBoxes; i++){

		//A random number is rolled each time
		var randomNum = randomNumber(0, colorsArray.length-1);

//Boxes are added, the number varies based on how long the loop is set to go for.
$('.boxcontainer').append('<div class="box' + i + ' box"></div>');

//The random number is then used to access the corresponding array slot, giving us a random color for both the data and css of each box.
$('.box' + i).data('color', colorsArray[randomNum]);
$('.box' + i).css('background-color', $('.box' + i).data('color'));

//quizArray stores our box colours so that the game does not ask for colours which are not present.
quizArray.push(colorsArray[randomNum]);
	}

//The boxes are sized to be squares on the screen.
var $box = $('.box');
  $box.height($box.width());
}
    
