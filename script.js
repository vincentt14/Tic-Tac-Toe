// menyeleksi semua element yang diperlukan
const selectBox = document.querySelector(".select-box"),
selectXBtn = selectBox.querySelector(".playerX"),
selectOBtn = selectBox.querySelector(".playerO"),
playBoard = document.querySelector(".play-board"),
allBox = document.querySelectorAll("section span"),
players = document.querySelector(".players");

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
        // tambahin tiga kelas di elemen player
        players.setAttribute("class","players active player")
    }
}

let playerXIcon = "fas fa-times";
let playerOIcon = "far fa-circle";

// user click function
function clickedBox(element){
    // console.log(element);
    if(players.classList.contains("player")){
        // buat tambahin icon O pas ditekan
        element.innerHTML = `<i class="${playerOIcon}"></i>`;
        players.classList.add("active");
    }else{
        // buat tambahin icon X pas ditekan
        element.innerHTML = `<i class = "${playerXIcon}"></i>`;
        players.classList.add("active");
    }
    // kalau user uda tekan box 1, maka box 1 gabisa ditekan lagi
    element.style.pointerEvents = "none"; 
    // bikin delay random buat bot pilih
    let randomDelayTime = ((Math.random() * 1000) + 200).toFixed();
    setTimeout(() => {
        bot();
    }, randomDelayTime);
}

// bot click function
function bot (){
    // buat array kosong, kita bakal store unselect box index disini
    let array = [];
    for(let i = 0; i < allBox.length; i++){
        // kalau span ga ada child element
        if(allBox[i].childElementCount == 0){
            // maka masukkan unclicked / unselect box kedalam array (span yang ga ada child)
            array.push(i);
            // console.log(i + " " + "ga ada anak");
        }
    }
    // ambil random index dari array kotak kosong biar bot bsa random pilih salah satu
    let randomBox = array[Math.floor(Math.random() * array.length)];
    if(array.length > 0){
        if(players.classList.contains("player")){
            // buat tambahin icon X pas bot pilih
            allBox[randomBox].innerHTML = `<i class="${playerXIcon}"></i>`;
            players.classList.add("active");
        }else{
            // buat tambahin icon O pas bot pilih
            allBox[randomBox].innerHTML = `<i class = "${playerOIcon}"></i>`;
            players.classList.add("active");
        }
    }
    allBox[randomBox]
}
