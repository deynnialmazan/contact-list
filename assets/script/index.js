'use strict';

const contactInput = document.querySelector('.contact-info');
const addBtn = document.querySelector('.add-contact');
const invalidMsg = document.querySelector('.invalid-msg');
const displayName = document.querySelector('.name-contact');
const displayCity = document.querySelector('.city-contact');
const displayEmail = document.querySelector('.email-contact');
const gridItem = document.querySelector('.grid-item');
const grid = document.getElementById('grid');
const totalcontactsBtn = document.querySelector('.total-contacts')


const totalContacts = []; // Array that includes all contacts
let contactSaved = 0;
totalcontactsBtn.innerHTML = contactSaved;

    class Contact {
        #name;
        #city;
        #email;
      
        constructor(name, city, email) {
          this.#name = name;
          this.#city = city;
          this.#email = email;
        }
      
        get name() {
          return this.#name;
        }
      
        get city() {
          return this.#city;
        }
      
        get email() {
          return this.#email;
        }
      }

      
  //Create contact

  function createContact(input) {
    const info = contactInput.value.trim();
    const inputValueArray = info.split(',');
    //console.log(inputValueArray);

    //Creating contact:
    const name = (inputValueArray[0]).trim();
    const city = inputValueArray[1];
    const emailContact = inputValueArray[2].trim();

    const newContact = new Contact (name, city, emailContact);
    totalContacts.unshift(newContact);
    contactSaved = contactSaved + 1;
    totalcontactsBtn.innerHTML = contactSaved;
    //console.log(totalContacts);
    //console.log(contactSaved);
 
}

//console.log(totalContacts);

function listContacts(input) {
    const info = input.value.trim();
    //console.log(info)
    const inputValueArray = info.split(',');
    const name = inputValueArray[0];
    const city = inputValueArray[1];
    const emailContact = inputValueArray[2];

    const childDiv = document.createElement('div'); // creating a div
    childDiv.classList.add('grid-item');
    //assigning attributes to the new div (in this case the class 'grid-item)

    const nameP = document.createElement('p');
    const cityP = document.createElement('p');
    const emailP = document.createElement('p');
    nameP.innerHTML = "<b>Name: </b>" + name;
    cityP.innerHTML = "<b>City: </b>" + city; 
    emailP.innerHTML = "<b>Email: </b>" + emailContact;

    childDiv.appendChild(nameP);
    childDiv.appendChild (cityP);
    childDiv.appendChild (emailP);
    grid.prepend(childDiv);  // Adding the new contact at the beginning of the list

    
    childDiv.addEventListener("click", function() {
        contactSaved --;
        totalcontactsBtn.innerHTML = contactSaved;

        // Remove the div and its content from the DOM
        childDiv.remove();
        });
    };



  addBtn.addEventListener('click', () => {
    
    //Validate input
    const info = contactInput.value.trim();
    //console.log(info)

    const inputValueArray = info.split(',');
    const email = inputValueArray[inputValueArray.length - 1].trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    

    if (inputValueArray.length !== 3) {
        invalidMsg.style.visibility = 'visible'; 
    } else if(!emailRegex.test(email)) {
        invalidMsg.style.visibility = 'visible'; 
        return;
    } else { invalidMsg.style.visibility = 'hidden'};
    
    createContact(contactInput); 
    listContacts(contactInput); 
    contactInput.value = "";
});
   

