const baseURL = "https://kblomquist01.github.io/wdd230/";
const linksURL = "https://kblomquist01.github.io/wdd230/chamber/data/links.json";

const cards = document.querySelector('#cards');

async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    console.log(data);
    displayLinks(data.members);
  }

  const displayLinks = (members) => {
    members.forEach((member) => {
      
        let card = document.createElement('section');
        let fullName = document.createElement('p');
        let description = document.createElement('p')
        let portrait = document.createElement('img');
    
        
        fullName.textContent = `${member.name}`;
  
       description.innerHTML = `address: ${member.address}<br>contact: ${member.phoneNumber}\
                                <br>URL: ${member.website}<br>${member.icon}<br>Membership Level: ${member.membership}`;
    
        
        card.appendChild(fullName);
        card.appendChild(description);
        cards.appendChild(card);
      }); 
        
  }

  
getLinks();