
// navigation changes
$(document).ready(function(){
    $("#itemHome").click(function(){
    	window.location.href = "index.html"
    });
});
$(document).ready(function(){
    $("#itemGWC").click(function(){
        $("#GWC").show();
        $("#info").hide();
        $("#about").hide();
        $("#head1").hide();
        $("#code").show();
        $("#contactMe").hide();
    });
});
$(document).ready(function(){
    $("#itemAbout").click(function(){
        $("#GWC").hide();
        $("#info").hide();
        $("#about").show();
        $("#head1").show();
        $("#code").hide();
        $("#contactMe").hide();
    });
});
$(document).ready(function(){
    $("#itemContact").click(function(){
        $("#GWC").hide();
        $("#info").hide();
        $("#about").hide();
        $("#head1").show();
        $("#code").hide();
        $("#contactMe").show();
    });
});

// changing the gwc images
function changeGWC2() {
    document.getElementById("gwc-change").src = "gwc2.jpg"
}
function changeGWC1() {
    document.getElementById("gwc-change").src = "gwc1.jpg"
}