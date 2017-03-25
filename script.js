var link=document.querySelector(".login");
var popup=document.querySelector(".enter-login");
var close=popup.querySelector(".close");
var form=popup.querySelector("form");
var login=popup.querySelector("[name=login]");
var password=popup.querySelector("[name=password]");
var storage=localStorage.getItem("login");


link.addEventListener("click", function(event) {
event.preventDefault();
popup.classList.add("show");

if (storage) {
	login.value=storage;
	password.focus();
} else {
	login.focus();
}
});

close.addEventListener("click", function(event) {
event.preventDefault();
popup.classList.remove("show");
popup.classList.remove("error");
});

form.addEventListener("submit", function(event){
	if (!login.value || !password.value) {
		event.preventDefault();
		popup.classList.remove("error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("error");
	} else{
		localStorage.setItem("login", login.value);
	}
});

window.addEventListener("keydown", function(event) {
	if (event.keyCode===27) {
		if(popup.classList.contains("show")){
			popup.classList.remove("show");
		}
	}
});

/*карта*/

var mapOpen=document.querySelector(".js-map");
var mapPopup=document.querySelector(".map");
var mapClose=mapPopup.querySelector(".close");

mapOpen.addEventListener("click", function(event) {
event.preventDefault();
mapPopup.classList.add("show");
});

mapClose.addEventListener("click", function(event) {
event.preventDefault();
mapPopup.classList.remove("show");
});




window.addEventListener("keydown", function(event) {
if (event.keyCode === 27) {
if (mapPopup.classList.contains("show")) {
mapPopup.classList.remove("show");
}
}
});



/*запись*/
var linkEnroll=document.querySelector(".linkEnroll");
var EnrollPopup=document.querySelector(".Enroll");
var EnrollClose=EnrollPopup.querySelector(".close");

linkEnroll.addEventListener("click", function(event) {
event.preventDefault();
EnrollPopup.classList.add("show");
});

EnrollClose.addEventListener("click", function(event) {
event.preventDefault();
EnrollPopup.classList.remove("show");
});
/*вторая карта*/
var mapOpen1=document.querySelector(".js-map1");
var mapPopup=document.querySelector(".map");
var mapClose=mapPopup.querySelector(".close");

mapOpen1.addEventListener("click", function(event) {
event.preventDefault();
mapPopup.classList.add("show");
});

mapClose.addEventListener("click", function(event) {
event.preventDefault();
mapPopup.classList.remove("show");
});