function random_ip(){
    return (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))
}

function random_date(){
    let currentDate = new Date();

    let yesterday = new Date(currentDate);
    yesterday.setDate(currentDate.getDate() - 1);

    let dayName = yesterday.toLocaleDateString('en-US', { weekday: 'short' });
    let monthName = yesterday.toLocaleDateString('en-US', { month: 'short' });

    let dayOfMonth = yesterday.getDate();

    let formattedDate = `${dayName} ${monthName} ${dayOfMonth}`;

    return formattedDate;
}

function random_time() {
    let hours = Math.floor(Math.random() * 24);
    let minutes = Math.floor(Math.random() * 60);
    let seconds = Math.floor(Math.random() * 60);
    
    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    let formattedTime = `${hours}:${minutes}:${seconds}`;

    return formattedTime;
}

let spacedebut = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";


let preheader = [
    '<p>Bienvue sur shellfolio.fruitpassion.fr</p>',
    '<p>Derniere connexion: '+random_date()+' '+random_time()+' 2024 depuis '+random_ip()+'</p>'
]


let banniere = [
    '<br>',
    '  sSSs   .S_sSSs     .S       S.    .S  sdSS_SSSSSSbs   .S_sSSs     .S_SSSs      sSSs    sSSs   .S    sSSs_sSSs     .S_sSSs            sSSs   .S_sSSs    ',
    '  d%%SP  .SS~YS%%b   .SS       SS.  .SS  YSSS~S%SSSSSP  .SS~YS%%b   .SS~SSSSS    d%%SP   d%%SP  .SS   d%%SP~YS%%b   .SS~YS%%b          d%%SP  .SS~YS%%b   ',
    ' d%S     S%S    S%b  S%S       S%S  S%S       S%S       S%S    S%b  S%S   SSSS  d%S     d%S     S%S  d%S       S%b  S%S    S%b        d%S     S%S   `S%b  ',
    ' S%S     S%S    S%S  S%S       S%S  S%S       S%S       S%S    S%S  S%S    S%S  S%|     S%|     S%S  S%S       S%S  S%S    S%S        S%S     S%S    S%S  ',
    ' S&S     S%S    d*S  S&S       S&S  S&S       S&S       S%S    d*S  S%S SSSS%S  S&S     S&S     S&S  S&S       S&S  S%S    S&S        S&S     S%S    d*S  ',
    ' S&S_Ss  S&S   .S*S  S&S       S&S  S&S       S&S       S&S   .S*S  S&S  SSS%S  Y&Ss    Y&Ss    S&S  S&S       S&S  S&S    S&S        S&S_Ss  S&S   .S*S  ',
    ' S&S~SP  S&S_sdSSS   S&S       S&S  S&S       S&S       S&S_sdSSS   S&S    S&S  `S&&S   `S&&S   S&S  S&S       S&S  S&S    S&S        S&S~SP  S&S_sdSSS   ',
    ' S&S     S&S~YSY%b   S&S       S&S  S&S       S&S       S&S~YSSY    S&S    S&S    `S*S    `S*S  S&S  S&S       S&S  S&S    S&S        S&S     S&S~YSY%b   ',
    ' S*b     S*S   `S%b  S*b       d*S  S*S       S*S       S*S         S*S    S&S     l*S     l*S  S*S  S*b       d*S  S*S    S*S        S*b     S*S   `S%b  ',
    ' S*S     S*S    S%S  S*S.     .S*S  S*S       S*S       S*S         S*S    S*S    .S*P    .S*P  S*S  S*S.     .S*S  S*S    S*S        S*S     S*S    S%S  ',
    ' S*S     S*S    S&S   SSSbs_sdSSS   S*S       S*S       S*S         S*S    S*S  sSS*S   sSS*S   S*S   SSSbs_sdSSS   S*S    S*S        S*S     S*S    S&S  ',
    ' S*S     S*S    SSS    YSSP~YSSY    S*S       S*S       S*S         SSS    S*S  YSS     YSS     S*S    YSSP~YSSY    S*S    SSS   SS   S*S     S*S    SSS  ',
    ' SP      SP                         SP        SP        SP                 SP                   SP                  SP          S%%S  SP      SP          ',
    ' Y       Y                          Y         Y         Y                  Y                    Y                   Y            SS   Y       Y           ',
    '<br>'
]

let postheader = [
    '<p>Bienvenue sur mon terminal web.</p>',
    "<p>Pour la liste des commandes disponibles, entrez <span class='hintcolor'>'help'</span>.</p>"
]

let line_clone = ['<div style="display: flex;"><p class="visiteurcolor">visiteur@shellfolio.fruitpassion.fr: ~$&nbsp;</p><p>','</p>']

let whois = [
    "<p>"+spacedebut+"Salut, je m'appelle Raphael.</p>",
    "<p>"+spacedebut+"Je suis un étudiant en informatique orienté en sécurité et web.</p>",
    "<p>"+spacedebut+"A completer...</p>"
]

let help = [
    '<p>'+spacedebut+'<span class="hintcolor">whois</span> : Qui suis-je ?</p>',
    '<p>'+spacedebut+'<span class="hintcolor">ls</span> : Lister mes projets</p>',
    '<p>'+spacedebut+'<span class="hintcolor">pwd</span> : Lister mes sites</p>',
    '<p>'+spacedebut+'<span class="hintcolor">clear</span> : Nettoyer le terminal.</p>',
    '<p>'+spacedebut+'<span class="hintcolor">echo</span> : Afficher quelque chose.</p>',
    '<p>'+spacedebut+'<span class="hintcolor">banniere</span> : Afficher la banniere.</p>',
    '<p>'+spacedebut+'<span class="hintcolor">help</span> : Afficher cette commande.</p>'
]