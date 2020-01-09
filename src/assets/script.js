
//Fonction d'animation pour les pastilles d'etape lors du clique sur celle-ci
function setActiveStep(id){
    let old = document.getElementsByClassName("active");
    if(old.length > 0 ){
        old = old[0].classList.remove("active");
    }
    var element = document.getElementById(id);
    element.classList.add("active");
}

//Ajoute la class css active pour savoir sur quel page on se trouve
//Remarque : n = 1 pour suivant et n = -1 pour precedent
function setActivePastille(n){
    console.log("setActivePastille");
    let activeElement;
    let allDiv = document.getElementsByTagName("div");
    for (var i = 0; i < allDiv.length; i++) {
        if(allDiv[i].classList.contains("active")){
            activeElement = allDiv[i];
            break;
        }
    }
    if(n==1){
        activeElement.classList.remove("active");
        activeElement.nextSibling.classList.add("active");
    }
    else if(n==-1){
        activeElement.classList.remove("active");
        activeElement.previousSibling.classList.add("active");
    }
}
