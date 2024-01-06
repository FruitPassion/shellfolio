const delay = millis => new Promise((resolve, reject) => {
    setTimeout(_ => resolve(), millis)
});

let useri = document.getElementById("user-input")
let texter = document.getElementById('texter')
let before = document.getElementById("before");
let typer = document.getElementById('typer');

bootup();

useri.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        gerer_commande(typer.innerHTML)
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
        default:
            defaultErreur(commande);
    }
    texter.value = "";
}