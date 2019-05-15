// This program calculates the user's fortune based on their menu selections

// Declare variables
var starter = "";
var entree = "";
var dessert = "";
var drinks = "";

var career = ""; //starter
var place = ""; //drinks
var married = ""; //dessert
var kids = ""; //entree

var yourFortune = "";
var errorFortune = "";
var mainFortune = "";

// This function is triggered by clicking on the cookie
function showFortune() {
  console.log("working");
  // Submit form
  // document.getElementById("menumenu").submit();

  // Adjust page styling to accomodate fortune at the bottom
  // Eventually want to bump up sub padding to 600px and insert illustration of Chinese to-go container with chopsticks. "Da bao!"
  document.getElementById('result').className += ' p-5 mb-32';

  // Store form values
  starter = document.getElementById("menumenu").startersID.value;
  entree = document.getElementById("menumenu").entreesID.value;
  dessert = document.getElementById('menumenu').dessertsID.value;
  drinks = document.getElementById('menumenu').drinksID.value;

  // Calculate fortune
  // In version 2, this will be replaced with objects and loops for more sophisticated fortune calculations
  if ( (starter == "") || (entree == "") || (dessert == "") || (drinks == "") ) {
    errorFortune = "You're not very good at following directions...";
  } else {
    if (starter == "Roti") {
      career = " steamy romance novelist (under a pseudoname of course)";
    } else if (starter == "Kaya") {
      career = "n influential media personality";
    } else if (starter == "Bao") {
      career = "n internationally successful designer";
    }
    if (entree == "Nasi") {
      kids = "a veritable army of children.";
    } else if (entree == "Chicken") {
      kids = "no children.";
    }
    if (drinks == "Kopi") {
      place = " with vacation homes in Scandinavia,";
    } else if (drinks == "Milo") {
      place = " who lives in a luxurious European apartment,";
    } else if (drinks == "Bubble") {
      place = ", breathlessly admired by K-pop stars,";
    } else if (drinks == "Singapore") {
      place = " and jetsetter, visiting exotic locales on a whim,";
    }
    if (dessert == "HK") {
      married = "to a sweet and loving partner";
    } else if ( dessert == "Pocky") {
      married = "a mysterious and passionate stranger";
    }
    // Reset error message
    errorFortune = "";
    // Store fortune
    mainFortune = "You will be a" + career + place + " while married to " + married + " with " + kids;
  }

  // Assemble fortune
  yourFortune = "<center>" + errorFortune + mainFortune + "<br><br>Lucky numbers: <font color='red'>" + Math.floor((Math.random() * 100) + 1) + ", " + Math.floor((Math.random()*100) + 1) + ", " + Math.floor((Math.random()*100) + 1) + ", " + Math.floor((Math.random()*100) + 1) + ", " + Math.floor((Math.random()*100) + 1) + ", " + Math.floor((Math.random()*100) + 1) + "</font></center>";

  // Display fortune
  document.getElementById("result").innerHTML = yourFortune;
}

function reloadPage() {
  window.location.reload();
}
