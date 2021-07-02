
var firebaseConfig = {
  apiKey: "AIzaSyD4pEecKZkUrdTz5xG0OgY1K-Cq6s8lkXA",
  authDomain: "kwitter-app-82002.firebaseapp.com",
  databaseURL: "https://kwitter-app-82002-default-rtdb.firebaseio.com",
  projectId: "kwitter-app-82002",
  storageBucket: "kwitter-app-82002.appspot.com",
  messagingSenderId: "832928017656",
  appId: "1:832928017656:web:c44273e3b39199b7921f0d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome : " + user_name;

function addRoom() {
  roomName = document.getElementById("room_name").value;
  firebase.database().ref("/").child(roomName).update({
    purpose: "adding Room Name "
  });
  localStorage.setItem("roomName", roomName);
  window.location = "kwitter_page.html";
}


function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      //Start code
      console.log(Room_names);
      row = "<div class='room_name' id= " + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
     
      //End code
    });
  });
}
getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("roomName", name);
  window.location = "kwitter_page.html";
}
 function logout(){
   localStorage.removeItem("user_name");
   localStorage.removeItem("roomName");
   window.location= "index.html";
 }