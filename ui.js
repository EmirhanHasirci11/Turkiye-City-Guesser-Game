function UI(){
    this.btn_start = document.querySelector(".btn_start");
    this.header = document.querySelector(".city");
    this.city_name =document.querySelector(".city span")
    this.btns=document.querySelector(".btns");
    this.map = document.querySelector(".map");
    this.paths = document.querySelectorAll("g path");
    this.remainingCity=document.querySelector(".remainingCity span");
    this.scores=document.querySelector(".scores");
    this.correctCount=document.querySelector(".correctCount");
    this.wrongCount=document.querySelector(".wrongCount")
}