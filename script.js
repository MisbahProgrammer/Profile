let form = document.getElementById('form');
let profile = document.getElementById('profile-section');

let profileData = [];
form.addEventListener('submit' ,function(e){
 e.preventDefault();

 let name = document.getElementById('name').value;
 let email = document.getElementById('email').value;
 let phone = document.getElementById('phone').value;
 let skill = document.getElementById('skill').value;

 profileData = [name , email, phone, skill];
 updateData();
});

function updateData(){
    console.log('submit');
    
    profile.innerHTML = `
            <h2>Profile</h2>
             <p>Name: <span>${profileData[0]}</span></p>
            <p>Email: <span>${profileData[1]}</span></p>
            <p>Phone: <span>${profileData[2]}</span></p>
            <p>Skill: <span>${profileData[3]}</span></p>
    `
}