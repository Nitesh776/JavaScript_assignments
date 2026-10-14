
// Q1 /Q2
let form=document.querySelector('#myForm');

// form.addEventListener('submit', (event) =>{
//     event.preventDefault(); // Prevent the default form submission behavior 

//     console.log('Form submitted successfully!');

// });


//Create an input field and use the input event to display the value entered by the user in a paragraph.
const nameInput=document.querySelector('#name'); 
form.addEventListener('submit', (event) =>{
    event.preventDefault(); 
 const value=document.querySelector('#name').value;
 console.log(value); 

  
});

//Q.4 Create a <select> dropdown containing three programming languages. Use the change event to display the selected language.

const skilltest=document.querySelector('#skills');
skilltest.addEventListener('change', (event) =>{
   
   // console.log(event.target);
    //console.log(event.currentTarget);
    //console.log(event)
   // console.log(event.target.value);

   if(event.target.value){
   // console.log('Please select a language');
    console.log(event.target.value);
   }
}
);


//Q.5  Create an input field and use the focus event to change its border or background color when the user clicks inside it.

nameInput.addEventListener('focus', (event) =>{
   
   console.log("Nitesh" );
   nameInput.style.border='2px solid blue';
   nameInput.style.outlineColor='pink';

});

//Q.6 Create an input field and use the blur event to validate the input when the user clicks outside of it.

//Q.6

//Create an input field and use the blur event to display a message when the user moves away from the input field

nameInput.addEventListener('blur', (event) =>{
   
   console.log("You left the input field" );
   

});

//Q.7 Create a form with a name input. When the form is submitted, check whether the name field is empty.
//Display an error message if it 
// is empty.



// form.addEventListener('submit', (event) =>{
//     event.preventDefault(); 
//     const value=document.querySelector('#name').value;
//     if(!value){
//         console.log("Name field is empty");
//         return;
//     }
//     console.log({name: value});
// });


//Q.8

// const emailInput=document.querySelector('#email');
// form.addEventListener('submit', (event) =>{
//     event.preventDefault(); 
//     const value=document.querySelector('#email').value;
//     if(!value){
//         console.log("Email field is empty");
//         return;
//     }
//     console.log({email: value});
// });


//Q.9

// const passwordInput=document.querySelector('#password');

// form.addEventListener('submit', (event) =>{
//     event.preventDefault(); 
    
//     const password=document.querySelector('#password').value;
//     if(!password){
//         console.log("Password field is empty");
//         return;
//     }
//     console.log({password: password});
// });


//Q. 8,9,10

const nameValue=document.querySelector('#name');
const emailValue=document.querySelector('#email');
const passwordValue=document.querySelector('#password');

form.addEventListener('submit', (event) =>{
   event.preventDefault();


const email=emailValue.value;
const password=passwordValue.value;
const name1=nameValue.value;

if(!name1){
   console.log("Name field is required");
   return;
}

if(!email){
   console.log("Email field is required");
   return;
}  
if(!password){
   console.log("Password field is required");
   return;
}  

if(password.length<6){   
   console.log("Password must be at least 6 characters long");
   return;
}
console.log({name:name1, email,password});
});
