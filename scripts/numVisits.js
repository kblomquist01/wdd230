const visitsDisplay = document.querySelector(".numvisits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;
numVisits++;

if (numVisits !== 1) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
}


localStorage.setItem("numVisits-ls", numVisits);