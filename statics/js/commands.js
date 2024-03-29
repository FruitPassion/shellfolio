function commandeClear(){
    before.innerHTML = "";
}

function commandeVide(commande){
    copierligne(commande);
}

function commandeBanniere(commande){
    copierligne(commande);
    afficherBanniere()
}

function commandeWhois(commande){
    copierligne(commande);
    iterateList(whois, replace=false, header=false);
}

function commandeLs(commande){
    copierligne(commande);
    before.innerHTML += "<p>"+spacedebut+"A faire ...</p>";
}

function commandePwd(commande){
    copierligne(commande);
    before.innerHTML += "<p>"+spacedebut+"A faire ...</p>";
}



function commandeColor(commande){
    let color_code = commande.split(" ")[1];
    if (!color_code){
        copierligne(commande);
        before.innerHTML += "<p class='errorcolor'>"+spacedebut+"color: vous devez specifier une couleur</p>";
    } else if (colors.includes(color_code)){
        document.getElementById('root-colors').href="./statics/css/"+color_code+".css"; 
        copierligne(commande);
        before.innerHTML += "<p>"+spacedebut+"Couleur changé avec succès en "+color_code+"</p>";
    } else {
        copierligne(commande);
        before.innerHTML += "<p class='errorcolor'>"+spacedebut+"color: " + color_code + ": couleur non trouvée</p>";
    }
}

function commandeHelp(commande){
    copierligne(commande);
    let thelp = help();
    iterateList(thelp, replace=false, header=false);
}

function commandeEcho(commande){
    copierligne(commande);
    commande = commande.split(" ")
    let temp = ""; 
    for (var i = 1; i < commande.length; i++) {
        temp += commande[i] + ' '
    }
    before.innerHTML += spacedebut+temp;
}

function commandeReboot(){
    location.reload();
}

function commandeMatrix(commande){
    copierligne(commande);
    typer.innerText = "";
    texter.setAttribute("disabled","true");
    document.getElementById('canvasPatron').style.opacity = "1"
    before.hidden = true;
    function handleKeyPress(event) {
        if (event.key === 'Q' || event.key === 'q') {
            document.activeElement,
            document.getElementById('canvasPatron').style.opacity = "0";
            before.hidden = false;
            texter.removeAttribute("disabled");
            texter.focus()
        }
    }
    document.addEventListener('keyup', handleKeyPress);
}

function commandeHistory(commande){
    copierligne(commande);
    iterateList(commandes, replace=false, header=false);
}


function defaultErreur(commande){
    copierligne(commande);
    before.innerHTML += "<p class='errorcolor'>"+spacedebut+"shellfolio: " + commande.split(" ")[0] + ": commande non trouvée</p>";
}

