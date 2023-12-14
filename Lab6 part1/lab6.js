var username = document.getElementById("username");
var password =document.getElementById("password");


function login(){

    user={
        username:username.value,
        password:password.value,
    }
    if(username.value == "admin" && password.value == 123){
        alert("Welcome :)");
    }
   else{
    alert("not registered!");
   }
}
