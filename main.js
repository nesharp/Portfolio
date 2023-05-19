// more_content button controller
$(".more_content").click((e)=>{
    e.preventDefault();
    $(".more_content").css("visibility", "hidden");
    $(".hidden_content").css("visibility", "visible");

});
// totop button controller
let totop = $(".totop");
$(window).scroll(()=>{
    if($(window).scrollTop() > 260){
        totop.addClass("totop-v");
    }else{
        totop.removeClass("totop-v");
    }
});
totop.on('click',(e)=>{
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });
// form controller
$(".btn-ghost-call").click((e)=>{
     e.preventDefault();
    
    $(".myModal").css("display", "block")
    .animate({opacity:1}, 198);
   
});

$(".close-form").click(()=>{
$(".myModal").animate({opacity:0}, 198, ()=>{
    $(this).css("display", "none");
});
});