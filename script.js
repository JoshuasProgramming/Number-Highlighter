//Create Elements
const box0 = document.getElementById('box0');
const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');
const box4 = document.getElementById('box4');
const box5 = document.getElementById('box5');
const box6 = document.getElementById('box6');
const box7 = document.getElementById('box7');
const box8 = document.getElementById('box8');
const box9 = document.getElementById('box9');
          //[0,1,2,3,4,5,6,7,8,9]
let arr = [box0.className, box1.className, box2.className, box3.className, 
           box4.className, box5.className, box6.className, box7.className,
           box8.className, box9.className];

let box = [box0, box1, box2, box3, 
           box4, box5, box6, box7,
           box8, box9];

//Once the user presses the start button... => ask user for number => turn it into array
const start = document.getElementById('start').addEventListener("click", (e)=>{
    let pick = prompt("Enter number");
    let pick_split = pick.split("");
    
    myfunc(pick_split, arr, box);
})

//Get the className of each box (E.G: box5.className = 5) and inserts in into the HTML
box0.innerHTML = box0.className;

box1.innerHTML = box1.className;

box2.innerHTML = box2.className;

box3.innerHTML = box3.className;

box4.innerHTML = box4.className;

box5.innerHTML = box5.className;

box6.innerHTML = box6.className;

box7.innerHTML = box7.className;

box8.innerHTML = box8.className;

box9.innerHTML = box9.className;

function myfunc(pick_split, arr, box){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] = pick_split[i]){
            //alert("arr: " + arr[i] + " pick_split: " + pick_split[i])

            let item = box[arr[i]].className;
            box[item].style.backgroundColor = "blue";
            box[item].style.color = "white";
            box[item].style.transition = "1.5s";
        }
        
        let output = document.createElement('div');
        let input = document.createElement('p');
        output.innerHTML = input;
        output.innerHTML = box[arr[i]].className;
        output.style.float = "left";
        output.style.fontSize = "50px";
        output.style.textAlign = "center";
        document.body.appendChild(output);
        
        const clear = document.getElementById('clear').addEventListener("click", (e)=>{
            clearColor(output);
        })
    }
}    

function clearColor(output){
    for(let i = 0; i < arr.length; i++){
        box[i].style.backgroundColor = "lightblue";
        box[i].style.transition = "1.5s";
        box[i].style.color = "black";
        
        output.innerHTML = "";
        
        document.body.appendChild(output);
    }
}