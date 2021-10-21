const menuClose = document.querySelector("#menu-close");
const menuOpen = document.querySelector("#menu-btn");
const navYow = document.querySelector("nav .navigation ul")


menuOpen.addEventListener('click',buttonOpen);

function buttonOpen(){
	navYow.classList.toggle("open");
}

menuClose.addEventListener('click',buttonClose);

function buttonClose(){
	navYow.classList.remove("open");
}