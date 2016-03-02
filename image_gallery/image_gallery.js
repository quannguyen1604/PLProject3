$(document).ready(function() {
    // preload images
    $("#image_list a").each(function() {
        var image = new Image();
        image.src = $(this).attr("href");
        image.title = $(this).attr("title");
    });

    // set up event handlers for links
    $("#image_list a").click(function(evt) {
        // switch image
        var image = $(this).attr("href");
        $("#image").attr("src", image);

        //switch caption
        var caption = $(this).attr("title");
        $("#caption").text(caption);

        // cancel the default action of the link
        evt.preventDefault();
    });

    // move focus to first link
    $("li:first-child a").focus();
});