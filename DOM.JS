function changeText(){
    const element = document.getElementById("title");
    element.innerText = "You clicked the button ! ";
    element.style.color = "blue";
    element.style.fontSize = "40px";
}
// document.getElementById("id_name"); It selects an HTML element using its id element.innerText = "You clicked the button" It means whenever this function is executed I want the text You clicked the button
// innerText → changes the visible text inside that element.

function changeBg(color){
    document.body.style.backgroundColor = color;
}
// body -> It points to the <body> tag 
// style -> Give access to the inline css

//  document.body.style.backgroundColor = color; means 
// “Hey browser, go to the <body> of this webpage and set its background color .”

//Both produces same result 

// const element = document.getElementById("title"); element.innerText = "You clicked the button ! "; 

// document.getElementById("title").innerText = "You clicked the button !";

function changeHTML(){
    const element = document.getElementById("title1");
    element.innerHTML = "<span style='color: red; font-weight: bold;'>Hello <u>JavaScript</u>!</span>";
}

function changeStyle(){
    const box = document.getElementById("box");
    box.style.backgroundColor = "red";
    box.style.color = "black";
    box.style.padding = "20px";
    box.style.fontSize = "20px";
    box.style.borderRadius = "10px"
}

function changeBoxes(){
    const boxes = document.getElementsByClassName("box1");

    for(let i = 0 ; i < boxes.length ; i++){
        boxes[i].style.backgroundColor = "green";
        boxes[i].style.color = "red";
        boxes[i].style.padding = "20px";
    }
}
// For selecting single element we write document.getElementById() For selecting multiple elements we write document.getElementsByClassName()

function changeText(){
    const para = document.querySelector(".info");
    para.innerText = "The text has been changed!";
}