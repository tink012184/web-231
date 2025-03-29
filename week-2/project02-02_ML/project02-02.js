/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Melissa Lutz
      Date:   3/29/2025

      Filename: project02-02.js
 */

function verifyForm() {
  let name = document.getElementById("name").value;

  let email = document.getElementById("email").value;

  let phone = document.getElementById("phone").value;

  if (name != "" && email != "" && phone != "") {
    window.alert("Thank you!");
  } else {
    window.alert("Please fill in all fields");
  }
}

let submitButton = document.getElementById("submit");

submitButton.addEventListener("click", verifyForm);
