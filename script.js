// Create a function named “main”.
const main = () => {
  //Add the "big" class to the "grow-me" paragraph.
  const addBig = document.getElementById("grow-me");
  addBig.classList.add("big");
  //console.log(addBig);

  //Remove the "big" class from the "shrink-me" paragraph.
  const removeBig = document.getElementById("shrink-me");
  removeBig.classList.remove("big");
  console.log(removeBig);

  /*Find all the <li>s and log 
their text content to the console*/
  const logLi = document.querySelector("ol");
  //console.log(logLi.textContent);

  /*Set the href of the link to "https://www.example.com" 
and update the text to say "somewhere" instead of 
"nowhere".*/
  const setLink = document.querySelector(".link");
  setLink.href = "https://www.example.com";
  setLink.textContent = "somewhere";
  //console.log(setLink);

  /*Set the "display" CSS property of the 
"hide-me" paragraph to "none".*/
  const addDisplay = document.getElementById("hide-me");
  addDisplay.style.display = "none";
  //console.log(addDisplay);

  /*Set the "display" CSS property of the "show-me" 
paragraph to "block".*/
  const addBlock = document.getElementById("show-me");
  addBlock.style.display = "block";
  //console.log(addBlock);

  /*Get the text that the user enters into the "name" 
input box and use it to set a welcome message in the 
<h1>, e.g., "Welcome Grant!".*/
  const userInput = document.getElementById("name");
  const welcomeText = document.querySelector("h1");

  welcomeText.textContent = "Welcome " + userInput.value;
};
