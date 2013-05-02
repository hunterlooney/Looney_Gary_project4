//Gary W. Hunter Looney
//Project 4
//Add Character Java
//Term 1304

var cname = document.getElementById("cname");
var sex = document.getElementById("sex");
var birthdate = document.getElementById("birthdate");
var race = document.getElementById("race");
var height = document.getElementById("height");
var submitButton = document.getElementById("submitButton");
var clearButton = document.getElementById("clearButton");
var glasses = document.getElementById("glasses");
var glassesValue = function () {
	if(glasses.checked) {
		glassesValue = "Yes";
	} else { 
		glassesValue = "No";
	}
};
var saveData = function (key) {
	if (!key){
		var id = Math.floor(Math.random()*10000001);
	} else { 
		id = key;
	}

	var item = {};
		item.name = ["Name: ", cname.value];
		item.glasses = ["Glasses: ", glassesValue.value];
		item.sex = ["Sex: ", sex.value];
		item.birthdate = ["Birthdate: ", birthdate.value];
		item.race = ["Race: ", race.value];
		item.height = ["Height: ", height.value];
	localStorage.setItem(id, JSON.stringify(item));
	alert("Character Added!");
};
var clearData = function () {
	localStorage.clear();
	alert("Data Cleared!");

};
var getTheData = function () {
	var makeDivision = document.createElement('div');
		makeDivision.setAttribute("id", "items");
	
	var links = document.createElement('li');

	var makeTheList = document.createElement('ul');
		makeDivision.appendChild(makeTheList);
		document.body.appendChild(makeDivision);
	for ( var i = 0, len = localStorage.length; i < len; i++) {
		var makeli = document.createElement('li');
			makeTheList.appendChild(makeli);
		
		var key = localStorage.key(i);
		var value = localStorage.getItem(key);
		
		var obj = JSON.parse(value);
		var makeSecondList = document.createElement('ul');
			makeli.appendChild(makeSecondList);
		for (var n in obj) {
			var makeSecondli = document.createElement('li');
				makeSecondList.appendChild(makeSecondli);
			var optSecondText = obj[n][0] + " "	+ obj[n][1];
				makeSecondli.innerHTML = optSecondText;
				makeSecondList.appendChild(links);
		}
		
		makeLinksButtons (localStorage.key(i), links);
	}
};
function makeLinksButtons (key, links) {
	var editTheLink = document.createElement('a');
	editTheLink.href = "#";
	editTheLink.key = key;
	var editTheLinkText = "Edit Character";
	editTheLink.addEventListener("click", editTheItem);
	editTheLink.innerHTML = editTheLinkText;
	links.appendChild(editTheLink);
	
	var breakBetween = document.createElement('br');
	links.appendChild(breakBetween);
	
	var deleteTheLink = document.createElement('a');
	deleteTheLink.href = "#";
	deleteTheLink.key = key;
	var deleteTheLinkText = "Delete Character";
	deleteTheLink.addEventListener("click", deleteTheItem);
	deleteTheLink.innerHTML = deleteTheLinkText;
	links.appendChild(deleteTheLink);
	
}
function deleteTheItem () {
	var askQuestion = confirm("Are you sure you want to delete this character?");
	if(askQuestion) {
		localStorage.removeItem(this.key);
		window.location.reload();
	} else {
		alert("Character was NOT deleted.")
	}
}
function editTheItem () {
	var value = localStorage.getItem(this.key);
	var item = JSON.parse(value);
	
	('cname').value = item.cname[1];
	('birthdate').value = item.birthdate[1];
	('race').value = item.race[1];
	('height').value = item.height[1];
	var radios = document.forms[0].sex;
	for(var i = 0; i<radios.length; i++) {
		if (radios[i].value == "Male" && item.sex[1] == "Male") {
			radios[i].setAttribute("checked", "checked");
		} else if (radios[i].value == "Female" && item.sex[1] == "Female") {
			radios[i].setAttribute("checked", "checked");
		}
	}
	if (item.glasses[1] == "Yes") {
		('glasses').setAttribute("checked", "checked");
	}
	
	save.removeEventListener("click", saveData);
	
	('submitButton').value = "Edit Contact";
	var editTheSubmit = ('submit');
	editTheSubmit.addEventListener("click", validate);
	editTheSubmit.key = this.key;
	
}
function validate (event) {
	var errorMessage = [];
	
	var getTHEcname = cname;	
	if(getTHEcname.value === ""){
		var cnameError = "Please enter a character name.";
		getTHEcname.style.border = "1px solide red";
		errorMessage = cnameError;
	}
	
	if(errorMessage.length >= 1) {
		for (var i = 0, j = errorMessage.length; i< j; i++){
			var errorText = document.createElement('li');
			errorText.innerHTML = errorMessage[i];
			errorMessageTwo.appendChild(errorText);
		}
		event.preventDefault();
		return false;	
	} else {
		saveData (this.key);
	}
}

var displayButton = document.getElementById('displayButton');
var errorMessageTwo = ('error');

clearButton.addEventListener("click", clearData);
displayButton.addEventListener("click", getTheData);
submitButton.addEventListener("click", validate);







//For Project 4 you will do the following:
//Create Image Thumbnails
//Apply JavaScript: Add Image Thumbnails
//Apply JavaScript: Add JSON Object
//Apply CSS

//Create Image Thumbnails
/*
We're going to want to spruice up our displayed items a bit with some images 
that represent the category of the item. This will help the user scan the list 
for items in a particular category. Before we can do that we need to create 
the images.

Requirements
Create a small image icon for each cateogory item in your select field.
Images should be a reasonable size for a mobile device and will be displayed 
with the data that is displayed on the screen.
Use whatever program you want to create your images (Photoshop/Illustrator etc.).
Images should be consistent and have the same look and feel.
Do not steal images off the internet.
*/

//Apply JavaScript: Add Image Thumbnails
/*
Let's take the image thumbnails you created and add them to our displayed items 
using JavaScript.

Requirements
Save your images in an img folder. Image files won't actually be saved into 
Local Storage (because local storage only stores strings!).
Display the appropriate image thumbnail with each item that is displayed on the 
screen. You'll likely want to create a new function for this and then modify your 
getData function which writes the data to the screen.
*/

//Apply JavaScript: Add JSON Object
/*
Create a JSON Object and use it to populate local storage with data 
if no data exists in local storage when a user clicks Display Data. 
Your JSON Object should be in a new .js file. This will make it easier 
to use in your next course.

Requirements
Create at least 2-3 items in your JSON Object
Items get added only if nothing exists in local storage when a user tries to display data.
Items should still be editable and can be delted individually though the interface.
The JSON Object is in it's own file called json.js
*/

//Apply CSS
/*
This will be the easy one. I'm not going to require any specific tags 
or properties to be used here. You've made it far and hopefully have a 
cool little app that works that you even find useful! Give it some style 
and make it look great with some CSS. The only requirements are:

Requirements
Don't leave anything looking "unfinished". What do I mean by "unfinished"? 
I mean if it looks like it's just something you threw up there and didn't 
give any thought to how it looks. It has default styling (for example: you 
didn't change any colors or fonts or didn't care to add margins/padding/line-height 
to make your content legible).
Do your best to remember good design principles and color theory. I'm not going to 
be grading harshly on these like in the MMD courses. But these are STILL important 
to remember and you should be exercising them in any design that you do. It's good 
practice! Make it look as decent as you can. Get creative if you want. I'm not looking 
for fancy graphics. CSS colors & gradients are all I expect but you can do a lot with just that.
*/