
//1. Select an Element by ID
//Create a heading with an id of title and use getElementById() to select it and change its text.
document.getElementById("title").textContent = "Hello JavaScript";

//2. select an element using querySelector()

let description = document.querySelector(".description").textContent = "This is a NEW description changed using querySelector()"; 
console.log(description);

//3. Select Multiple Elements Using querySelectorAll()
//Create three <li> elements with the class item. Use querySelectorAll() to select all of them and change their text color using the style property.


let items = document.querySelectorAll(".item");
for (let i = 0; i < items.length; i++) {
  items[i].style.color = "pink";
}
console.log(items);

//4. Change Content Using textContent
//Create a paragraph containing some text and use textContent to replace its content with a new message

let message=document.querySelector("#message");
message.textContent="Welcome to JavaScript!";
console.log(message);

//5. 5. Add HTML Using innerHTML
//Create a <div> with an id of container and use innerHTML to add a heading and a paragraph inside it.

let container = document.querySelector("#container");
container.innerHTML = "<h2>New Heading</h2> <p>This is a new paragraph added using innerHTML.</p>";

//q.6
const profileImage = document.querySelector("#profileImage");

profileImage.setAttribute("src","https://avatars.githubusercontent.com/u/182756479?v=4");

profileImage.setAttribute("alt","Nitesh github profile Image");


//7. Add and Remove Classes Using classList

//Create a button and use classList.add() to add a class to it. Then use classList.remove() to remove the class.

const btn = document.querySelector("#btn");
btn.classList.add("red");
btn.classList.remove("red");
btn.classList.toggle("red")//remove h to add and vice , versa


//8. Modify Element Style
//Create a heading and use the style property to change its color, fontSize, and backgroundColor.

const heading =document.querySelector("#heading");

heading.style.color ="pink";
heading.style.fontSize ="60px";
heading.style.backgroundColor ="black";

//9. Read Data Using dataset Create a button with a custom data-id attribute and use the dataset property to read its value.

let productBtn =document.querySelector("#productBtn");

//Dataset --> attribute --> extra info to element

const value = productBtn.dataset.id //reading from dataset

console.log(value);

productBtn.dataset.email="nitesh@example.com";//writing


//Section 3 - Creating and Adding Elements

//10. Create an Element Using createElement()

// Create a new <p> element using createElement(), add some text to it using textContent, and display it on the webpage.

const pTag =document.createElement("p");
pTag.textContent='This paragraph was created using JavaScript.';

const body =document.querySelector("body");
body.append(pTag);


//11. Create a <ul> in HTML. Use JavaScript to create a new <li> element and add it to the list using appendChild().



const skills =document.querySelector("#skills");

//Basic
// const li1 =document.createElement('li')
// const li2 =document.createElement('li')
// const li3 =document.createElement('li')
// li1.textContent="HTML";
// li2.textContent="CSS";
// li3.textContent="JavaScript";
// skills.append(li1,li2,li3);

//advance


let skillsArr =["JavaScript","Python","Java","C++","C","PHP","SQL"];
skillsArr.forEach((skill)=>{
  const li =document.createElement("li")
  li.textContent =skill
  skills.append(li)
 //skills.prepend(li);
})


//Create a list and use append() to add an item at the end and prepend() to add an item at the beginning.

let skillsArr1 =["HTML","CSS","React","JavaScript","Python","Java","C++","C","PHP","SQL"];
skillsArr1.forEach((skill)=>{
  const li =document.createElement("li")
  li.textContent =skill
  li.style.color ="red"
 skills.prepend(li);
})


// q.13 Create a list containing three items and use insertBefore() to insert a new item before the second item.

const skills2=document.querySelector("#skills2");
const css =document.createElement("li");
console.log(skills.children[3]);
css.textContent="React";
skills2.insertBefore(css,skills2.children[3]);

//q.14
//Create a list containing three items and remove one item using either removeChild() or remove().



skills2.children[1].remove();

//Create a button and use cloneNode() to create a copy of the button. Add the cloned button to the webpage.


const btn2=btn.cloneNode(true)
body.append(btn2)