let grid = document.getElementById("grid");
let btnClear= document.getElementById("clear");
let selectColor=document.getElementById("selectColor");
let size=document.getElementById("size");
let btnSize=document.getElementById("btnSize");

    size= 16;
  console.log(size);
  btnSize.addEventListener('click', function(){
      size=size.value;
      console.log(size);
  })

function displayGrid(){

    for(i = 0; i < size*size; i++){  
        grid.style.display='grid';
        grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        grid.style.gridTemplateRows =`repeat(${size},1fr)`;
    let square=document.createElement("div");   
    square.classList.add("colorSquare");
    btnClear.addEventListener('click', function(){
        square.style.backgroundColor="#cecece";
    })   
    square.addEventListener('mousedown', function(){
        square.style.backgroundColor=selectColor.value;
    })
    grid.appendChild(square);
    }
}

displayGrid();
