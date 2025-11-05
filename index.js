function changeText(){
    const title = document.getElementById("mainTitle");
    title.innerText = "DOM Selectors in Action";
    title.style.color = "purple";
}

const boxes = document.getElementsByClassName("box");
for(let i = 0 ; i < boxes.length ; i++){
    boxes[i].style.border = "5px solid black";
}

// getElementById selects single id and it changes mainTitle but for applying border to all box at once we cant do that with getElementById so we use  getElementsByClassName

const specialBox = document.querySelector(".box.special");
specialBox.innerText = "I am Special";
specialBox.style.backgroundColor = "orange";
specialBox.style.color = "white"

// since we have used document.querySelector only 1st class will be changed that is <div class="box special">2</div>

const specialBox1 = document.querySelectorAll(".boxes");

specialBox1.forEach((box) => {
  box.innerText = "I am Special";
  box.style.backgroundColor = "orange";
  box.style.color = "white";
});

// document.querySelectorAll(".boxes") → selects all elements with class "boxes"