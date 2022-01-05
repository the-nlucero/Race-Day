//Asiigns runners a random race number
let raceNumber = Math.floor(Math.random() * 1000);

//Assigns a True Boolean Value (Yes) if Racers Registered Early
let earlyReg = false; 

//Assigns a new potential runner (randomly)
let RunAge = Math.floor(Math.random() * 100);

//Checks if contestant is older than the age 18
//Checks if contestant registered early
//Gives contestant corresponding number and start time
if(RunAge > 18 && earlyReg === true)
{
console.log(`The runners age is ${RunAge}. \nTherefore, this is Adult contestant.\nThis contestant's status claims they have registered early`);
raceNumber += 1000;
console.log(`Contestanst's race number is: ${raceNumber}`);
console.log(`The Race for this contestant will start at: 9:30 A.M `);
}

//Checks if contestant is older than the age 18 
//Checks if contestant DID NOT register early
//Gives contestant corresponding number and start time
else if(RunAge > 18 && earlyReg === false)
{
console.log(`The runners age is ${RunAge}. \nTherefore, this is Adult contestant.\nThis contestant's status claims they have NOT registered early`);
raceNumber += 1000;
console.log(`Contestanst's race number is: ${raceNumber}`);
console.log(`The Race for this contestant will start at: 11:00 A.M `);
}

//Checks if contestant is younger than the age 18
//Gives contestant corresponding number and start time
else if  (RunAge < 18 && RunAge != 0)
{
console.log(`The runners age is ${RunAge}. \nTherefore, this is a youth contestant.`);
console.log(`Contestanst's race number is: ${raceNumber}`);
console.log(`The Race for this contestant will start at: 12:30 A.M `);
}

//Checks if contestant entered age 0
else if (RunAge == 0)
{
  console.log(`The runners age is: ${RunAge}.\nThis contestant has entered an invalid age and cannot patriciapte until their age is clarified.`);
}

//Checks if contestant is exactly the age 18
//Gives contestant corresponding number and start time
else
{
console.log(`The runners age is ${RunAge}. \nTherefore, this is Adult contestant.`);
raceNumber += 1000;
console.log(`Contestanst's race number is: ${raceNumber}`);
console.log(`The Race for this contestant will start at: 7:00 A.M `);
}


