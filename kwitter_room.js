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
document.getElementById("user_name").innerHTML="Welcome " + user_name  + "!!"; 

function addroom() {
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose:"adding room name"
  });
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("room name - " + Room_names);
       row="<div class = 'room_name' id = " + Room_names + " onclick = 'redirectToRoomName(this.id)'>#" + Room_names + "</div> <hr>";
      
      //End code
      });});}
getData();

function Logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location= "index.html";
}

