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
        default:
            defaultErreur(commande);
    }
    texter.value = "";
}