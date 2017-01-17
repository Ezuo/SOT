function absUnlock(){
	var upBut = document.createElement("button"); //Setting child
	var upDiv = document.getElementById("upgButtons"); //Finding and setting parent
	var bName = document.createTextNode("Absorb All Avaliable Mana");
	var bClick = "absorb()";
	var bID = "absorbBut";
	var bValues = [bID, bClick];
	var bAttributes = ["id", "onclick"];
	
	upBut.appendChild(bName); //Adds text to the button
	for(x=0;x<bValues.length;x++){ //Loops through the values and attributes set earlier, setting the button's values
		upBut.setAttribute(bAttributes[x], bValues[x]);
	}
	upDiv.insertBefore(upBut, upDiv.firstElementChild); //Adds the button to the page, at the start of the current list inside the div
}

function Round(num, place){
	var div = 1;
	for(x=0;x<place;x++){
		div*=10;
	}
	
	roundVar = Math.floor(num*div)/div;
	
	return roundVar;
}

function Narr(x){
	var logElement = document.getElementById("logBox");
		var logAdd = document.createElement("p")
		var logText = document.createTextNode(consoleMisc[x]);
		
		logAdd.setAttribute("id", "nar"+(x+1));
		logAdd.appendChild(logText);
		logElement.insertBefore(logAdd, logElement.firstElementChild);
	
}