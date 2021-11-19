


//----------------------------------------------------------------
//How do we get the images?
        let darkMode = false;
        let themeBtn = document.getElementById("getMoon");
        let background = document.body.style;


    function darkModeF() {
    // console.log("Dark")
        themeBtn.src = "./images/icon-sun.svg";
    //How do we get the background color of the whole HTML page
        background.backgroundColor = 'rgb(20,29,47)';
        
        darkMode = true;
    }
//##################################################################
    function lightModeF() {
    // console.log("Light")
        themeBtn.src = "./images/icon-moon.svg";
    //How do we get the background color of the whole HTML page
        background.backgroundColor = 'hsl(185, 41%, 84%)';
        
        darkMode = false;
    }

//###################################################################
//How do I make my image clickable?
    themeBtn.addEventListener('click', function () {
    
        if (darkMode == false) {

            darkModeF();

        } else {

            lightModeF();
        }

    })
//------------------------------------------------------------------



// How can we record what input we put in the bill?

// How do we get the bill input?
    let billInput = document.getElementById("bill-input");

// How do we make something run when we put something in the input?
    billInput.addEventListener("change", function () {
        
        console.log(billInput.value)
    })



//How do we get access to all the buttons
    let percent = document.querySelectorAll(".getBtns")
// console.log(percent)
//How do we give each one an eventListener?
// .forEach() is an Array method
    percent.forEach((btn) => {
        btn.addEventListener("click", function () {
            //How do we gain access to the different percent values?
                console.log(btn.innerText)
            //How to we change the value from a string to the percent a number value?
                console.log(parseFloat(btn.innerText)/100)
        })
    })





let people = document.getElementById("pplInput")

people.addEventListener("change", function() {
    console.log(people.value)
})
