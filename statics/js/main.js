const delay = millis => new Promise((resolve, reject) => {
    setTimeout(_ => resolve(), millis)
});

let commandes = [];
let commandes_history = [];
let index_commandes = 0;

let useri = document.getElementById("user-input")
let texter = document.getElementById('texter')
let before = document.getElementById("before");
let typer = document.getElementById('typer');

bootup();

useri.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        gerer_commande(typer.innerHTML)
    } else if (event.key === 'ArrowUp') {
        if (index_commandes > 0){
            index_commandes -= 1;
            texter.value = commandes_history[index_commandes];
            typer.innerHTML = commandes_history[index_commandes];
            const end = typer.innerHTML.length;
            typer.setSelectionRange(end, end);
        }
    } else if (event.key === 'ArrowDown') {
        if (index_commandes < commandes_history.length-1){
            index_commandes += 1;
            texter.value = commandes_history[index_commandes];
            typer.innerHTML = commandes_history[index_commandes];
        }
    }
});

async function gerer_commande(commande){
    commande = commande.replace(/[\r\n]+/g, "");
    commande = commande.replace(/(&nbsp;)+/g, " ")
    switch (commande.split(" ")[0]) {
        case 'clear':
            commandeClear();
            break;
        case '':
            commandeVide(commande);
            break;
        case 'banniere':
            commandeBanniere(commande);
            break;
        case 'whois':
            commandeWhois(commande);
            break;
        case 'ls':
            commandeLs(commande);
            break;
        case 'pwd':
            commandePwd(commande);
            break;
        case 'color':
            commandeColor(commande);
            break;
        case 'help':
            commandeHelp(commande);
            break;
        case 'echo':
            commandeEcho(commande);
            break;
        case 'reboot':
            commandeReboot();
            break;
        case 'matrix':
            commandeMatrix(commande);
            break;
        case 'history':
            commandeHistory(commande);
            break;
        default:
            defaultErreur(commande);
    }
    texter.value = "";
    commandes.push('<p>'+spacedebut+'- '+commande+'</p>')
    commandes_history.push(commande);
    index_commandes = commandes_history.length;
}
