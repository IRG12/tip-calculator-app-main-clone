//----------------------------------------------------------------
//How do we get the images?
let darkMode = false;
let themeBtn = document.getElementById("getMoon");
let background = document.body.style;

function darkModeF() {
  // console.log("Dark")
  themeBtn.src = "./images/icon-sun.svg";
  //How do we get the background color of the whole HTML page
  background.backgroundColor = "rgb(20,29,47)";

  darkMode = true;
}
//##################################################################
function lightModeF() {
  // console.log("Light")
  themeBtn.src = "./images/icon-moon.svg";
  //How do we get the background color of the whole HTML page
  background.backgroundColor = "hsl(185, 41%, 84%)";

  darkMode = false;
}

//###################################################################
//How do I make my image clickable?
themeBtn.addEventListener("click", function () {
  if (darkMode == false) {
    darkModeF();
  } else {
    lightModeF();
  }
});
//------------------------------------------------------------------
let bill = 0;
let amountOfPpl = 0;
let tipPerPerson;
// let totalTip;
// let totalAmountPerPerson;
let totalPerPerson;

let billInput = document.getElementById("bill-input");
let people = document.getElementById("pplInput");
let percent = document.querySelectorAll(".getBtns");
let customInput = document.getElementById("gridInput");

// How do we get the bill input?
// How do we make something run when we put something in the input?
billInput.addEventListener("change", function () {
  // console.log(billInput.value);
  //We got to store "bill" input when functions calls "bill" in it's perimeters. Do the same for the percentage and amountOfPpl SSSSSSOOOOOO...
  let bill = billInput.value;
  calSplit(bill, percent, amountOfPpl);
});

//How do we get access to all the buttons
//How do we give each one an eventListener?
// .forEach() is an Array method
percent.forEach((btn) => {
  btn.addEventListener("click", function () {
    //How do we gain access to the different percent values?
    // console.log(btn.innerText);
    //How to we change the value from a string to the percent a number value?
    // console.log(parseFloat(btn.innerText) / 100);

    percent = parseFloat(btn.innerText);

    calSplit(bill, percent, amountOfPpl);
  });
});

customInput.addEventListener("change", function () {
  // console.log(billInput.value);
  //We got to store "bill" input when functions calls "bill" in it's perimeters. Do the same for the percentage and amountOfPpl SSSSSSOOOOOO...
  customInputKey = Number.isInteger(parseInt(customInput.value));
  if (customInputKey == true) {
    percent = parseFloat(customInput.value);

    calSplit(bill, percent, amountOfPpl);
  } else {
    console.log(
      (document.getElementById("tip-amount").innerText =
        "It's a decimal. Please input a whole number")
    );
  }
});

people.addEventListener("change", function () {
  // console.log(people.value);
  let amountOfPpl = people.value;
  calSplit(bill, percent, amountOfPpl);
});

const resetCalc = () => {
  document.getElementById("tip-amount").innerText = "$0.00";
  document.getElementById("total-amount").innerText = "$0.00";
  billInput.value = 0;
  people.value = 0;
};

const calSplit = (bill, percentage, amountOfPpl) => {
  bill = parseInt(billInput.value);

  if (percentage == customInput || percentage == percent) {
    percentage = parseFloat(percentage) / 100;
  } else {
    ("CalcSplit not working");
  }

  amountOfPpl = parseFloat(people.value);

  console.log(bill);
  console.log(percentage);
  console.log(amountOfPpl);

  if (bill && percentage && amountOfPpl) {
    let tipPerPerson = (bill * percentage) / amountOfPpl;
    console.log(tipPerPerson);

    let totalPerPerson = bill / amountOfPpl + tipPerPerson;
    console.log(totalPerPerson);
    document.getElementById("tip-amount").innerText =
      "$" + tipPerPerson.toFixed(2);
    document.getElementById("total-amount").innerText =
      "$" + totalPerPerson.toFixed(2);
  }
};
