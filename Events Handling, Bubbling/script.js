//Q1.Create a button and use addEventListener() to display a message when the button is clicked.

let button =document.querySelector("#myButton");
button.addEventListener("click" ,function(){
  console.log("Button Clicked!");
});

//Q.2 Create a paragraph and a button. Use addEventListener() to change the paragraph text when the button is clicked

let btn =document.querySelector("#btn");
let para = document.querySelector("#para");
btn.addEventListener("click", function(){
  para.textContent="Hey bro whatsApp all good";
});

//Q.3 Create a heading and use addEventListener() with the mouseover event to change its text when the mouse moves over it.

let header=document.querySelector("#heading");
header.addEventListener("mouseover",function(){
  header.textContent="Congratulations for compeliting JavaScript ";

});


//Q.4 Create a button and use the event object to identify the element that was clicked.

let click=document.querySelector("#click");
click.addEventListener("click", function(event){
console.log(event.target.tagName);
});


//Q.5 Create a <div> and use a mousemove event to display the mouse coordinates using the event object's clientX and clientY properties.

let box=document.getElementById("box");
let coordinates =document.getElementById("coordinates");

box.addEventListener("mousemove",function(event){
  coordinates.textContent=`X:${event.clientX} Y:${event.clientY}`;
});

//Q.6 Create an input field and use the event object's target.value to display the entered value.

let inputBox=document.querySelector("#inputBox");
let result=document.getElementById("result");
inputBox.addEventListener("click",function(event){
  result.textContent=`You typed : ${event.target.value}`;
});


//Q.7 Create a button and attach a click event using addEventListener(). Create a separate function and use removeEventListener() to stop the click event when required.

let myBtn=document.getElementById("myBtn");
let removeBtn=document.getElementById("removeBtn");

function msg(){
  console.log('Button clicked!');
}

myBtn.addEventListener("click",msg);
removeBtn.addEventListener("click",function(){
  myBtn.removeEventListener("click",msg);
});

//Q.8 Create a button and use addEventListener() with the once option so that the event runs only the first time the button is clicked.

let push=document.getElementById("push");
push.addEventListener("click",function(){
  console.log("Welcome!");
},{once:true});


//Q.9 ,10
//  Create a parent <div> containing a button. Add click events to both parent and button. Use stopPropagation() so that clicking the button does not trigger the parent's click event.


let parent = document.getElementById("parent");
let childBtn = document.getElementById("childBtn");

// parent.addEventListener("click", function () {
//  console.log("Parent Clicked");
//  });

// childBtn.addEventListener("click", function (event) {
//  // event.stopPropagation();
//   console.log("Button clicked!");
//  });

//Q.10 Create a parent <div> containing a child button. Add click events to both elements and observe the order in which the events execute when the button is clicked.

// parent.addEventListener("click", function () {
//   console.log("Parent Clicked");
//  });

// childBtn.addEventListener("click", function () {
//  // event.stopPropagation();
//   console.log("Button clicked!");
// });

//Q.11

parent.addEventListener("click", function () {
  console.log("Parent Clicked");
 });

childBtn.addEventListener("click", function () {
 // event.stopPropagation();
  console.log("Button clicked!");
},true);


// Event Delegation


//Q.12

//Create multiple buttons inside a parent <div>. Add only one event listener to the parent and use event  delegation to identify which button was clicked.


let buttons=document.getElementById("buttons");

buttons.addEventListener("click",function(event){
   if (event.target.tagName === "BUTTON") {
 console.log(`${event.target.textContent} button clicked`);
   }
});
//.Q13
//Create a list of items and add one event listener to the <ul>. Use event delegation to display the text of the clicked list item.

let list=document.getElementById("list");
list.addEventListener("click",function(event){
   if (event.target.tagName === "LI") {
 console.log(`  ${event.target.textContent} chosen`);
   }

})