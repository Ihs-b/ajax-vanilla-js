
// const fs = require('fs')
// const data = fs.readFileSync('user_infos.json');
// const jsonData = JSON.parse(data);

const userName = document.getElementById('username');
const userEmail = document.getElementById('useremail');
const userPassword = document.getElementById('userpassword');
const web = document.getElementById('web');

var count = 0
var saveButton = document.getElementById('save-btn');
// var deleteButton = document.getElementById('delete');
saveButton.addEventListener('click', saveInfo);
// deleteButton.addEventListener('click', deleteInfo);

function saveInfo(){
    let data = {
        name : userName.value,
        email : userEmail.value,
        password : userPassword.value,
        website: web.value
    }
    localStorage.setItem('user'+ count, JSON.stringify(data));
    console.log(localStorage.getItem('user'+ count))
    // contents =[];
    // contents.push(localStorage.getItem('user'+ count))
    // console.log(contents)
    content =  localStorage.getItem('user'+ count);
    console.log(content)
    document.getElementById('output').innerHTML += content + " <br> ";
    count ++;
};


// function deleteInfo(){
//     localStorage.removeItem("user");
// }