const main = document.querySelector("body");
const sections = document.querySelectorAll('section');
const checkbox = document.querySelector(".grid input[type='checkbox']");

function handleSwitch() {
    const isChecked = checkbox.checked;

    if (isChecked) {
        sections.forEach(section => {
            section.classList.toggle('gridView');
        });
    } else {
        sections.forEach(section => {
            section.classList.toggle('gridView');
        });
    }
}

// Adding event listener to the checkbox
checkbox.addEventListener('change', handleSwitch);