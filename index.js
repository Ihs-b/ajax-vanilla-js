// var button = document.getElementById('btn');
// button.addEventListener('click', loadText);

// function loadText(){
//     console.log('button licked');
//     //create XHP Object
//     var xhr = new XMLHttpRequest();
//     console.log(xhr);
//     xhr.open("GET", "sample.txt", true);

//     xhr.onload = function(){
//         if (this.status == 200){
//             console.log(this.responseText)
//         }
//     }

//     // xhr.onreadystatechange = function(){
//     //     if (this.readyState == 4 && this.status==200){
//     //         console.log(this.responseText)
//     //     }
//     // }
//     // send requests
//     xhr.send()

// }


// var buttonOne = document.getElementById("button1")
// var buttonTwo = document.getElementById("button2")


// // document.getElementById('user')
// // document.getElementById('users')

// buttonOne.addEventListener("click", loadUser)
// buttonTwo.addEventListener("click", loadUsers)


// function loadUser(){
//     var xhr = new XMLHttpRequest;
//     xhr.open('GET', "user.json", true)
//     xhr.onload = function (){
//         if (this.status == 200){
//             // console.log(this.responseText);
//             var user = JSON.parse(this.response);
//             var output = "";
//             output = '<ul>' +
//              '<li>'+ user.id +'</li>' +
//              '<li>'+ user.name +'</li>' +
//              '<li>'+ user.email +'</li>' +   
//              '</ul>'
//             document.getElementById('user').innerHTML = output
//         }
//     }
//     xhr.send();
// }
// function loadUsers(){
//     var xhr = new XMLHttpRequest;
//     xhr.open('GET', "users.json", true)
//     xhr.onload = function (){
//         if (this.status == 200){
//             // console.log(this.responseText);
//             var users = JSON.parse(this.response);
//             console.log(users)
//             for ( var i in users){
//                 var output = "";
//                 output = '<ul>' +
//                  '<li>'+ users[i].id +'</li>' +
//                  '<li>'+ users[i].name +'</li>' +
//                  '<li>'+ users[i].email +'</li>' +   
//                  '</ul>'
                
//                 document.getElementById('users').innerHTML += output
          
//             }
//            }
//     }
//     xhr.send();
// }



var buttonThree = document.getElementById("button3")
buttonThree.addEventListener("click", getUsers)

function getUsers(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "https://api.github.com/users", true)
    xhr.onload = function(){
        console.log(this.status);
        if (this.status == 200){
            var users = JSON.parse(this.responseText);
            console.log(users)
        }
    }
}