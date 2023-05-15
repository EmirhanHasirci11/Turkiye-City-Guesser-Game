const ui = new UI();
const citys=[];
var correctCount=0;
var wrongCount=0;

ui.btn_start.addEventListener("click",function(){
    ui.btn_start.classList.add("deactive");
    ui.btns.classList.add("deactive");
    ui.map.classList.add("active");
    ui.header.classList.add("active");
    ui.scores.classList.add("active");
})

getCityNames();
var count =1;
function getCityNames(){
    for(var item of ui.paths){
        citys.unshift(item.attributes[1].nodeValue)        
    }
}
var selectedCity ="";
askedCity();
function askedCity(){
  
        console.log(citys.length);
        let number =Math.ceil(Math.random()*citys.length)-1
        console.log(number);
        selectedCity =citys[number];
        ui.city_name.innerHTML=selectedCity;
        ui.remainingCity.innerHTML=citys.length;            
}


