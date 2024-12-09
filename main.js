
//Кнопки
const gameBtn = document.getElementById("gameBtn");
//Слушатели событий
gameBtn.addEventListener("click", activeArea);

function activeArea(){
const field = document.getElementsByClassName("field");
//["field","field",.....]
gameBtn.innerHTML = "ЗАВЕРШИТЬ ИГРУ"
for (let i = 0;i< field.length; i++){
    setInterval(()=> {
        field[i].classList.add("active");
    }, 20 * i)
}

}