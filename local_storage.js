
// const fs = require('fs')
// const data = fs.readFileSync('user_infos.json');
// const jsonData = JSON.parse(data);

const userName = document.getElementById('username');
const userEmail = document.getElementById('useremail');
const userPassword = document.getElementById('userpassword');
const web = document.getElementById('web');

var count = 0
var saveButton = document.getElementById('save-btn');

saveButton.addEventListener('click', saveInfo);


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
    let newPara = document.createElement('p');
    newPara.innerHTML  = content
    document.getElementById('output').appendChild(newPara) ;
    count ++;
};


var deleteButton = document.getElementById('delete-btn');
deleteButton.addEventListener('click', deleteInfo);

function deleteInfo(){
    console.log(count);
    let ind = count - 1 
    localStorage.removeItem("user"+ ind);
}