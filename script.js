// menyeleksi semua element yang diperlukan
const selectBox = document.querySelector(".select-box"),
selectXBtn = selectBox.querySelector(".playerX"),
selectYBtn = selectBox.querySelector(".playerO"),
playBoard = document.querySelector(".play-board");

// saat window di load
window.onload = () =>{
    //tutup selct box habis pilih X lalu munculin play box
    selectXBtn.onclick = () =>{ 
        selectBox.classList.add("hide");
        playBoard.classList.add("show");
    }
}