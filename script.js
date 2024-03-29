function submitCustomRugIdea(event) {
    event.preventDefault(); 
    const size = document.getElementById('size').value;
    const description = document.getElementById('description').value;
    const referenceImage = document.getElementById('reference-image').files[0];
    const contactInfo = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value
    };
    if (size.trim() === '' || description.trim() === '' || !referenceImage || Object.values(contactInfo).some(value => value.trim() === '')) {
        alert('Please fill out all fields.');
        return; 
    }
    const formData = new FormData();
    formData.append('size', size);
    formData.append('description', description);
    formData.append('referenceImage', referenceImage);
    formData.append('name', contactInfo.name);
    formData.append('email', contactInfo.email);
    formData.append('phone', contactInfo.phone);

    fetch('submit_custom_rug_idea_endpoint', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        if (response.ok) {
            return response.json(); 
        } else {
            throw new Error('Failed to submit custom rug idea.'); 
        }
    })
    .then(data => {
        console.log('Custom rug idea submitted successfully:', data);
        alert('Custom rug idea submitted successfully!');    })
    .catch(error => {
            console.error('Error:', error);
        alert('Failed to submit custom rug idea. Please try again later.');
    });
}
}




document.getElementById('custom-rug-form').addEventListener('submit', submitCustomRugIdea);

document.querySelector(".open-nav-btn").addEventListener("click", function() {
    document.getElementById("side-nav").style.width = "250px";
});

document.querySelector(".close-nav-btn").addEventListener("click", function() {
    document.getElementById("side-nav").style.width = "0";
});


function openNav() {
    document.getElementById("side-nav").style.width = "250px"; 
function closeNav() {
    document.getElementById("side-nav").style.width = "0";
}

document.querySelector(".open-nav-btn").addEventListener("click", openNav);
document.querySelector(".close-nav-btn").addEventListener("click", closeNav);

const descriptionInput = document.getElementById("description");
const charCountDisplay = document.getElementById("char-count");

descriptionInput.addEventListener("input", function() {
    const remainingChars = 150 - this.value.length;
    charCountDisplay.textContent = `Characters remaining: ${remainingChars}`;
    
    if (remainingChars < 0) {
        this.value = this.value.slice(0, 150);
    }
});


let today = new Date();
let christmasYear = today.getFullYear();

if (today.getMonth() == 11 && today.getDate() > 25) {
  christmasYear = christmasYear + 1;
}

let christmasDate = new Date(christmasYear, 11, 25);
let dayMilliseconds = 1000 * 60 * 60 * 24;

let remainingDays = Math.ceil(
  (christmasDate.getTime() - today.getTime()) /
   (dayMilliseconds)
);

const axios = require('axios');

const postData = {
  key: 'value'
};

const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post('/submit-custom-rug', async (req, res) => {
  try {
    
    const { size, description, contactInfo } = req.body;

    
    const postData = {
      size,
      description,
      contactInfo
    };

    
    const response = await axios.post('https://getpantry.cloud/apiv1/pantry/75e02e92-c82f-40d6-9f01-721ed8e560bf/basket/testBasket', postData);

    console.log('Data stored in pantry:', response.data);
    res.status(200).send('Custom rug submission successful');
  } catch (error) {
    console.error('Error submitting custom rug:', error);
    res.status(500).send('An error occurred while submitting the custom rug');
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var data = {
  size: "Your rug size",
  description: "Your rug description",
  contactInfo: "Your contact information"
};

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: JSON.stringify(data),
  redirect: 'follow'
};

fetch("https://getpantry.cloud/apiv1/pantry/75e02e92-c82f-40d6-9f01-721ed8e560bf", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

