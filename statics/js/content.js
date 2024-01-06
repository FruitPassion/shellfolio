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
    "<p class='betterlh'>"+spacedebut+"Salut, je m'appelle Raphael.</p>",
    "<p class='betterlh'>"+spacedebut+"Je suis un étudiant en informatique orienté en sécurité et web à l'IUT Paul Sabatier.</p>",
    "<p class='betterlh'>"+spacedebut+"Débrouillard et passionné de développement web, je maîtrise HTML, CSS et JS ainsi que des frameworks tels que Flask, Django, Laravel, et Spring MVC côté backend. Du côté frontend, je suis à l'aise avec Angular et React pour créer des interfaces utilisateur interactives.</p>",
    "<p class='betterlh'>"+spacedebut+"En matière de sécurité, j'intègre des pratiques solides pour protéger les applications que je développe. J'utilise Git pour la gestion des versions et Docker pour la conteneurisation, facilitant ainsi le déploiement.</p>",
    "<p class='betterlh'>"+spacedebut+"Familiarisé avec Linux, je suis à l'aise dans la configuration et la gestion des environnements serveur. Mon expérience m'a permis de travailler sur des solutions robustes et sécurisées, en mettant en œuvre des protocoles adaptés et en assurant la surveillance proactive des systèmes.</p>",
    "<p class='betterlh'>"+spacedebut+"Mon approche polyvalente me permet d'aborder chaque projet avec un souci constant de qualité et de sécurité. Je suis convaincu que la compréhension approfondie des différentes facettes du développement web, du frontend au backend en passant par la sécurité et les opérations système, est essentielle pour livrer des solutions complètes et performantes. Mon engagement envers l'apprentissage continu me pousse à explorer constamment de nouvelles technologies et à les intégrer de manière pertinente dans mes projets.</p>"
]

let help = [
    '<p>'+spacedebut+'<span class="hintcolor">whois</span> : Qui suis-je ?</p>',
    '<p>'+spacedebut+'<span class="hintcolor">ls</span> : Lister mes projets</p>',
    '<p>'+spacedebut+'<span class="hintcolor">pwd</span> : Lister mes sites</p>',
    '<p>'+spacedebut+'<span class="hintcolor">clear</span> : Nettoyer le terminal.</p>',
    '<p>'+spacedebut+'<span class="hintcolor">color</span> : Permet de changer de theme en choississant parmis les suivants :</p><ul><li>- dracula (par défault)</li><li>- night-owl</li><li>- one-dark</li><li>- one-monokai</li><li>- github-dark</li><li>- atom-one-light</li><li>- bluloco-light</li></ul>',
    '<p>'+spacedebut+'<span class="hintcolor">echo</span> : Afficher quelque chose.</p>',
    '<p>'+spacedebut+'<span class="hintcolor">banniere</span> : Afficher la banniere.</p>',
    '<p>'+spacedebut+'<span class="hintcolor">help</span> : Afficher cette commande.</p>'
]

let colors = ["dracula","night-owl","one-dark","one-monokai","github-dark","atom-one-light","bluloco-light"]