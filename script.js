// menyeleksi semua element yang diperlukan
const selectBox = document.querySelector(".select-box"),
selectXBtn = selectBox.querySelector(".playerX"),
selectOBtn = selectBox.querySelector(".playerO"),
playBoard = document.querySelector(".play-board"),
allBox = document.querySelectorAll("section span");

// saat window di load
window.onload = () =>{
    // tambah atribut onclick di semua section's span
    for(let i = 0; i < allBox.length; i++){
        allBox[i].setAttribute("onclick","clickedBox(this)");
    }
    
    //tutup selct box habis pilih X lalu munculin play box
    selectXBtn.onclick = () =>{ 
        selectBox.classList.add("hide");
        playBoard.classList.add("show");
    }
    //tutup selct box habis pilih O lalu munculin play box
    selectOBtn.onclick = () =>{ 
        selectBox.classList.add("hide");
        playBoard.classList.add("show");
    }
}

let playerXIcon = "fas fa-times";
let playerOIcon = "far fa-circle";

function clickedBox(element){
    if(){
        
    }
}