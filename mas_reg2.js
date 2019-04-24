"use strict";
/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Case Problem 3


   Filename: mas_reg2.js

   Author: Dylan Kelley 
   Date:   4.23.19 


   Function List
   =============
      
   writeSessionValues()
      Writes data values from session storage in to the
      registration summary form


*/

/// Event listener that runs the writeSessionValues() variable when the page loads.
window.addEventListener('load', writeSessionValues);

// Func: Writes data values from session storage in to the registration summary form.
function writeSessionValues() {
      document.getElementById("regName").textContent = sessionStorage.getItem("confName");
      document.getElementById("regGroup").textContent = sessionStorage.getItem("confGroup");
      document.getElementById("regEmail").textContent = sessionStorage.getItem("confMail");
      document.getElementById("regPhone").textContent = sessionStorage.getItem("confPhone");
      document.getElementById("regSession").textContent = sessionStorage.getItem("confSession");
      document.getElementById("regBanquet").textContent = sessionStorage.getItem("confBanquet");
      document.getElementById("regPack").textContent = sessionStorage.getItem("confPack");
      document.getElementById("regTotal").textContent = "$" + sessionStorage.getItem("confTotal");
}