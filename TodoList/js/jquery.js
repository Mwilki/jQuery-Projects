// Check off todo's by clicking
$("ul").on("click", "li", function(){

    // if li is white or black
    if($(this).css("color") === "rgb(128, 128, 128)"){
        $(this).css({
            color: "black",
            textDecoration: "none"
        });
    }  else {
        $(this).css({
            color: "gray",
            textDecoration: "line-through"
        }); 
    }
});

// check off specific todos by clicking
// $("li").click(function(){
//      $(this).toggleClass("completed");
// });

$("ul").on("click", "span", function(e){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    e.stopPropagation();
});

$("input[type='text']").keypress(function(){
    if(event.which === 13){
        // grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>");
    }
});

$('.fa-battery-three-quarters').click(function(){
    $("input[type='text']").fadeToggle();
});