const msToDays = 84600000;
const visitsDisplay = document.querySelector(".numvisits");

let dayLastVisited = Number(window.localStorage.getItem("dayLastVisited")) || 0;
console.log(dayLastVisited);
console.log(Date.now());
let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
numVisits++;

let daysleft = (Date.now() - dayLastVisited)/ msToDays;
console.log(daysleft);

if (numVisits == 1) {
	visitsDisplay.textContent = "Welcome! Let us know if you have any questions.";
} else if(daysleft.toFixed(0) < 1){
	visitsDisplay.textContent = "Back so soon! Awesome!";
}
else{
    visitsDisplay.textContent = "You last visited" + daysleft.toFixed(0) + "days ago.";
}


localStorage.setItem("numVisits-ls", numVisits);
localStorage.setItem("dayLastVisited", Date.now());

// const visitsDisplay = document.querySelector(".numvisits");

// let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
// numVisits++;

// if (numVisits !== 1) {
// 	visitsDisplay.textContent = numVisits;
// } else {
// 	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
// }


// localStorage.setItem("numVisits-ls", numVisits);