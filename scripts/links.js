const baseURL = "https://kblomquist01.github.io/wdd230/";
const linksURL = "https://kblomquist01.github.io/wdd230/data/links.json";

const cards = document.querySelector('#cards');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data.lessons);
  }

  const displayLinks = (weeks) => {
        weeks.forEach((week) => {

            let lesson = document.createElement('li');
            lesson.innerHTML = `${week.lesson}. `

            week.links.forEach((link) => {
                lesson.innerHTML += `<a href=${link.url}> ${link.title}| </a>`
            })

            cards.appendChild(lesson);
        })
        
  }

  
getLinks();