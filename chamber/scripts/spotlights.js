const baseURL = "https://kblomquist01.github.io/wdd230/";
const linksURL = "https://kblomquist01.github.io/wdd230/chamber/data/members.json";
let spotlights = new Array

const spotlightCards = document.querySelector('#spotlight');

async function getSpotlight() {
    const response = await fetch(linksURL);
    const data = await response.json();
    //console.log(data);
    setSpotlight(data.members);
    displaySpotlight(spotlights)
  }

  setSpotlight = (members) => {
    members.forEach((member) => {
        

        if(member.membership == "silver" || member.membership == "gold"){
            spotlights.push(member)
            //console.log(spotlights)
            //console.log(spotlights[0])
        }
      
    //     let card = document.createElement('section');
    //     let fullName = document.createElement('p');
    //     let description = document.createElement('p')
    
        
    //     fullName.textContent = `${member.name}`;
  
    //    description.innerHTML = `address: ${member.address}<br>contact: ${member.phoneNumber}\
    //                             <br>URL: ${member.WbsiteURL}<br>${member.iconFile}<br>Membership Level: ${member.membership}`;
    
        
    //     card.appendChild(fullName);
    //     card.appendChild(description);
    //     cards.appendChild(card);
       }); 
        
  }
  const displaySpotlight = (members) => {
    //console.log(members)
    // members.forEach((member) => {
    //     console.log(member)
        
    //    }); 

       let rand = Math.floor(Math.random() * (members.length))
       let saveRand = [rand]

       //console.log(spotlights)
       let spotlight = document.createElement('section');
       let companyName = document.createElement('h4');
       let slogan = document.createElement('p')
       let companyDescription = document.createElement('p')
       let website = document.createElement('nav')
   
       spotlight.className = 'member1'
       
       companyName.textContent = `${members[rand].name}`;
       slogan.textContent = `${members[rand].slogan}`;
       slogan.className = 'slogan'   

       companyDescription.innerHTML = `${members[rand].address}<br>${members[rand].phoneNumber}`
       companyDescription.className = 'contact'

       website.innerHTML = `${members[rand].WbsiteURL}`
       website.className = 'contact'
       
       spotlight.appendChild(companyName);
       spotlight.appendChild(slogan);
       spotlight.appendChild(companyDescription);
       spotlight.appendChild(website);
       spotlightCards.appendChild(spotlight);


       //-----------------------------------------------------------------------------//
       while(saveRand.includes(rand)){
        rand = Math.floor(Math.random() * (members.length))
       }
        
        saveRand.push(rand)

       //console.log(spotlights)
       spotlight = document.createElement('section');
       companyName = document.createElement('h4');
       slogan = document.createElement('p')
       companyDescription = document.createElement('p')
       website = document.createElement('nav')

       spotlight.className = 'member2'
   
       
       companyName.textContent = `${members[rand].name}`;
       slogan.textContent = `${members[rand].slogan}`;
       slogan.className = 'slogan'   

       companyDescription.innerHTML = `${members[rand].address}<br>${members[rand].phoneNumber}`
       companyDescription.className = 'contact'

       website.innerHTML = `${members[rand].WbsiteURL}`
       website.className = 'contact'
       
       spotlight.appendChild(companyName);
       spotlight.appendChild(slogan);
       spotlight.appendChild(companyDescription);
       spotlight.appendChild(website);
       spotlightCards.appendChild(spotlight);

       //-----------------------------------------------------------------------------//
       while(saveRand.includes(rand)){
        rand = Math.floor(Math.random() * (members.length))
       }
        
        saveRand.push(rand)

       spotlight = document.createElement('section');
       companyName = document.createElement('h4');
       slogan = document.createElement('p')
       companyDescription = document.createElement('p')
       website = document.createElement('nav')
   
       spotlight.className = 'member3'

       companyName.textContent = `${members[rand].name}`;
       slogan.textContent = `${members[rand].slogan}`;
       slogan.className = 'slogan'   

       companyDescription.innerHTML = `${members[rand].address}<br>${members[rand].phoneNumber}`
       companyDescription.className = 'contact'

       website.innerHTML = `${members[rand].WbsiteURL}`
       website.className = 'contact'
       
       spotlight.appendChild(companyName);
       spotlight.appendChild(slogan);
       spotlight.appendChild(companyDescription);
       spotlight.appendChild(website);
       spotlightCards.appendChild(spotlight);
  }

  
getSpotlight()
