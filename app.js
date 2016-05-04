
//The following code waits for the document to be ready
$(document).ready(function(){
//Four boxes are added to the DOM. They do not currently have any colours.
$('.boxcontainer').append('<div class="box1 box"></div><div class="box2 box"></div><div class="box3 box"></div><div class="box4 box"></div>')

//These lines ensure that the boxes are always initialized as squares regardless of the size of the browser window.
var $box = $('.box');
	$box.height($box.width());

//Two functions are called. The first randomizes the box colours, and the second generates our initial colour question (see below for further explanation).
randomBoxes();
colorQ();

//An event listener is created that waits for a click on one of the four boxes, and then calls a function that checks the user's answer.
$('.boxcontainer').on('click', '.box', checkAnswer);


});

//From here on all code is initialized before the page has fully loaded.
//First, an array is initialized that contains every css color name. This is global because multiple functions use it.
	var colorsArray = ["AliceBlue","AntiqueWhite","Aqua","Aquamarine","Azure","Beige","Bisque","Black","BlanchedAlmond","Blue","BlueViolet","Brown","BurlyWood","CadetBlue","Chartreuse","Chocolate","Coral","CornflowerBlue","Cornsilk","Crimson","Cyan","DarkBlue","DarkCyan","DarkGoldenRod","DarkGray","DarkGrey","DarkGreen","DarkKhaki","DarkMagenta","DarkOliveGreen","Darkorange","DarkOrchid","DarkRed","DarkSalmon","DarkSeaGreen","DarkSlateBlue","DarkSlateGray","DarkSlateGrey","DarkTurquoise","DarkViolet","DeepPink","DeepSkyBlue","DimGray","DimGrey","DodgerBlue","FireBrick","FloralWhite","ForestGreen","Fuchsia","Gainsboro","GhostWhite","Gold","GoldenRod","Gray","Grey","Green","GreenYellow","HoneyDew","HotPink","IndianRed","Indigo","Ivory","Khaki","Lavender","LavenderBlush","LawnGreen","LemonChiffon","LightBlue","LightCoral","LightCyan","LightGoldenRodYellow","LightGray","LightGrey","LightGreen","LightPink","LightSalmon","LightSeaGreen","LightSkyBlue","LightSlateGray","LightSlateGrey","LightSteelBlue","LightYellow","Lime","LimeGreen","Linen","Magenta","Maroon","MediumAquaMarine","MediumBlue","MediumOrchid","MediumPurple","MediumSeaGreen","MediumSlateBlue","MediumSpringGreen","MediumTurquoise","MediumVioletRed","MidnightBlue","MintCream","MistyRose","Moccasin","NavajoWhite","Navy","OldLace","Olive","OliveDrab","Orange","OrangeRed","Orchid","PaleGoldenRod","PaleGreen","PaleTurquoise","PaleVioletRed","PapayaWhip","PeachPuff","Peru","Pink","Plum","PowderBlue","Purple","Red","RosyBrown","RoyalBlue","SaddleBrown","Salmon","SandyBrown","SeaGreen","SeaShell","Sienna","Silver","SkyBlue","SlateBlue","SlateGray","SlateGrey","Snow","SpringGreen","SteelBlue","Tan","Teal","Thistle","Tomato","Turquoise","Violet","Wheat","White","WhiteSmoke","Yellow","YellowGreen"];

//This function checks the user's answer to see if it is correct.
function checkAnswer(){

//This checks to see if the user's answer has the same color-data as the one the question is currently holding onto.
if ($(this).data('color') == $('.Qcontainer').data('color')){
		
		//User is alerted of their correct answer, which also pauses the page
		alert("Correct!");
		//The page is reloaded to fetch new colours for the user.
	document.location.reload(true);
} else {
	alert("Incorrect!");

	//This line turns off the event listener, ending the game
	$('.boxcontainer').off('click', '.box', checkAnswer);

}
}

//This function generates and applies a color-data property to the Qcontainer div, which is used to check the user's answer.
function colorQ (){

	//A random number is rolled from 0 to 1 less than the array of possible colours. Note that because randomBoxes is called first, the colorsArray can only have values that match the color-data of the existing boxes (e.g. you cannot be asked to click a green box when there is no green box)
var colorindex = randomNumber(0, colorsArray.length - 1);

//The question container holds the correct answer as a data value
$('.Qcontainer').data('color', colorsArray[colorindex]);

//A variable is initialized to keep the code simple to read, and then the question container displays text on the DOM prompting the user to click a box of the corresponding color.
var containercolor = $('.Qcontainer').data('color');
$('.Qcontainer').append('<p class="question">' + containercolor + '</p>');


}

//This function is responsible for the random numbers generated which are in turn used for random colours.
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

//This function randomizes the box colours every time the page is loaded, using all possible css colour names.
function randomBoxes(){

	//This for loop applies the color data and css properties to the boxes.
	for (var i = 1; i<=4; i++){

		//A random number is rolled each time
		var randomNum = randomNumber(0, colorsArray.length-1);

		//The random number is then used to access the corresponding array slot, giving us a random color for both the data and css of each box.
$('.box' + i).data('color', colorsArray[randomNum]);
$('.box' + i).css('background-color', $('.box' + i).data('color'));
	}

	//Finally, the colorsArray that contained all the possible css colour names is re-written to only contain the colours that the boxes use. This is to ensure that the user is never asked for a colour that isn't present.
colorsArray = [$('.box1').data('color'), $('.box2').data('color'), $('.box3').data('color'), $('.box4').data('color')]
}