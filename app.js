var list = document.querySelector("#btn");
var grid = document.querySelector("#btn1");
var box = document.querySelector(".box")
list.addEventListener("click",function(){
  box.classList.remove("box")
})
grid.addEventListener("click",function(){
  box.classList.add("box")
})