var cart = [];
var cartItem = 0;

//INITIAL CONSTRUCTOR FUNCTION WITH GLAZE AND QUANTITY INPUTS, STORES INPUTS
function selectedRoll(glaze, quantity, price) {
    this.glaze = glaze;
    this.quantity = quantity;
    this.price = price;
}

//UPDATES GLAZE BASED ON MOUSE CLICK
function glaze1(){
    selectedRoll.glaze = "none";
    document.getElementById("img1").src= "images/pumpkin.jpg";
}

function glaze2(){
    selectedRoll.glaze = "doubleChocolate";
    document.getElementById("img1").src= "images/chocolate.jpg";
}

function glaze3(){
    selectedRoll.glaze = "sugarMilk";
    document.getElementById("img1").src= "images/sugarmilk.jpg";
}

// UPDATES QUANTITY BASED ON MOUSE CLICK
function quantity1(){
    selectedRoll.quantity = "one";
    selectedRoll.price = "$3";
}

function quantity2(){
    selectedRoll.quantity = "six";
    selectedRoll.price = "$15";
}

function quantity3(){
    selectedRoll.quantity = "twelve";
    selectedRoll.price = "$30";
}

function pumpkinGlaze(){
    console.log(selectedRoll.glaze); // checking to see if correct glaze is selected onclick
    //background neutral for non selected elements
    document.getElementById("none").style.background="";
    document.getElementById("doubleChocolate").style.background="";
    document.getElementById("sugarMilk").style.background="";
    //text black for non selected elements
    document.getElementById("none").style.color="";
    document.getElementById("doubleChocolate").style.color="";
    document.getElementById("sugarMilk").style.color="";
    //lowered opacity for non selected elements
    document.getElementById("none").style.opacity="0.4";
    document.getElementById("doubleChocolate").style.opacity="0.4";
    document.getElementById("sugarMilk").style.opacity="0.4";
    // styling for selected element
    document.getElementById(selectedRoll.glaze).style.background = "#C17740";
    document.getElementById(selectedRoll.glaze).style.color = "#FFF";
    document.getElementById(selectedRoll.glaze).style.opacity = "1";
}

function pumpkinQuantity(){
    console.log(selectedRoll.quantity); // checking to see if correct glaze is selected onclick
    //background neutral for non selected elements
    document.getElementById("one").style.background="";
    document.getElementById("six").style.background="";
    document.getElementById("twelve").style.background="";
    //text black for non selected elements
    document.getElementById("one").style.color="";
    document.getElementById("six").style.color="";
    document.getElementById("twelve").style.color="";
    //lowered opacity for non selected elements
    document.getElementById("one").style.opacity="0.4";
    document.getElementById("six").style.opacity="0.4";
    document.getElementById("twelve").style.opacity="0.4";
    // styling for selected element
    document.getElementById(selectedRoll.quantity).style.background = "#C17740";
    document.getElementById(selectedRoll.quantity).style.color = "#FFF";
    document.getElementById(selectedRoll.quantity).style.opacity = "1";
    document.getElementById("price").textContent = selectedRoll.price; //update price
}

function addCart() {
    cart.push([selectedRoll.glaze, selectedRoll.quantity, selectedRoll.price]); //pushes glaze, quantity and price to empty array for storage
    cartItem = cart.length; //updates length
    document.getElementById("cartNumber").textContent = cartItem; //populates new cart item number
    console.log(cart);

// PUSH CART AND CART LENGTH TO LOCAL STORAGE
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("cartLength", JSON.stringify(cart.length));
}

//BUTTON HOVER STYLING
function buttonHover() {
    document.getElementById("pumpkin").style.background = "#F68838";
    document.getElementById("pumpkin").style.color = "#FFF";
    document.getElementById("pumpkin").style.border = "1px solid white";
    document.getElementById("pumpkin").style.cursor = "pointer";
}

function buttonOut() {
    document.getElementById("pumpkin").style.background = "";
    document.getElementById("pumpkin").style.color = "";
    document.getElementById("pumpkin").style.border = "";
    document.getElementById("pumpkin").style.cursor = "";
}

function buttonHover2() {
    document.getElementById("caramel").style.background = "#F68838";
    document.getElementById("caramel").style.color = "#FFF";
    document.getElementById("caramel").style.border = "1px solid white";
    document.getElementById("caramel").style.cursor = "pointer";
}

function buttonOut2() {
    document.getElementById("caramel").style.background = "";
    document.getElementById("caramel").style.color = "";
    document.getElementById("caramel").style.border = "";
    document.getElementById("caramel").style.cursor = "";
}

function buttonHover3() {
    document.getElementById("walnut").style.background = "#F68838";
    document.getElementById("walnut").style.color = "#FFF";
    document.getElementById("walnut").style.border = "1px solid white";
    document.getElementById("walnut").style.cursor = "pointer";
}

function buttonOut3() {
    document.getElementById("walnut").style.background = "";
    document.getElementById("walnut").style.color = "";
    document.getElementById("walnut").style.border = "";
    document.getElementById("walnut").style.cursor = "";
}

function primaryHover() {
    document.getElementById("primary").style.cursor = "pointer";
}

function primaryOut() {
    document.getElementById("primary").style.cursor = "pointer";
}
