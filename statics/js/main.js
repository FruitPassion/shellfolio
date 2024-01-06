const delay = millis => new Promise((resolve, reject) => {
    setTimeout(_ => resolve(), millis)
});

let useri = document.getElementById("user-input")
let texter = document.getElementById('texter')
let before = document.getElementById("before");

bootup();

useri.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        gerer_commande(texter.value)
    }
});

function gerer_commande(commande){
    commande = commande.replace(/[\r\n]+/g, "");
    let temp = '';
    switch (commande.split(" ")[0]) {
        case 'clear':
            before.innerHTML = "";
            break;
        case '':
            copierligne(commande);
            break;
        case 'banniere':
            copierligne(commande);
            commande_banniere()
            break;
        case 'whois':
            copierligne(commande);
            iterateList(whois, replace=false, header=false);
            break;
        case 'ls':
            copierligne(commande);
            before.innerHTML += "<p>"+spacedebut+"A faire ...</p>";
            break;
        case 'pwd':
            copierligne(commande);
            before.innerHTML += "<p>"+spacedebut+"A faire ...</p>";
            break;
        case 'color':
            temp = commande.split(" ")[1];
            if (!temp){
                copierligne(commande);
                before.innerHTML += "<p class='errorcolor'>"+spacedebut+"color: vous deviez specifier une couleur</p>";
            } else if (colors.includes(temp)){
                document.getElementById('root-colors').href="./statics/css/"+temp+".css"; 
                copierligne(commande);
                before.innerHTML += "<p>"+spacedebut+"Couleur changé avec succès en "+temp+"</p>";
            } else {
                copierligne(commande);
                before.innerHTML += "<p class='errorcolor'>"+spacedebut+"color: " + temp + ": couleur non trouvée</p>";
            }
            break;
        case 'help':
            copierligne(commande);
            iterateList(help, replace=false, header=false);
            break;
        case 'echo':
            copierligne(commande);
            commande = commande.split(" ")
            for (var i = 1; i < commande.length; i++) {
                temp += commande[i] + ' '
            }
            before.innerHTML += spacedebut+temp;
            break;
        default:
            copierligne(commande);
            before.innerHTML += "<p class='errorcolor'>"+spacedebut+"shellfolio: " + commande.split(" ")[0] + ": commande non trouvée</p>";
    }
    texter.value = "";
}

async function bootup(){
    commande_banniere();
    await delay(1210);
    useri.style.display = "flex";
    useri.click();
}

async function commande_banniere(){
    iterateList(preheader, replace=true, header=false);
    await delay(120);
    iterateList(banniere, replace=true, header=true);
    await delay(960);
    iterateList(postheader, replace=false, header=false);
    await delay(120);
}

async function iterateList(liste, replace=true, header=false){
    for (let element of liste) { 
        if (replace) {
            element = replaceAll(element, " ", "&nbsp;")
        }
        if (header){
            element = '<p class="headercolor">'+ element + '</p>'
        }
        before.innerHTML += element;
        await delay(60);
    } 
}

function replaceAll(string, search, replace) {
    return string.split(search).join(replace);
}

function ecrire(text){
    document.getElementById('typer').innerText = text.replace(/[\r\n]+/g, "");
}

function copierligne(commande){
    before.innerHTML += line_clone[0] + commande + line_clone[1];
}