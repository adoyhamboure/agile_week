//Fonction OnClick utilisé pour les pastilles en bas lors de clique sur PASTILLE
 
function setActiveStep(id){
    //console.log(id);
    let old = document.getElementsByClassName("active");
    if(old.length > 0 ){
        old = old[0].classList.remove("active");
    }

    var element = document.getElementById(id);
    element.classList.add("active");
}

//Fonction OnClick utilisé pour les pastilles en bas lors de clique sur FLECHE SUIVANT

function setActiveNext(id){
    console.log("suivant");
    let old = document.getElementsByClassName("active");
    if(old.length > 0 ){
        old = old[0].classList.remove("active");
    }

    var element = document.getElementById(id);
    element.classList.add("active");
}

//Fonction OnClick utilisé pour les pastilles en bas lors de clique sur FLECHE PRECEDENT

function setActivePrev(activeElement){
    console.log(activeElement.id);
    var element = document.getElementById(activeElement[0].id);
    //console.log(element.id);
    //console.log(document.getElementById(id).previousElementSibling.innerHTML);
    let old = document.getElementsByClassName("active");
    if(old.length > 0 ){
        old = old[0].classList.remove("active");
    }

    element.classList.add("active");
}
