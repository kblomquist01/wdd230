
const section = document.querySelectorAll('section');
const checkboxy = document.querySelector(".gridCheckBox input[type='checkbox']");

function handleSwitch() {
    const isChecked = checkboxy.checked;

    if (isChecked) {
        section.forEach(section => {
            section.classList.toggle('gridView');
        });
    } else {
        section.forEach(section => {
            section.classList.toggle('gridView');
        });
    }
}

// Adding event listener to the checkbox
checkboxy.addEventListener('change', handleSwitch);