/*
 * Starter file 
 */
(function() {
  "use strict";
  //console.log("Window Loaded!");
  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);
  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    let encryptButt = document.getElementById("encrypt-it");
    encryptButt.addEventListener("click", handleEncryptIt);
    //console.log("Window Loaded!");

    let resetButt = document.getElementById("reset");
    resetButt.addEventListener("click", handleReset)
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).
  function handleEncryptIt(){
    let text = document.getElementById("input-text").value;
    let encryptedMsg = encryptMessage(text);
    
    let outputText = document.getElementById("result");
    outputText.textContent = encryptedMsg;
  }

  function handleReset() {
    let textField = document.getElementById("input-text");
    textField.value = "";

    let outputText = document.getElementById("result");
    outputText.textContent = "";
  }

  function encryptMessage(plaintex) {
    let z = "z".charCodeAt(0);
    let a = "a".charCodeAt(0);
    
    plaintex = plaintex.toLowerCase();

    let cipher = [];

    for (let i = 0; i < plaintex.length; i++) {
      if (plaintex.charCodeAt(i) >= a && plaintex.charCodeAt(i) <= z) {
        let char = plaintex.charCodeAt(i) + 1;

        if (char > z) {
          char = a;
        }

        cipher.push(String.fromCharCode(char));
      } else {
        cipher.push(plaintex.charAt(i));
      } 
      
    }

    return cipher.join("");
  }
})();
