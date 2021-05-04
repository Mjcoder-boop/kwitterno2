
var firebaseConfig = {
      apiKey: "AIzaSyAnzSTP_jaYg0-ZpQu_Ad4t7m0mlXYszXo",
      authDomain: "letschatwebapp-1ee86.firebaseapp.com",
      databaseURL: "https://letschatwebapp-1ee86-default-rtdb.firebaseio.com",
      projectId: "letschatwebapp-1ee86",
      storageBucket: "letschatwebapp-1ee86.appspot.com",
      messagingSenderId: "37729831142",
      appId: "1:37729831142:web:68e0714899669aadacd327",
      measurementId: "G-BE8NT8YWLC"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name, 
      message:msg,
      like: 0 
});
document.getElementById("msg").value = "" ; 
}


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function Logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location= "index.html";
    }