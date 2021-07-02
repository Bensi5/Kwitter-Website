
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
  function addUser(){
      user_name=document.getElementById("user_name").value;
 firebase.database().ref("/").child(user_name).update({
     purpose:"addingUser"
 });
 document.getElementById("user_name").value="";
 window.alert("Your User Name has been Saved")
  }