"use strict";
/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 3


   Filename: mas_register.js

   Author: Dylan Kelley 
   Date:   4.23.19 
   
   Function List
   =============
   
   formTest()
      Performs a validation test on the selection of the conference
      session package and the conference discount number
   
   calcCart()
      Calculates the cost of the registration and saves data
      in session storage
      
   writeSessionValues()
      Writes data values from session storage in to the
      registration summary form


*/

/// Event listener to run the following anonymous function when the page loads.
window.addEventListener('load', function () {
      calcCart();

      /// Event handler for the regSubmit button that runs the sessionTest() function when the button is clicked.
      document.getElementById("regSubmit").addEventListener('click', sessionTest);

      /// Event handler for the input box with the ID of "fnBox" that runs the calcCart() function in response to the event.
      document.getElementById("fnBox").addEventListener('blur', calcCart);

      /// Event handler for the input box with the ID of "lnBox" that runs the calcCart() function in response to the event.
      document.getElementById("lnBox").addEventListener('blur', calcCart);

      /// Event handler for the input box with the ID of "groupBox" that runs the calcCart() function in response to the event.
      document.getElementById("groupBox").addEventListener('blur', calcCart);

      /// Event handler for the input box with the ID of "mailBox" that runs the calcCart() function in response to the event.
      document.getElementById("mailBox").addEventListener('blur', calcCart);

      /// Event handler for the input box with the ID of "phoneBox" that runs the calcCart() function in response to the event.
      document.getElementById("phoneBox").addEventListener('blur', calcCart);

      /// Event handler for the input box with the ID of "banquetBox" that runs the calcCart() function in response to the event.
      document.getElementById("banquetBox").addEventListener('blur', calcCart);

      /// Event handler for the selection list with the ID of "sessionBox" that runs the calcCart() function when the selection list is changed.
      document.getElementById("sessionBox").addEventListener('change', calcCart);

      /// Event handler for the mediaCB check box that runs the calcCart() function in response.
      document.getElementById("mediaCB").addEventListener('click', calcCart);
});

// Func: Provides a validation test for the conference session selection list.
function sessionTest() {
      var sessionBox = document.getElementById("sessionBox");

      // If: Tests if the selected index of the sessionBox selection list is eqaul to -1
      if (sessionBox.selectedIndex === -1) {
            sessionBox.setCustomValidity("Select a Session Package");
      }
      // Else: The user has selected a session package.
      else {
            sessionBox.setCustomValidity("");
      }
}

// Func: Calculates the cost of the registration and saves data in session storage.
function calcCart() {
      /// Stores the values of the group, email, phoneNumber, and banquetGuests fields in the session storage variables: confGroup, confMail, confPhone, and confBanquet.
      var confGroup = document.getElementById("groupBox").value;

      var confMail = document.getElementById("mailBox").value;

      var confPhone = document.getElementById("phoneBox").value;

      var confBanquet = document.getElementById("banquetBox").value;

      var confBanquetCost = confBanquet * 55;

      if (sessionBox.selectedIndex !== -1) {
            var confSession = sessionBox.selectedIndex;
      } else {

      }
}