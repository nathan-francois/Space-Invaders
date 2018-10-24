/*------------------------------------------------------------ MENU ---------------------------------------------------------------------- */
document.addEventListener("keydown", keyPressMenu);
var jeux = document.querySelector("#fenetre");
var menu = document.querySelector("#menu");
var displayMenu = 0;

function keyPressMenu(event){
    if(event.key == "Escape")
    {   
        // CACHE MENU
        if (displayMenu == 0){  
        jeux.style.display = "block";
        menu.style.display = "none";
        displayMenu = 1;
        }
        // AFFICHE MENU
        else if (displayMenu == 1){
        jeux.style.display = "none";
        menu.style.display = "block";
        displayMenu = 0;
        }
    }
    
}


/*------------------------------------------------------------ DEPLACEMENT VAISSEAU ---------------------------------------------------------------------- */
var vaisseau = document.getElementById("vaisseau");
document.addEventListener("keydown", keyPress1);
document.addEventListener("keydown", keyPress2);

vaisseau.style.position = "relative";
vaisseau.style.left = "275px";
vaisseau.style.top = "0px";



function keyPress1(event){  // DEPLACEMENT VAISSEAU ==>
    if (parseInt(vaisseau.style.left) <= 547)
    {
        if(event.key == "ArrowRight"){
            vaisseau.style.left = parseInt(vaisseau.style.left) + 7 + "px";
        }
    }
}

function keyPress2(event){  // DEPLACEMENT VAISSEAU <==
    if ( parseInt(vaisseau.style.left) >= 5)
    {
        if(event.key == "ArrowLeft"){
            vaisseau.style.left = parseInt(vaisseau.style.left) - 7 + "px";
        }
        
    }
}

/* -------------------------------------------------------------------- OVNI --------------------------------------------------------------------------- */
var armee = document.getElementById("container");
var direction = 0;
var alien = document.getElementsByClassName("alien");
armee.style.position = "relative";
armee.style.left = "0px";
armee.style.top = "0px";

var started = 0;

function start() {
        if(started === 1) {
            return false;
        }
        setInterval(function(){ // DEPLACEMENT ==>
            started = 1;
            if ((direction == 0) && (parseInt(armee.style.top) < 230))
            {
                armee.style.left = parseInt(armee.style.left) + 1 + "px";
            }
            if (parseInt (armee.style.left) == 170) // DIRECTION BAS
            {
                direction = 1;
                
                if(parseInt(armee.style.top) < 230)
                {
                    armee.style.top = parseInt(armee.style.top) + 10 + "px";
                }
            }
            
        }, 10); // Fin timer
        
        setInterval(function(){ /* DEPLACEMENT <== */
            if ((direction == 1) && (parseInt(armee.style.top) < 230))
            {
                armee.style.left = parseInt(armee.style.left) - 1 + "px";
            }
            if (parseInt (armee.style.left) == 0)   // DEPLACEMENT BAS
            {
                direction = 0;

                if(parseInt(armee.style.top) < 230)
                {
                    armee.style.top = parseInt(armee.style.top) + 10 + "px";
                }
            }
        }, 10); // Fin timer
    //Fin de boucle
}// Fin fonction start

/* ------------------------------------------------------- MISSILE ------------------------------------------------- */
document.addEventListener("keydown", keyPressMissile);
var zone = document.getElementById("zone");

// Temps entre chaque position du missile
// var timer = setInterval(missileTimer, 5);
// Fonction déplace le missile

// setInterval prend en premier paramètre une fonction vide (= fonction local), en 2eme parametre un integer 

//fonction recevant des paramètres reçu en argument
function missileTimer(missile, timer) {

    if (parseInt(missile.style.top) > -450){
        missile.style.top = parseInt(missile.style.top) - 1 + "px";
    }
    else if ((parseInt(missile.style.top) <= -450)){

        zone.removeChild(missile);
        clearInterval(timer);
        
    }

}


// Press Espace
function keyPressMissile(event){ 
 
    if(event.key == " "){
    
        createMissile ();


     }// Fin Escape     

 }// Fin keyPressMissile


// Fonction crée un missile
function createMissile () {
    var missile = document.createElement("div");
    missile.setAttribute("class", "missile");
    zone.appendChild(missile);
    missile.style.position = "relative";
    missile.style.left = parseInt(vaisseau.style.left) + 20 + "px";
    missile.style.top = parseInt(zone.offsetHeight)/2 - 10 + "px";
    
    // var timer crée à chaque appel de la fonction, et envoi ces arguments
    //setInterval obligatoire avec fonction void si présence de paramètre dans fonction
    var timer = setInterval(function (){
        missileTimer(missile, timer);
        testCollision(missile);
    }, 5);

}

function allAlienPosition(){

}

function testCollision(missile){
    var posLeft = missile.offsetLeft;
    var posTop = missile.offsetTop;
    var disabled;
    for (var i = 0; i < alien.length; i++){
        // Si la position Y du missile est entre le coin en haut d'un alien et le coin plus la hauteur d'un alien  
       if (posTop >= alien[i].offsetTop + armee.offsetTop && posTop <= alien[i].offsetTop + armee.offsetTop + 30){
           // Si la position X du missile est entre le   coin a gauche d'un alien et le coin plus la largeur d'un alien
            if (posLeft > alien[i].offsetLeft + armee.offsetLeft && posLeft < alien[i].offsetLeft + armee.offsetLeft + 30){
                for (var i = 0; i < alien.length; i++){
                    if(alien[i].disabled = 0)
                    {
                        console.log(alien[i]);
                     missile.style.display = "none";
                     alien[i].style.visibility = "hidden";
                     alien[i].disabled = 1;
                    }
                    else if (alien[i].disabled = 1){
                        
                    }
                }
            }
       }
    }
}






