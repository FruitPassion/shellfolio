

async function bootup(){
    afficherBanniere();
    await delay(1210);
    useri.style.display = "flex";
    useri.click();
}

async function afficherBanniere(){
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
    text = text.replace(/ /g, "&nbsp;");
    text = text.replace(/[\r\n]+/g, "");
    typer.innerHTML = text;
}

function copierligne(commande){
    before.innerHTML += line_clone[0] + commande + line_clone[1];
}

function generateThemeList(){
    let themes = "";
    let currentTheme = document.getElementById('root-colors').href.split('/')[4].split('.')[0]
    for (const theme of colors) {
        if (theme == currentTheme){
            themes += "<li>- <span class='hintcolor'>"+theme+"</span> (selectionné)</li>"
        } else {
            themes += "<li>- " + theme + "</li>"
        }
    }
}