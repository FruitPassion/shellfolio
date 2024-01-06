

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
    document.getElementById('typer').innerText = text.replace(/[\r\n]+/g, "");
}

function copierligne(commande){
    before.innerHTML += line_clone[0] + commande + line_clone[1];
}