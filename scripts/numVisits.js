const visitsDisplay = document.querySelector(".numvisits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit. 🥳 Welcome!`;
    numVistits = 1;
}

numVisits++;
localStorage.setItem("numVisits-ls", numVisits);