let yourscore = 0;
let compscore = 0;

const choose = document.querySelectorAll(".choose-box");
const cmpchoice = document.querySelector("#compselect");
const youchoice = document.querySelector("#youselect");
const cmpscore = document.querySelector("#comp-score");
const youscore = document.querySelector("#your-score");
const result=document.querySelector(".result");
const reset=document.querySelector(".reset");



const gencompchoice = () => {
  const options = ["rock", "paper", "scissor"];
  const randindex = Math.floor(Math.random() * 3);
  return options[randindex];
};



const draw = () => {
  result.innerText="Game was draw";
    result.style.backgroundColor="grey";
};

const showwinner = (youwin) => {
  if (youwin) {
    yourscore++;
    youscore.innerText=yourscore;
    result.innerText="Your Win";
    result.style.backgroundColor="green";
    result.style.color="white";

  } else {
    compscore++;
    cmpscore.innerText= compscore;
    result.innerText="Your lose";
    result.style.backgroundColor="Red";
    result.style.color="white";

  }
};

const playgame = (yourchoice) => {
  const compchoice = gencompchoice();
  cmpchoice.innerText = compchoice;
  youchoice.innerText = yourchoice;
  if (yourchoice === compchoice) {
    draw();
  } else {
    let youwin = true;
    if (yourchoice === "rock") {
      youwin = compchoice === "paper" ? false : true;
    } else if (yourchoice === "paper") {
      youwin = compchoice === "scissor" ? false : true;
    } else {
      youwin =compchoice === "rock" ? false : true;
    }
    showwinner(youwin);
  }
};

choose.forEach((box) => {
  box.addEventListener("click", () => {
    const yourchoice = box.getAttribute("id");
    playgame(yourchoice);
  });
});

resetfunc=()=>
{
    cmpchoice.innerText = " ";
    youchoice.innerText = " ";
    yourscore=youscore.innerText= 0;
    compscore=cmpscore.innerText= 0;
    result.innerText="Result";
    result.style.backgroundColor="coral";
    result.style.color="black";

}
reset.addEventListener("click",resetfunc);
