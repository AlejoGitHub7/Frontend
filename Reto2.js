const subTitles5 = document.getElementById("SubTitles5")
const menuC = document.getElementById("menusub")
const join = document.getElementById("JoinTRW")

function abrirMenuC(){
    menuC.classList.toggle("inactive") 
}
function redirect(){
    location.href = "./Reto2parte2.html"
}

subTitles5.addEventListener("click", abrirMenuC)
join.addEventListener("click", redirect)