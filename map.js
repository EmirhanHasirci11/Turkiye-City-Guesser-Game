
$('.map path').mouseover(function (e) {
    
    if(e.target.classList.contains("selectedCity")){

        $('<div class="info_panel text-center">' + e.target.attributes[1].nodeValue +
        '<br>'+
       e.target.id.substring(e.target.id.length-2)+
        '</div>'
        )
        .appendTo('body');
        
    }
        
})
    .mouseleave(function () {
        $('.info_panel').remove();
    })
    .mousemove(function (e) {
        
        var mouseX = e.pageX, //X coordinates of mouse
            mouseY = e.pageY; //Y coordinates of mouse

        $('.info_panel').css({
            top: mouseY -10,
            left: mouseX - ($('.info_panel').width() / 2 -50),
            
            
        });
        
    })
    .click(function (e) {
        if(!e.target.classList.contains("selectedCity")){

        
        let selecetedArea=e.target.attributes[1].nodeValue;
        if(selectedCity==selecetedArea){
            e.target.classList.add("trueChoice")
            e.target.classList.add("selectedCity")
            correctCount++;
            
        }else{
            for(var item of ui.paths){
                if(item.attributes[1].nodeValue==selectedCity){
                    item.classList.add("wrongChoice")
                    item.classList.add("selectedCity")
                    wrongCount++;
                }
            };
        }
        
        
        for(let i=0;i<citys.length;i++){
            if(citys[i]==selectedCity){
                citys.splice(i,1);
            }
        }
        if(citys.length!=0)
        {
            
            askedCity();
        }
        if(citys.length==0){
            ui.city_name.innerHTML="Tebrikler oyun bitti";
            ui.remainingCity.innerHTML=0;
        }
        ui.correctCount.innerHTML=correctCount;
        ui.wrongCount.innerHTML=wrongCount;       
    }                             
    });
$('.map path').click(function (e) {

})