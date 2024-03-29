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


