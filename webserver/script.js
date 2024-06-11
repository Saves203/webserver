

  const firebaseConfig = {
    apiKey: "AIzaSyCmW9JD05hkNFvqXyviT0pYf4USenkuu5A",
    authDomain: "smarthome-68ff3.firebaseapp.com",
    databaseURL: "https://smarthome-68ff3-default-rtdb.firebaseio.com",
    projectId: "smarthome-68ff3",
    storageBucket: "smarthome-68ff3.appspot.com",
    messagingSenderId: "775526693080",
    appId: "1:775526693080:web:99b327069ac8fec1a83fad"
  };

  firebase.initializeApp(firebaseConfig);
  // Initialize Firebase
  var database = firebase.database();



const btnON1 = document.querySelector('.btnON1')
const btnOFF1 = document.querySelector('.btnOFF1')

const btnON2 = document.querySelector('.btnON2')
const btnOFF2 = document.querySelector('.btnOFF2')

const btnON3 = document.querySelector('.btnON3')
const btnOFF3 = document.querySelector('.btnOFF3')

var btnOn1 = document.getElementById("btnON_01")
var btnOff1 = document.getElementById("btnOFF_01")

var btnOn2 = document.getElementById("btnON_02")
var btnOff2 = document.getElementById("btnOFF_02")

var btnOn3 = document.getElementById("btnON_03")
var btnOff3 = document.getElementById("btnOFF_03")

/*
btnON1.addEventListener('click', () => {
  btnON1.style.backgroundColor = '#008631';
  btnOFF1.style.backgroundColor = '#fffafa';
  btnON1.style.transition = '.5s ease';
  btnOFF1.style.transition = '.5s ease';
})  

btnOFF1.addEventListener('click', () => {
  btnON1.style.backgroundColor = '#fffafa';
  btnOFF1.style.backgroundColor = '#c21807'
  btnON1.style.transition = '.5s ease';
  btnOFF1.style.transition = '.5s ease';
}) 

btnON2.addEventListener('click', () => {
  btnON2.style.backgroundColor = '#008631';
  btnOFF2.style.backgroundColor = '#fffafa';
  btnON2.style.transition = '.5s ease';
  btnOFF2.style.transition = '.5s ease';
})  

btnOFF2.addEventListener('click', () => {
  btnON2.style.backgroundColor = '#fffafa';
  btnOFF2.style.backgroundColor = '#c21807'
  btnON2.style.transition = '.5s ease';
  btnOFF2.style.transition = '.5s ease';
}) */


btnOn1.onclick = function(){
  firebase.database().ref("/").update({
    "light" : "on"
  })
}

btnOff1.onclick = function(){
  firebase.database().ref("/").update({
    "light" : "off"
  })
}

btnOn2.onclick = function(){
  firebase.database().ref("/").update({
    "lock" : "open"
  })
}

btnOff2.onclick = function(){
  firebase.database().ref("/").update({
    "lock" : "close"
  })
}

btnOn3.onclick = function(){
  firebase.database().ref("/").update({
    "fan" : "on"
  })
}

btnOff3.onclick = function(){
  firebase.database().ref("/").update({
    "fan" : "off"
  })
}

database.ref("/light").on("value", function(snapshot) {
  var light_state = snapshot.val();
  if(light_state== "on"){
      btnON1.style.backgroundColor = '#008631';
      btnOFF1.style.backgroundColor = '#fffafa';
      btnON1.style.transition = '.5s ease';
      btnOFF1.style.transition = '.5s ease';
  }else{
    btnON1.style.backgroundColor = '#fffafa';
    btnOFF1.style.backgroundColor = '#c21807'
    btnON1.style.transition = '.5s ease';
    btnOFF1.style.transition = '.5s ease';
  }
})

database.ref("/lock").on("value", function(snapshot) {
  var lock_state = snapshot.val();
  if(lock_state== "open"){
      btnON2.style.backgroundColor = '#008631';
      btnOFF2.style.backgroundColor = '#fffafa';
      btnON2.style.transition = '.5s ease';
      btnOFF2.style.transition = '.5s ease';
  }else{
    btnON2.style.backgroundColor = '#fffafa';
    btnOFF2.style.backgroundColor = '#c21807'
    btnON2.style.transition = '.5s ease';
    btnOFF2.style.transition = '.5s ease';
  }
})

database.ref("/fan").on("value", function(snapshot) {
  var fan_state = snapshot.val();
  if(fan_state== "on"){
      btnON3.style.backgroundColor = '#008631';
      btnOFF3.style.backgroundColor = '#fffafa';
      btnON3.style.transition = '.5s ease';
      btnOFF3.style.transition = '.5s ease';
  }else{
    btnON3.style.backgroundColor = '#fffafa';
    btnOFF3.style.backgroundColor = '#c21807'
    btnON3.style.transition = '.5s ease';
    btnOFF3.style.transition = '.5s ease';
  }
})

database.ref("/temperature").on("value", function(snapshot){
  var temp = snapshot.val();
  document.getElementById("temp").innerHTML = temp;
})

database.ref("/humidity").on("value", function(snapshot) {
  var hum = snapshot.val();
  document.getElementById("hum").innerHTML = hum;
})