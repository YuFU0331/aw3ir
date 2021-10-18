


window.onload = function(){
    document.getElementById("form").onsubmit = function(){
        return checkname() && checkprenom();
    };
    document.getElementById("name").onblur = checkname;
    document.getElementById("prenom").onblur = checkprenom;
};

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
 