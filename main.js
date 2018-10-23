/*------------------------------------------------------------ MENU ---------------------------------------------------------------------- */
document.addEventListener("keydown", keyPressMenu);
var jeux = document.querySelector("#console");
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

console.log("")
/*------------------------------------------------------------ DEPLACEMENT VAISSEAU ---------------------------------------------------------------------- */
var vaisseau = document.getElementById("vaisseau");
document.addEventListener("keydown", keyPress1);
document.addEventListener("keydown", keyPress2);

vaisseau.style.position = "relative";
vaisseau.style.left = "275px";



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


function start() {
    
        setInterval(function(){ // DEPLACEMENT ==>
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
var missile = document.getElementById("missile");
document.addEventListener("keydown", keyPressMissile);
missile.style.position = "relative";
missile = vaisseau.style.left;



function keyPressMissile(event){ 
    if(event.key == " "){
        console.log("test");
        setInterval(function(){ 
            missile.style.top = (parseInt(vaisseau.style.top)) - 1 + "px";
        }, 10); // Fin timer 
    }
}// Fin keyPressMissile