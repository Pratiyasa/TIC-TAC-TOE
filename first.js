let boxes=document.querySelectorAll(".box");
let btn=document.querySelector("#btn");
let win=document.querySelector("#para");
let winner1=document.querySelector(".winner");
let newbtn=document.querySelector("#set");

let value="true";

const winningpattern=[
    [0,1,2],[0,3,6],[6,7,8],[3,4,5,],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];
const showwinner=(winnershow)=>{
    win.innerText=`Winner is ${winnershow}!!`;
    winner1.classList.remove("hide");
}
function restartgame()
{
    value="true";
     btnenable();
     winner1.classList.add("hide");
}

const btndisable=()=> {
    for (let box of boxes) {
        box.disabled = true;
    }
}
const btnenable=()=>
{
    for(let box of boxes)
    {
        box.disabled=false;
         box.innerText="";
         box.classList.remove("coloro");
          box.classList.remove("colorx");
    }
}
boxes.forEach((box)=>{
     box.addEventListener("click",()=>{
        if(value==="true")
        {
            box.innerText="O";
            box.classList.add("coloro");
            value="false"
        }
        else{
            box.innerText="X";
            box.classList.add("colorx");
            value="true";
        }
        box.disabled="true";
        winning();
     });
});

const winning=()=>
{
    for(let pattern of winningpattern)
    {
        let value1=boxes[pattern[0]].innerText;
        let value2=boxes[pattern[1]].innerText;
        let value3=boxes[pattern[2]].innerText;

        if(value1!==""&&value2!==""&&value3!=="")
        {
        if(value1===value2 && value2===value3)
        {
            showwinner(value1);
            btndisable();
        }
       }
    }
}

newbtn.addEventListener("click",restartgame);
btn.addEventListener("click",restartgame);
