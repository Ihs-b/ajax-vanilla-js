
// const fs = require('fs')
// const data = fs.readFileSync('user_infos.json');
// const jsonData = JSON.parse(data);

const userName = document.getElementById('username');
const userEmail = document.getElementById('useremail');
const userPassword = document.getElementById('userpassword');
const web = document.getElementById('web');


var saveButton = document.getElementById('save-btn');
saveButton.addEventListener('click', saveInfo);

function saveInfo(){
    let data = {
        name : userName.value,
        email : userEmail.value,
        password : userPassword.value,
        website: web.value
    }
    localStorage.setItem('user', JSON.stringify(data))

    // e.preventDefault();
    // let xhr = new XMLHttpRequest();
    // xhr.open('POST', 'user_infos.json', true);
    // xhr.onload = function(){        
    //     console.log(userEmail.value, userName.value, userPassword.value, web.value);
    //     let data = {
    //         name : userName.value,
    //         email : userEmail.value,
    //         password : userPassword.value,
    //         website: web.value
    //     }

    // }


    // xhr.send();
}