const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.prophets)
    displayProphets(data.prophets);
  }

  const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
      
      let card = document.createElement('section');
      let fullName = document.createElement('p');
      let description = document.createElement('p')
      let portrait = document.createElement('img');
  
      
      fullName.textContent = `${prophet.name} ${prophet.lastname}`;

     description.innerHTML = `Date of Birth: ${prophet.birthdate}<br>Place of Birth: ${prophet.birthplace}`;
    
      portrait.setAttribute('src', prophet.imageurl);
      portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); 
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute('width', '340');
      portrait.setAttribute('height', '440');
  
      
      card.appendChild(fullName);
      card.appendChild(description);
      card.appendChild(portrait);
  
      cards.appendChild(card);
    }); 
  }
  
  getProphetData();