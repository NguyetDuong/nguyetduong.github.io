
// navigation changes
$(document).ready(function(){
    $("#itemHome").click(function(){
        $("#info").show();
        $("#about").hide();
        $("#head1").show();
        $("#code").hide();
        $("#contactMe").hide();
    });
});
$(document).ready(function(){
    $("#itemAbout").click(function(){
        $("#info").hide();
        $("#about").show();
        $("#head1").show();
        $("#code").hide();
        $("#contactMe").hide();
    });
});
$(document).ready(function(){
    $("#itemContact").click(function(){
        $("#info").hide();
        $("#about").hide();
        $("#head1").show();
        $("#code").hide();
        $("#contactMe").show();
    });
});

// allowing the about me tabs to work
jQuery(document).ready(function() {
jQuery('.tabs .tab-links a').on('click', function(e)  {
        var currentAttrValue = jQuery(this).attr('href');
 
        // Show/Hide Tabs
        jQuery('.tabs ' + currentAttrValue).show().siblings().hide();
 
        // Change/remove current tab to active
        jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
 
        e.preventDefault();
    });
});