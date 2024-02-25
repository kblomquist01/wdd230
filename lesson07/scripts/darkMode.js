
const main = document.querySelector("body");
const sections = document.querySelectorAll('.box');
const checkbox = document.querySelector(".switch input[type='checkbox']");

function handleSwitch() {
    const isChecked = checkbox.checked;

    if (isChecked) {
        main.style.background = "#000";
        main.style.color = "#fff";
        sections.forEach(section => {
            section.classList.toggle('darkMode');
        });
    } else {
        main.style.background = "#eee";
        main.style.color = "#000";
        
        sections.forEach(section => {
            section.classList.toggle('darkMode');
        });
    }
}

// Adding event listener to the checkbox
checkbox.addEventListener('change', handleSwitch);