// navigation changes
$(document).ready(function(){
    $("#itemHome").click(function(){
    	window.location.href = "index.html"
    });
});
$(document).ready(function(){
    $("#itemMain").click(function(){
        $("#GWC").show();
        $("#office").hide();
    });
});
$(document).ready(function(){
    $("#itemOffice").click(function(){
        $("#GWC").hide();
        $("#office").show();
    });
});


// changing the gwc images
function changeGWC2() {
    document.getElementById("gwc-change").src = "gwc2.jpg"
}
function changeGWC1() {
    document.getElementById("gwc-change").src = "gwc1.jpg"
}