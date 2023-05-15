


var selectedCities = [];
var selectedCitiesId = [];
var selectedCitiesPanel = document.querySelector(".selectedCities")
var cityName = document.querySelector(".City-Name")
$('.map path').mouseover(function (e) {
    console.log(e.target.attributes[1].nodeValue);  
    $('<div class="info_panel">' + e.target.attributes[1].nodeValue +
        '<br>' + e.target.attributes[1].nodeValue +
        ' ' + '<br>'+e.target.id.substring(e.target.id.length-2)+
        '</div>'
    )
        .appendTo('body');

        cityName.innerHTML=e.target.attributes[1].nodeValue;
})
    .mouseleave(function () {
        $('.info_panel').remove();
    })
    .mousemove(function (e) {
        
        var mouseX = e.pageX, //X coordinates of mouse
            mouseY = e.pageY; //Y coordinates of mouse

        $('.info_panel').css({
            top: mouseY - 100,
            left: mouseX - ($('.info_panel').width() / 2 -20),
            
            
        });
        
    })
    .click(function (e) {
        var text = "";
        selectedCitiesPanel.innerHTML = "";
        e.target.classList.toggle("selectedCity")
        if (e.target.classList.contains("selectedCity")) {
            selectedCities.unshift(e)
            selectedCitiesId.unshift(e.target.id.substring(e.target.id.length-2))
            console.log(selectedCities.indexOf(e));
        } else {

            for (let index = 0; index < selectedCities.length; index++) {
                if (selectedCities[index].target.attributes[0].nodeValue == e.target.attributes[0].nodeValue) {
                    selectedCitiesId.splice(index,1);
                    selectedCities.splice(index, 1)
                }

            }
        }
       


        for (let item of selectedCities) {
            text += '<div class="bg-info bg-opacity-50"> -' + item.target.attributes[1].nodeValue +' id: '+ item.target.id.substring(e.target.id.length-2)+ '</div>'
        }
        $(text).appendTo(selectedCitiesPanel)
        for(let item in selectedCitiesId){
            console.log(selectedCitiesId[item])
        }
    });
$('.map path').click(function (e) {

})