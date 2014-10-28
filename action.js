$(document).ready(function(){
    
    $("#homebutton").click(function(){
        $("#homedetails").show();
        $("#projectsdetails").hide();
        $("#contactmedetails").hide();
    });
    
    $("#projectsbutton").click(function(){
        $("#homedetails").hide();
        $("#projectsdetails").show();
        $("#contactmedetails").hide();
    });
    
     $("#contactbutton").click(function(){
        $("#homedetails").hide();
        $("#projectsdetails").hide();
        $("#contactmedetails").show();
    });
     
});
