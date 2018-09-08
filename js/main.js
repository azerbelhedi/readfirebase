var test=5;
var name="null";
var age="null";
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBO0MdD4PHQhc4UlbubJNare9mUaJeQyOY",
    authDomain: "myfirebase-35e65.firebaseapp.com",
    databaseURL: "https://myfirebase-35e65.firebaseio.com",
    projectId: "myfirebase-35e65",
    storageBucket: "myfirebase-35e65.appspot.com",
    messagingSenderId: "335457471625"
  };
firebase.initializeApp(config);
 console.log(firebase) ;

 var database = firebase.database();

 function upload(name, age)
 {
    console.log("up");
     newName = document.getElementById("input").value;
     newAge = document.getElementById("age").value;
    var ref = database.ref('scores/web');
    var data = {
        name: newName,
        age: newAge
    }
    ref.push(data);    
 }

var ref = database.ref("scores/web");
ref.on('value',gotData,errData);

function gotData(data)
{
    document.getElementById("output").innerHTML="the staff :";
    //console.log(data.val());
    var people = data.val();
    var keys = Object.keys(people);
    console.log(keys);
    console.log(keys.length);
    for ( var i = 0; i<keys.length; i++)
    {
        console.log(people[keys[i]].name);
        var theAge=people[keys[i]].age;
        console.log(people[keys[i]].age);
        var theName=people[keys[i]].name;
        document.getElementById("output").innerHTML+=theName+" : "+theAge+"<br>";
    }
}

function errData(err)
{
    console.log("error! : ");
    console.log(err);
}