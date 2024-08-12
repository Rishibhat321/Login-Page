function seterror(id,error){
    element=document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML= error;
}
    function validateForm(){
        var returnval= true;
        var email=document.forms['myForm']["femail"].value;
       if(email.length<8){
        seterror("email","*Invalid Username");
        returnval= false;
       }

       if(email.length == 0){
        seterror("email", "*Invalid Username");
        returnval= false;
       }

       var pass=document.forms['myForm']["fpass"].value;
       if(pass<8){
        seterror("pass","*Invalid Password");
        returnval= false;
       }

       if(pass == 0){
        seterror("pass","*Invalid Password");
        returnval =false;
       }

        return returnval;
    }