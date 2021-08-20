$(document).ready(function () {
    let currentfloor = 2;
    let counterUp= $(".counter-up");
    let counterDown=$(".counter-down");
    let floorPath=$(".home-image path");
    let modal=$(".modal");
    let modalCloseButton=$(".modal-close-button");
    let viewFlatsButton=$(".view-flats");
    let imgpath=$(".flats");

    floorPath.on('mouseover',function(){
    currentfloor = $(this).attr("data-floor"); 
    $('.counter').text(currentfloor);
   });

  
counterUp.on("click",function()
{
    if(currentfloor<18){
        currentfloor++; 
        usCurrentFloor=currentfloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
        $('.counter').text(usCurrentFloor);
        floorPath.removeClass("current-floor");
        $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");

    }
}
)
counterDown.on("click",function()
{
    if(currentfloor>2){
        currentfloor--; 
        usCurrentFloor=currentfloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
        $('.counter').text(usCurrentFloor);
        floorPath.removeClass("current-floor");
        $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
}
)
function toggleModal(){
    modal.toggleClass('is-open'); 
}
floorPath.on("click",toggleModal)
modalCloseButton.on("click",toggleModal)
viewFlatsButton.on("click",toggleModal)


});