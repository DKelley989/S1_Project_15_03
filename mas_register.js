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
      sessionStorage.setItem("confGroup", document.getElementById("groupBox").value);
      sessionStorage.setItem("confPhone", document.getElementById("phoneBox").value);
      sessionStorage.setItem("confMail", document.getElementById("mailBox").value);
      sessionStorage.setItem("confBanquet", document.getElementById("banquetBox").value);

      var confBanquet = document.getElementById("banquetBox").value;

      /// Multiplies the value of the banquetGuests field by 55.
      sessionStorage.setItem("confBanquetCost", confBanquet * 55);

      // Var: Refers the sessionBox selection list.
      var sessionBox = document.getElementById("sessionBox");

      // If: Checks if the selected index of the sessionBox selection list is not equal to -1.
      if (sessionBox.selectedIndex !== -1) {
            /// Stores the text of the selected option in the session storage variable confSession and the value of the selected option in the confSessionCost sesson storage variable. Otherwise stores an empty text string and the value 0 respectively.
            sessionStorage.setItem("confSession", "");
            sessionStorage.setItem("confPackCost", 0);
            var confPackCost = 0;
      } else {
            sessionStorage.setItem("confSession", "");
            sessionStorage.setItem("confPackCost", 115);
            var confPackCost = 115;
      }

      // If: Checks if the user has clicked the mediaCB checkbox.
      if (document.getElementById("mediaCB").checked === true) {

            /// Stores the values “yes” and 115 in the confPack and confPackcost session storage variables. Otherwise store the values “no” and 0.
            sessionStorage.setItem("confPack", "yes");
            sessionStorage.setItem("confPackCost", 115);
            var confPackCost = 115;
      } else {
            sessionStorage.setItem("confPack", "no");
            sessionStorage.setItem("confPackCost", 0);
            var confPackCost = 0;
      }

      /// Calculates the total regisstration cost.
      sessionStorage.setItem("confTotal", parseFloat(confSessionCost) + parseFloat(confBanquetCost) + parseFloat(confPackCost));

      /// Calls the writeSessionValues() function.
      writeSessionValues();

      // Func: Writes data values from session storage in to the registration summary form.
      function writeSessionValues() {
            /// Sets the text content of span elements with the IDs “regName”, “regGroup”, “regEmail”, “reg- Phone”, “regSession”, “regBanquet”, and “regPack”, to the values of the session storage vari- ables, confName, confGroup, confMail, confPhone, confSession, confBanquet, and confPack.
            document.getElementById("regName").textContent = sessionStorage.getItem("confName");
            document.getElementById("regGroup").textContent = sessionStorage.getItem("confGroup");
            document.getElementById("regEmail").textContent = sessionStorage.getItem("confMail");
            document.getElementById("regPhone").textContent = sessionStorage.getItem("confPhone");
            document.getElementById("regSession").textContent = sessionStorage.getItem("confSession");
            document.getElementById("regBanquet").textContent = sessionStorage.getItem("confBanquet");
            document.getElementById("regPack").textContent = sessionStorage.getItem("confPack");
            document.getElementById("regTotal").textContent = "$" + sessionStorage.getItem("confTotal");
      }
}