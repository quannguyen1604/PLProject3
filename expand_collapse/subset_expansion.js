$(document).ready(function() {

    //click[0].onclick(tester(0))
    //click.onclick(tester());
    $("#click1").onclick(tester());

    function tester() {
        var click = document.getElementById("click1");
        var hide = document.getElementById("hide1");
        if (hide.className == "hide") {
            hide.className = "";
            click.textContent = "Show less";
        } else {
            hide.className = "hide";
            click.textContent = "Show more";
        }

    }

    /*
     function tester1() {
     var click = document.getElementById("click2");
     var hide = document.getElementById("hide2");
     if (hide.className == "hide") {
     hide.className = "";
     click.textContent = "Show less";
     } else {
     hide.className = "hide";
     click.textContent = "Show more";
     }
     }

     function tester2() {
     var click = document.getElementById("click2");
     var hide = document.getElementById("hide2");
     if (hide.className == "hide") {
     hide.className = "";
     click.textContent = "Show less";
     } else {
     hide.className = "hide";
     click.textContent = "Show more";
     }

     }


     function tester3() {
     var click = document.getElementById("click3");
     var hide = document.getElementById("hide3");
     if (hide.className == "hide") {
     hide.className = "";
     click.textContent = "Show less";
     } else {
     hide.className = "hide";
     click.textContent = "Show more";
     }

     }
     */
});