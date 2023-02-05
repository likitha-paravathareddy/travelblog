$("#signout").click(function(){

    $("#loginbut").css("display","block");
    $("#userdrop1").css("display","none");
    $("#userdrop").css("display","none");
    localStorage.setItem("currentLoggedUser",1)
});
$("#signout1").click(function(){

    $("#loginbut").css("display","block");
    $("#userdrop1").css("display","none");
    $("#userdrop").css("display","none");
    localStorage.setItem("currentLoggedUser",1)
});
window.onload=function(){
    mail=localStorage.getItem("currentLoggedUser");
    if(mail=="reddylikitha201@gmail.com"){
    $("#loginbut").css("display","none");
    $("#userdrop1").css("display","block");
    $("#userdrop").css("display","none");
    }
    else if(mail==null || mail==1)
    {
        $("#loginbut").css("display","block");
        $("#userdrop1").css("display","none");
        $("#userdrop").css("display","none");
    }
    else
    {
        $("#loginbut").css("display","none");
        $("#userdrop").css("display","block");
        $("#userdrop1").css("display","none");  
    }
};