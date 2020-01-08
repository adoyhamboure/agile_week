//Fonction OnClick utilisé pour les pastilles 
 
function setActiveStep(id){
    console.log(id);
    let old = document.getElementsByClassName("active");
    if(old.length > 0 ){
        old = old[0].classList.remove("active");
    }

    var element = document.getElementById(id);
    element.classList.add("active");

   
}