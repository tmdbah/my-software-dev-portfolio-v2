/* ---------------------------------------------------- NAV Bar toggle menu script */

const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu"); 

/* Toggle mobile menu */
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");

        //adds the menu (hamburger) icon
        toggle.querySelector("a").innerHTML = "<i class='fa fa-bars'></i>";
    } else {
        menu.classList.add("active");

        //adds the close (x) icon
        toggle.querySelector("a").innerHTML = "<i class='fa fa-times'></i>";
    }
}

/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);

/* ------------------------------------------------------ Back to Top scroll button */

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/* --------------------------------------------------------------- Modal scripts */

/* -------------------------------------------------- cbsa Modal */ 

// Get the modal
var cbsaModal = document.getElementById("myCbsaModal");

// Get the button that opens the modal
var cbsaBtn = document.getElementById("cbsaModal");

// Get the <span> element that closes the modal
var cbsaSpan = document.getElementsByClassName("cbsaClose")[0];

// When the user clicks on the button, open the modal
cbsaBtn.onclick = function() {
    cbsaModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
cbsaSpan.onclick = function() {
    cbsaModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == cbsaModal) {
    cbsaModal.style.display = "none";
  }
}

/* -------------------------------------------------- hds Modal */ 

// Get the modal
var hdsModal = document.getElementById("myHdsModal");

// Get the button that opens the modal
var hdsBtn = document.getElementById("hdsModal");

// Get the <span> element that closes the modal
var hdsSpan = document.getElementsByClassName("hdsClose")[0];

// When the user clicks on the button, open the modal
hdsBtn.onclick = function() {
    hdsModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
hdsSpan.onclick = function() {
    hdsModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == hdsModal) {
    hdsModal.style.display = "none";
  }
}

/* -------------------------------------------------- sdpv2 Modal */ 

// Get the modal
var sdpv2Modal = document.getElementById("mySdpv2Modal");

// Get the button that opens the modal
var sdpv2Btn = document.getElementById("sdpv2Modal");

// Get the <span> element that closes the modal
var sdpv2Span = document.getElementsByClassName("sdpv2Close")[0];

// When the user clicks on the button, open the modal
sdpv2Btn.onclick = function() {
    sdpv2Modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
sdpv2Span.onclick = function() {
    sdpv2Modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == sdpv2Modal) {
    sdpv2Modal.style.display = "none";
  }
}

/* -------------------------------------------------- sdpv1 Modal */ 

// Get the modal
var sdpv1Modal = document.getElementById("mySdpv1Modal");

// Get the button that opens the modal
var sdpv1Btn = document.getElementById("sdpv1Modal");

// Get the <span> element that closes the modal
var sdpv1Span = document.getElementsByClassName("sdpv1Close")[0];

// When the user clicks on the button, open the modal
sdpv1Btn.onclick = function() {
    sdpv1Modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
sdpv1Span.onclick = function() {
    sdpv1Modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == sdpv1Modal) {
    sdpv1Modal.style.display = "none";
  }
}

/* -------------------------------------------------- rca Modal */ 

// Get the modal
var rcaModal = document.getElementById("myRcaModal");

// Get the button that opens the modal
var rcaBtn = document.getElementById("rcaModal");

// Get the <span> element that closes the modal
var rcaSpan = document.getElementsByClassName("rcaClose")[0];

// When the user clicks on the button, open the modal
rcaBtn.onclick = function() {
  rcaModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
rcaSpan.onclick = function() {
  rcaModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == rcaModal) {
    rcaModal.style.display = "none";
  }
}

/* -------------------------------------------------- adc Modal */ 

// Get the modal
var adcModal = document.getElementById("myAdcModal");

// Get the button that opens the modal
var adcBtn = document.getElementById("adcModal");

// Get the <span> element that closes the modal
var adcSpan = document.getElementsByClassName("adcClose")[0];

// When the user clicks on the button, open the modal
adcBtn.onclick = function() {
  adcModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
adcSpan.onclick = function() {
  adcModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == adcModal) {
    adcModal.style.display = "none";
  }
}

/* -------------------------------------------------- ga Modal */ 

// Get the modal
var gaModal = document.getElementById("myGaModal");

// Get the button that opens the modal
var gaBtn = document.getElementById("gaModal");

// Get the <span> element that closes the modal
var gaSpan = document.getElementsByClassName("gaClose")[0];

// When the user clicks on the button, open the modal
gaBtn.onclick = function() {
  gaModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
gaSpan.onclick = function() {
  gaModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == gaModal) {
    gaModal.style.display = "none";
  }
}

/* -------------------------------------------------- ds Modal */ 

// Get the modal
var dsModal = document.getElementById("myDsModal");

// Get the button that opens the modal
var dsBtn = document.getElementById("dsModal");

// Get the <span> element that closes the modal
var dsSpan = document.getElementsByClassName("dsClose")[0];

// When the user clicks on the button, open the modal
dsBtn.onclick = function() {
  dsModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
dsSpan.onclick = function() {
  dsModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == dsModal) {
    dsModal.style.display = "none";
  }
}

/* -------------------------------------------------- ossl Modal */ 

// Get the modal
var osslModal = document.getElementById("myOsslModal");

// Get the button that opens the modal
var osslBtn = document.getElementById("osslModal");

// Get the <span> element that closes the modal
var osslSpan = document.getElementsByClassName("osslClose")[0];

// When the user clicks on the button, open the modal
osslBtn.onclick = function() {
  osslModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
osslSpan.onclick = function() {
  osslModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == osslModal) {
    osslModal.style.display = "none";
  }
}

/* -------------------------------------------------- dp Modal */ 

// Get the modal
var dpModal = document.getElementById("myDpModal");

// Get the button that opens the modal
var dpBtn = document.getElementById("dpModal");

// Get the <span> element that closes the modal
var dpSpan = document.getElementsByClassName("dpClose")[0];

// When the user clicks on the button, open the modal
dpBtn.onclick = function() {
  dpModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
dpSpan.onclick = function() {
  dpModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == dpModal) {
    dpModal.style.display = "none";
  }
}