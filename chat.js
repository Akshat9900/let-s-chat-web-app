
var firebaseConfig = {
    apiKey: "AIzaSyA0ZQWKS0Y-xCa8YvOx_d3dPIWTef4mdZk",
    authDomain: "socialwebsitekwitter.firebaseapp.com",
    databaseURL: "https://socialwebsitekwitter-default-rtdb.firebaseio.com",
    projectId: "socialwebsitekwitter",
    storageBucket: "socialwebsitekwitter.appspot.com",
    messagingSenderId: "833149339391",
    appId: "1:833149339391:web:c29d480cbfaea3a4be6eca"
  };
  
  
  firebase.initializeApp(firebaseConfig);





function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}

user_name=localStorage.getitem("user_name");
room_name=localStorage.getitem("room_name");
function send()
{
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    document.getElementById("msg").value;
}



