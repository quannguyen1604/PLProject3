$(document).ready(function() {
    $("a").click(function(){
        if ($(this).prev().attr("class") == "hide") {
            $(this).prev().toggleClass("hide");
            $(this).text("Show less");
        } else {
            $(this).prev().attr("class","hide");
            $(this).text("Show more");
        }
    });
});