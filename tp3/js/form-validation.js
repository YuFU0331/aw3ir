
 window.onload = function(){
    document.getElementById("form").onsubmit = function(){
        return checkname() && checkprenom() && validateEmail;
    };
    document.getElementById("name").onblur = checkname;
    document.getElementById("prenom").onblur = checkprenom;
    document.getElementById("Email").onblur = validateEmail;
};

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

function checkname(){
    var name = document.getElementById("name").value;
    var reg_username = /^\w{5,20}$/;
    var flag = reg_username.test(name);
    var s_username = document.getElementById("s_username");
    if(flag){
        s_username.innerHTML = "<img width='35' height='25' src='img/gou.png'/>";
    }else{
        s_username.innerHTML = "il existe une erreur ";
    }
    return flag;
}

function checkprenom(){
    var prenom = document.getElementById("prenom").value;
    var reg_prenom = /^\w{5,20}$/;
    var flag = reg_prenom.test(prenom);
    var s_prenom = document.getElementById("s_prenom");
    if(flag){
        s_prenom.innerHTML = "<img width='35' height='25' src='img/gou.png'/>";
    }else{
        s_prenom.innerHTML = "il existe des erreurs ";
    }
    return flag;
}
  