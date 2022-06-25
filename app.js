const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const inputD = document.getElementById("D");
const inputA = document.getElementById("A");
const inputN = document.getElementById("N");
const inputDepth = document.getElementById("Depth");
const inputLength = document.getElementById("Length");


let width = 600;
let height = 600;

canvas.height = height;
canvas.width = width;

let tree = new Tree(new Vector2(width/2, height), inputDepth.value, inputLength.value);
inputD.addEventListener('input', () => OnSliderChange());
inputA.addEventListener('input', () => OnSliderChange());
inputN.addEventListener('input', () => OnSliderChange());
inputDepth.addEventListener('input', () => OnSliderChange());
inputLength.addEventListener('input', () => OnSliderChange());
Start();
//GameLoop();

function Start(){

    ctx.fillStyle = 'rgb(0, 0, 0)';
    ctx.fillRect(0, 0, width, height);

    tree.Show(ctx);
}

function GameLoop(){

    ctx.fillStyle = 'rgb(0 ,0 ,0)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    

    requestAnimationFrame(GameLoop);
}

function OnSliderChange(){

    if(tree != null){

        tree.RecreateTree(inputD.value, inputA.value, inputN.value, inputDepth.value, inputLength.value);
        Start();
    }
}
