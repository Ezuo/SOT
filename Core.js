var tick = setInterval(iTick, 1000); //Starts the tick every second

mana = 30; 
mPS = 0.5; //Mana Per Second
manaAbs = 0;

mHP = null;
hP = null;
hpRegen = 0.1;
hpRegenSpeed = 0.01
maxLevel = false;
infStop = true;

gold = null;

function iTick(){ //The tick, runs every second
	mana += mPS; //Adds Mana Per Second to Mana
	if(mHP && hP<mHP){
		hP+=hpRegen;
	}
	
	if(mHP && hP>mHP){
		hP = mHP;
	}
	
	updateStatus();
	checkFlags(upgrades);
}

function cTick(){
	updateStatus();
}

function updateStatus(){ //Updates the frontend that the user sees. Mana, MPS, HP, etc.
	var stringMe = [Round(hP,2),Round(mHP,2),mana,mPS,];
	var verboseString = [" | HP: ","/"," | Mana: "," | Mana Per Second: "];
	var buffer = "";
	
	for(x=0;x<stringMe.length;x++){
		if(stringMe[x] !== null){
			buffer += verboseString[x];
			buffer += JSON.stringify(stringMe[x]);
		}
	}	
	document.getElementById("statusBar").innerHTML = buffer;
}

function upgrade(type, cost, num, bID, func){ //Upgrade funcion uses values in the buttons to add stuff to the player.
	if(mana >= cost){
		window[type] += num
		//alert(window[type]);
		//alert(window.type);
		//alert(mPS);
		mana -= cost;
		updateStatus();
		//if(del){
			var delMe = "upgr"+bID;
			var delElement = document.getElementById(delMe);
			delElement.parentNode.removeChild(delElement); 
		//}
		
		var logElement = document.getElementById("logBox");
		var logAdd = document.createElement("p")
		var logText = document.createTextNode(consoleUp[bID]);
		
		logAdd.setAttribute("id", "log"+(bID+1));
		logAdd.appendChild(logText);
		logElement.insertBefore(logAdd, logElement.firstElementChild);
		
		eval(func);
		
	}
}
function absorb(){
	var maxMana = 100000000;
if(mHP==1){Narr(0);}
	if(manaAbs>maxMana && maxLevel==false){
		maxLevel=true;
		manaAbs=maxMana;
	}
	if(manaAbs<maxMana && maxLevel==false){ // If current absorbed is less than the max
		if(mana>maxMana-manaAbs){ // If adding mana to the abs would make it go over the max
			var diff = maxMana-manaAbs;
			
			mana-=diff;
			manaAbs+=diff;
		}
		else{
			manaAbs+=mana;
			mana=0;
		}
	}
	divmod = manaAbs/maxMana
	console.log(divmod);
	if(divmod!==1){
		mHP = (1+999999*(divmod))/10*(1-(divmod));
	}
	else{
		if(infStop==true){
			mHP=1000000
		}
			else{
				Narr(1)
				mHP = (1+999999*(divmod))/(1-(divmod));
				
				var delElement = document.getElementById("absorbBut");
				delElement.parentNode.removeChild(delElement);
			}
	}
	
	hpRegen = mHP*hpRegenSpeed;
	updateStatus();
}


function test1(){ //Dev function. For testing.
	mana+=10000000;
	
	
	updateStatus();
}

function test2(){
	infStop = false;
	console.log("A god is you");
	updateStatus();
}