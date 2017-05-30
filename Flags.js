var upgrades = {};
//Setting up the upgrades, feeding in values
//upgrades.A = {cost:, flag:false, amount:, type:'""', bText:'', ID:, func};
upgrades.starterUpgr = {cost:10, flag:false, amount:0.5, type:'"mPS"', bText:'Widen the crack in the box', ID:0, func:"mana=Math.floor(mana)"};
upgrades.unlockAbsorb = {cost:20, flag:false, amount:1, type:'"mHP"', bText:'Regain your Strength', ID:1, func:"absUnlock()"};

function checkFlags(obj) { //This function goes through all the flags, checking for avaliable upgrades and adding buttons to the page
	//The 'outer shell' of the recursive loop
	for (var key in obj) {
		//console.log(key + ': ' + obj[key]);
		if (obj[key] !== null && typeof obj[key] === "object") {
			checkHold = []; // Resetting the checking array, since push is used later
			checkFlags(obj[key]); // Recurse into children
		}
		else{
			checkHold = new Array(); //Holds all the temp values used for easier retreival
			for(var UP in obj){
				//alert(UP); // NAMES
				//alert(upgrades.testUpgrade[UP]); // VALUES
				checkHold.push(obj[UP]) // Adding the looping values to checkHold
				//alert(checkHold);
			}
			if(mana >= checkHold[0] && obj['flag'] == false) { //Passing checks, to make sure duplicates are made. Might add more flags/checks later
				obj['flag'] = true; //Prevents duplication

				var upBut = document.createElement("button"); //Setting child
				var upDiv = document.getElementById("upgButtons"); //Finding and setting parent
				var bName = document.createTextNode(checkHold[4]+" ("+checkHold[0]+" Mana)"); //Using the stuff stored in checkHold to create values for the button dynamically
				var bClick = "upgrade("+checkHold[3]+","+checkHold[0]+","+checkHold[2]+","+checkHold[5]+","+checkHold[6]+"); refreshLog();"
				var bID = checkHold[5]	
				var bValues = ["upgr"+bID, bClick]
				var bAttributes = ["id", "onclick"]
				
				upBut.appendChild(bName); //Adds text to the button
				for(x=0;x<bValues.length;x++){ //Loops through the values and attributes set earlier, setting the button's values
					upBut.setAttribute(bAttributes[x], bValues[x]);
				}
				upDiv.appendChild(upBut); //Adds the button to the page, at the end of the current list inside the div
			}
		}
	}
}