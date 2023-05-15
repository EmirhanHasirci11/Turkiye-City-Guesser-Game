const ui = new UI();

ui.btn_start.addEventListener("click",function(){
    ui.btn_start.classList.add("deactive");
    ui.btns.classList.add("deactive");
    ui.map.classList.add("active");
    ui.header.classList.add("active");
})


