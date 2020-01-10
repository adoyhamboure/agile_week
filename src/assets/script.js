
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
    let activeElement;
    let allDiv = document.getElementsByTagName("div");
    for (var i = 0; i < allDiv.length; i++) {
        if(allDiv[i].classList.contains("active")){
            activeElement = allDiv[i];
            break;
        }
    }
    if(activeElement !== 'undefined'){
        if(n==1){
            activeElement.classList.remove("active");
            let nextElement = activeElement.nextSibling;
            if(nextElement != null){
                nextElement.classList.add("active");
            }
        }
        else if(n==-1){
            activeElement.classList.remove("active");
            let prevElement = activeElement.previousSibling;
            if(prevElement != null){
                prevElement.classList.add("active");
            }
        }
    }
}

//Caroussel pour les References dans le résultat final
var slideIndex = 1;

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";
}
//Fin caroussel

//Caroussel pour les creation
var slideIndex = 1;

function changeCreation(n) {
  showCreation(slideIndex += n);
}

function showCreation(n) {
  var i;
  var x = document.getElementsByClassName("myCreations");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";
  //setTimeout(showDivs(slideIndex+1), 2000); // Change de div toutes les 2 seconds
}

// Export PDF

function printPage() {
    window.print();
}