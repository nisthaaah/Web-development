$("h1").addClass("big");

$("h1").click(function(){
    $("h1").css("color", "purple");
})
console.log($("a").attr("href", "https://www.yahoo.com"));

// $("button").click(function(){
//     $("h1").css("color", "purple");
// })

// $(document).keypress(function(event){
//     $("h1").text(event.key);
// })

// $("h1").on("mouseover", function(){
//     $("h1").css("color", "cyan");
// })

// $("h1").prepend("<button>hey</button>");

$("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({opacity : 0.6 });
});

