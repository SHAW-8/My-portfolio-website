// function wordChecker(){
// //paste your paragraph here
// function pasteParagraph(){
//   const inputElement = document.getElementById("paragraphBox");
//     inputElement.addEventListener("input", function() {
//         const para = inputElement.value;
//        /* console.log(para);*/return para;
//       }
//     );
// }

// //Paste our word here\
// function insertWord(){
// const inputElement = document.getElementById("wordChoice");
//   inputElement.addEventListener("input", function() {
//       const word= inputElement.value;
//      /*console.log(word);*/return word;
//     }
//   );
// }

// let paragraph = pasteParagraph();
//   let regex = new RegExp(insertWord());
//     let result = regex.test(paragraph)
//       console.log(result);

// }

function wordChecker() {
  // Get the paragraph and word from the input fields
  const paragraph = document.getElementById("paragraphBox").value;
  const word = document.getElementById("wordChoice").value;

  // Create a regular expression to match the word (case-insensitive)
  const regex = new RegExp("\\b" + word + "\\b", "i");

  // Test if the word is present in the paragraph
  const result = regex.test(paragraph);

  // Display the result
  const resultElement = document.getElementById("result");
  resultElement.textContent = "Result: " + (result ? "Duplicate's found!" : " No duplicate found.");
}

// const myButton = document.getElementById('myButton');
// myButton.addEventListener('click', wordChecker())
