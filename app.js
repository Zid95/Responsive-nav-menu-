let menuBox = document.getElementById("menuBox");
let openMenu =document.getElementById("openMenu");

openMenu.onclick = function() {
  menuBox.classList.toggle("open-menu");

  if(menuBox.classList.contains('open-menu')){
    openMenu.src = "images/close.png";
  }
  else{
    openMenu.src = "images/menu.png";
  }

  }

