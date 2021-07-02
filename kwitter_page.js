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
roomName = localStorage.getItem("roomName");
function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("roomName");
    window.location = "index.html";
}

function Send() {
    msg = document.getElementById("msg").value;
    firebase.database().ref(roomName).push({
        name: user_name,
        message: msg,
        like: 0
    });
    document.getElementById("msg").value = "";
}
function getData() {
    firebase.database().ref("/" + roomName).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code
                console.log(firebase_message_id);
                console.log(message_data);

                name = message_data['name'];
                message = message_data['message'];
                like = message_data['like'];

                name_with_tag = "<h4>" + name + "<img class='user_tick' src='tick.png'> </h4>";
                message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
                like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updatedLike(this.id)'>";
                span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like: " + like + "</span></button><hr>";

                row = name_with_tag + message_with_tag + like_button + span_with_tag;
                document.getElementById("output").innerHTML += row;
                //End code
            }
        });
    });
}
getData();

function updatedLike(message_id){
    console.log("clicked on like button ="+message_id);
    button_id=message_id;
    likes=document.getElementById(button_id).value ;
    updated_likes=Number(likes)+1;
    console.log(updated_likes);

    firebase.database().ref(roomName).child(message_id).update({
        like:updated_likes
    });
};