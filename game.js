/* Name = Rupak Shrestha 
Student ID =16418521
Web-Develop Assignment2 16418521*/

//Global variable for storing the horses from id.
var horse1, horse2, horse3, horse4;
//Global vaiable for storing the horses in result.
var element11, element12, element13, element14;
// Global variable for storing the intervals
var interval,a , intervalColor, intervalhorse;
var totalAmount = 100;
var lap;
var textNodeD;

var lapn;
//Global variable for storing the winner.
var horseArray = [];

//This function is called after the restart button is clicked.
function Restart(){
	//Changes the position of the horses
	horse1.style.left = 20+ 'vw';
	horse2.style.left = 20+ 'vw';
	horse3.style.left = 20+ 'vw';
	horse4.style.left = 20+ 'vw';
	//Removing the child from the display id;
	var element = document.getElementById('display');
	element.removeChild(textNodeD);
	// making the array null
	horseArray.length = 0;
	//calling the clicked function
	clicked();
}

function detectHorse(){
//getting the element from id and changing the class name from the array list.
    element11.className = horseArray[0];
    element12.className = horseArray[1];
    element13.className = horseArray[2];
    element14.className = horseArray[3];	
	//getting the value from the select option of horsebet.
	var bet = document.getElementById('bethorse').value;
	//checking the condition of winner
	if(bet == horseArray[0]){
		totalAmount += 2 * a;
		var total = totalAmount.toString();
		var element = document.getElementById('funds');
		//changing the value of the element.
		element.firstChild.nodeValue = total;
	
		// applying the sound using Audio function.
		var sound = new Audio();
		sound.src = "sound/win.mp3";// storing the path of the sound file
		sound.play();
	
		var element = document.getElementById('display');
		//Creating the textNode for display the text
		textNodeD = document.createTextNode("You Won The Bet !!!");
		//applying the text in the element.
		element.appendChild(textNodeD);
		//clearing the interval
		clearInterval(intervalColor);
		clearInterval(intervalhorse);
		//creating the border of the track.
		var element = document.getElementsByClassName('inner')[0];
		element.style.border = 5+'px'+' '+ 'dashed'+ ' '+ 'yellow';
		var element = document.getElementsByClassName('inner')[1];
		element.style.border = 5+'px'+' '+ 'dashed'+ ' '+ 'yellow';
	
	}
	// this steps if the horses looses the bet.
	else{
		// the bet amount is deducted.
		totalAmount = totalAmount -a;
		var total = totalAmount.toString();
		var element = document.getElementById('funds');
		element.firstChild.nodeValue = total;
	
		var sound = new Audio();
		sound.src = "sound/loose.mp3";
		sound.play();
		
		var element = document.getElementById('display');
		textNodeD = document.createTextNode("You Loose the Bet");
		element.appendChild(textNodeD);
		clearInterval(intervalColor);
		clearInterval(intervalhorse);

		var element = document.getElementsByClassName('inner')[0];
		element.style.border = 5+'px'+' '+ 'dashed'+ ' '+ 'yellow';
		var element = document.getElementsByClassName('inner')[1];
		element.style.border = 5+'px'+' '+ 'dashed'+ ' '+ 'yellow';
	} 
	//  start button is changed to Restart button.
    var element = document.getElementById('start');
    element.firstChild.nodeValue = 'Restart';
 	// moves to Restart function if button is clicked
    element.addEventListener('click', Restart);
}

// this function runs on the finising line.
function moveright2(x,y){
	//closure interval is used.
	var interval = setInterval(function (){
	x.className = 'horse runRight rider body';
	var positionLeft = x.offsetLeft;
		
	// Below code generated the random number and assign to speed for horse
	x.style.left = positionLeft+ Math.ceil(Math.random()*10) + 'px';
	x.className = 'horse runRight rider body';
	if(x.offsetLeft>innerWidth*0.25){// measures the screen size from the left
		x.className = 'horse standRight rider body';// name of class is changed
		clearInterval(interval);// interval is cleared.
	}
	//The below codes identifies the position of the horse.
	if(x ==horse1 && x.offsetLeft>innerWidth*0.25){
 	 	horseArray.push('horse1'); }	
	// the value is pushed to global array if the condition is matched
 	if(x ==horse2 && x.offsetLeft>innerWidth*0.25){
 		 horseArray.push('horse2');}		

 	if(x ==horse3 && x.offsetLeft>innerWidth*0.25){
 		 horseArray.push('horse3'); }	

 	if(x ==horse4 && x.offsetLeft>innerWidth*0.25){
 	 	horseArray.push('horse4');}
	
	if(horse1.offsetLeft>innerWidth*0.25 && horse2.offsetLeft>innerWidth*0.25 && horse3.offsetLeft>innerWidth*0.25 && horse4.offsetLeft>innerWidth*0.25){
		console.log(horseArray);
		detectHorse();
	}}, 30);
}
/*this is the functions with the parameters which is called 
when the horse needs to moveDown*/
function moveDown(x,y){
	if(x==horse1)
		y(horse1, 0.49);
	else if(x == horse2)
		y(horse2, 0.47);
	else if(x == horse3)
		y(horse3, 0.45);
	else if(x == horse4)
		y(horse4, 0.43);
}
/*this is the functions with the parameters which is called 
when the horse needs to move from middle*/
function moveEdge(x,y){
	if(x==horse1)
		y(horse1, 0.850);
	else if(x == horse2)
		y(horse2, 0.865);
	else if(x == horse3)
		y(horse3, 0.835);
	else if(x == horse4)
		y(horse4, 0.82);
}

/*this is the functions with the parameters which is called 
when the horse needs to move corner*/
function moveCor(x,y){
	if(x==horse1)
		y(horse1, 0.020);
	else if(x==horse2)
		y(horse2, 0.040);
	else if(x==horse3)
		y(horse3, 0.060);
	else if(x==horse4)
		y(horse4, 0.080);
}
/*this is the functions with the parameters which is called 
when the horse needs to movefrom corner*/
function moveCor2(x,y){
	if(x==horse1)
		y(horse1, 0.060);
	else if(x==horse2)
		y(horse2, 0.080);
	else if(x==horse3)
		y(horse3, 0.040);
	else if(x==horse4)
		y(horse4, 0.020);
}
// functions for moving top left.
function moveup1(x, y){
lap = lap-1;
	clearInterval(interval);
	var interval = setInterval(function (){
	x.className = 'horse runUp rider body';
	var positionTop = x.offsetTop;
	x.style.top = positionTop - Math.ceil(Math.random()*5) + 'px';
	x.className = 'horse runUp rider body';
	if(x.offsetTop<innerHeight*y){
		clearInterval(interval);
		if(lap > 1)
		moveEdge(x, moveHorse);
		else
		moveEdge(x, moveright2);
	}},25);}
// function for moving in center track toward left.
function moveleft1(x, y){
	clearInterval(interval);
	//closure is used instead of global interval variable.
		var interval = setInterval(function (){
		x.className = 'horse runLeft rider body';
		//position of horse is taken through offset.
		var positionLeft = x.offsetLeft;
		x.style.left = positionLeft - Math.ceil(Math.random()*5) + 'px';
		x.className = 'horse runLeft rider body';
		if(x.offsetLeft<innerWidth*y){//widht of screen is measured through innerWidth.
			clearInterval(interval);
			/*two parameter are send in moveCor function one is horse and another is
			name f function*/
			moveCor(x, moveup1);
		}},15);}

// function for moving in top right toward the center track.
function moveup(x, y){
	clearInterval(interval);
	var interval = setInterval(function (){
	x.className = 'horse runUp rider body';
	var positionTop = x.offsetTop;
	x.style.top = positionTop - Math.ceil(Math.random()*5) + 'px';
	x.className = 'horse runUp rider body';
	if(x.offsetTop<innerHeight*y){
		clearInterval(interval);
		moveCor2(x, moveleft1);
	}},20);}

// function for moving the horse in bottom track toward right.
function moveright1(x,y){
	var interval = setInterval(function (){
	var positionLeft = x.offsetLeft;
	x.style.left = positionLeft+ Math.ceil(Math.random()*5) + 'px';
	x.className = 'horse runRight rider body';
	if(x.offsetLeft>innerWidth*y){
		clearInterval(interval);
		moveDown(x, moveup);}
	}, 15);
}
//function for moving the horse in bottom left position toward bottom track.
function movedown1(x, y){
	clearInterval(interval);
	var interval = setInterval(function (){
	x.className = 'horse runDown rider body';
	var positionTop = x.offsetTop;
	x.style.top = positionTop+ Math.ceil(Math.random()*5) + 'px';
	x.className = 'horse runDown rider body';
	if(x.offsetTop>innerHeight*y){
		clearInterval(interval);
		moveEdge(x, moveright1);}
	},25);}
//function for moving the horse in toward left.
function moveleft(x, y){
	clearInterval(interval);
	var interval = setInterval(function (){
	x.className = 'horse runLeft rider body';
	var positionLeft = x.offsetLeft;
	x.style.left = positionLeft - Math.ceil(Math.random()*5) + 'px';
	x.className = 'horse runLeft rider body';
	if(x.offsetLeft<innerWidth*y){
		clearInterval(interval);
		moveEdge(x, movedown1);
	}},15);
}
// function for moving the horse in bottom right.
function movedown(x, y){
	clearInterval(interval);
	var interval1 = setInterval(function (){
	x.className = 'horse runDown rider body';
	var positionTop = x.offsetTop;
	x.style.top = positionTop+ Math.ceil(Math.random()*5) + 'px';
	x.className = 'horse runDown rider body';
	if(x.offsetTop>innerHeight*y){
		clearInterval(interval1);
		moveCor2(x, moveleft);
	}},20);
}
// This function runs the horse toward top right.
function moveHorse(x,y){
	//Closure is used to execute each horse
	var interval = setInterval(function (){
	var positionLeft = x.offsetLeft;
	x.style.left = positionLeft+ Math.ceil(Math.random()*5) + 'px';
	x.className = 'horse runRight rider body';
	if(x.offsetLeft>innerWidth*y ){
		clearInterval(interval);
		moveDown(x, movedown);}
	}, 15);}

//This function is called after the condition is matched.
function runFunction(){
	var element = document.getElementById('start');
	element.removeEventListener('click', Restart);
	//storing the audio function in variable.
	var sound = new Audio();
	//path for the Sound that appears when start button is clicked.
	sound.src = "sound/sound.mp3";
	sound.play();// runs the function
	// interval for selecting the color.
	intervalColor = setInterval(color, 250);
	//storing the parameter in moveHorse function.
	moveHorse(horse1, 0.845);
	moveHorse(horse2, 0.885);
	moveHorse(horse3, 0.865);
	moveHorse(horse4, 0.90);
	intervalhorse = setInterval( function(){
	//horse racing sound 
	var sound = new Audio();
	sound.src = "sound/horse1.mp3";
	sound.play();
	},500);
}

// This function is called after click event.
function clicked(){
	//getting the value from amount and storing it in variable
	var inputV = document.getElementById('amount'); 
	//getting the value form laps//
	var laps = document.getElementById('inp_lab');
	//converting string value to integer
	a = parseInt(inputV.value);
	lapn = parseInt(laps.value);
	//checking the condition to run the program
	if(a>0 && a<=totalAmount){
		if(lapn>0 && lapn<4){
			lap=lapn*4-2;
			var element = document.getElementById('start');
			// changing the background color.
			element.style.backgroundColor = 'red';
			// removing the event listener.
			element.removeEventListener('click', clicked);
			element.removeEventListener('click', Restart);
			runFunction();
		}

		else{
			// alerting the message is lap condition is not matched.
			alert("Only 1, 2 and 3 are valid number for Laps");
		}
	}
	else if(totalAmount == 0)
		alert('You Do Not Have Enough Amount');
	else
		alert('Enter the correct amount');//appears alert if amount in not matched.
}

function color(){
	// provided the random color using the array and random function for the border.
	var color =  new Array("red","yellow", "green", "orange", "white") ;
	var rand = Math.floor(Math.random()*7);
	var element = document.getElementsByClassName('inner')[0];
	element.style.border = 5+'px'+' '+ 'dashed'+ ' '+ color[rand];
	var element = document.getElementsByClassName('inner')[1];
	element.style.border = 5+'px'+' '+ 'dashed'+ ' '+ color[rand];
}

function myFunction(){
	// different horses are get by ID and stored in the unique global variable
	horse1 = document.getElementById('horse1');
	horse2 = document.getElementById('horse2');
	horse3 = document.getElementById('horse3');
	horse4 = document.getElementById('horse4');
 	//Storing the list of horses of result in variable
 	element11 = document.getElementsByClassName('horse1')[0];
    element12 = document.getElementsByClassName('horse2')[0];
    element13 = document.getElementsByClassName('horse3')[0];
    element14 = document.getElementsByClassName('horse4')[0]; 
	// Get the element by id and perform the Event
	var element = document.getElementById('start');
	//clicked function is called after clicked event
	element.addEventListener('click',clicked);
}

//The below code will be run first after the page is loaded.
document.addEventListener('DOMContentLoaded', myFunction);


