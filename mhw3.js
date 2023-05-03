function onClick(event){
    const sezione1=document.querySelector('#section1');
    sezione1.style.display='flex';
    const sezione2=document.querySelector('#section2');
    sezione2.innerHTML='';
    const h1=document.querySelector('h1');
    h1.classList.remove('hidden');
}

function onJson(json){
    const inserito=document.querySelector('#barra');
    const squadraCercata=inserito.value;
    const squadre=json.response;
    for(let i=0;i<squadre.length;i++){
        if(squadre[i].team.name===squadraCercata)
        {
            const sezione2=document.querySelector('#section2');
            sezione2.innerHTML='';
            const sezione1=document.querySelector('#section1');
            sezione1.style.display='none';
            const h1=document.querySelector('h1');
            h1.classList.add('hidden');
            const stemma=document.createElement('img');
            stemma.classList.add('immagine1');
            stemma.src=squadre[i].team.logo;
            const stadio=document.createElement('img');
            stadio.classList.add('immagine2');
            stadio.src=squadre[i].venue.image;
            const p1=document.createElement('p');
            p1.textContent='Name: ' + squadre[i].venue.name;
            p1.classList.add('risultato');
            const p2=document.createElement('p');
            p2.textContent='Location: ' + squadre[i].venue.city + ', ' + squadre[i].venue.address;
            p2.classList.add('risultato');
            const p3=document.createElement('p');
            p3.textContent='Capacity: ' + squadre[i].venue.capacity;
            p3.classList.add('risultato');
            console.log('Ho trovato la squadra che cercavi');
            sezione2.appendChild(stemma);
            sezione2.appendChild(stadio);
            sezione2.appendChild(p1);
            sezione2.appendChild(p2);
            sezione2.appendChild(p3);
            console.log(json);
            }
    }
}

function onSuccess(response){
    return response.json();
}

function onJson2(json){
    const sezione2=document.querySelector('#section2');
    sezione2.innerHTML='';
    const sezione1=document.querySelector('#section1');
    sezione1.style.display='none';
    const h1=document.querySelector('h1');
    h1.classList.add('hidden');
    const immagine=document.createElement('img');
    immagine.classList.add('immagine3');
    immagine.src=json.player[0].strCutout;
    sezione2.appendChild(immagine);
    const p1=document.createElement('p');
    p1.textContent='Birth date: ' + json.player[0].dateBorn;
    p1.classList.add('risultato');
    sezione2.appendChild(p1);
    const p2=document.createElement('p');
    p2.textContent='Birth place: ' + json.player[0].strBirthLocation;
    p2.classList.add('risultato');
    sezione2.appendChild(p2);
    const p3=document.createElement('p');
    p3.textContent='Height: ' + json.player[0].strHeight;
    p3.classList.add('risultato');
    sezione2.appendChild(p3);
    const p4=document.createElement('p');
    p4.textContent='Weight: ' + json.player[0].strWeight;
    p4.classList.add('risultato');
    sezione2.appendChild(p4);
    const p5=document.createElement('p');
    p5.textContent='Field position: ' + json.player[0].strPosition;
    p5.classList.add('risultato');
    sezione2.appendChild(p5);
    const p6=document.createElement('p');
    p6.textContent='Nationality: ' + json.player[0].strNationality;
    p6.classList.add('risultato');
    sezione2.appendChild(p6);
    const p7=document.createElement('p');
    p7.textContent='Club: ' + json.player[0].strTeam;
    p7.classList.add('risultato');
    sezione2.appendChild(p7);
    const p8=document.createElement('p');
    p8.textContent='Jersey number: ' + json.player[0].strNumber;
    p8.classList.add('risultato');
    sezione2.appendChild(p8);
    const p9=document.createElement('p');
    p9.textContent='National team: ' + json.player[0].strTeam2;
    p9.classList.add('risultato');
    sezione2.appendChild(p9);
    const p10=document.createElement('p');
    p10.textContent='Favorite foot: ' + json.player[0].strSide;
    p10.classList.add('risultato');
    sezione2.appendChild(p10);
}

function onSuccess2(response){
    return response.json();
}

function onSubmit(event){
    event.preventDefault();
    const text=document.querySelector('#barra');
    const contenuto=text.value;
    console.log(contenuto);
    if(text){
        const content=encodeURIComponent(text);
        const opzione=document.querySelector('#seleziona').value;
        console.log(opzione);
        if(opzione==='Serie A'){
                fetch("https://v3.football.api-sports.io/teams?league=135&season=2022", {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "v3.football.api-sports.io",
                        "x-rapidapi-key": "55068989789c93a8435d6e1c2fc66e9d"
                    }
                }).then(onSuccess).then(onJson);
            }
        else if(opzione==='Premier League'){
                fetch("https://v3.football.api-sports.io/teams?league=39&season=2022", {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "v3.football.api-sports.io",
                        "x-rapidapi-key": "55068989789c93a8435d6e1c2fc66e9d"
                    }
                }).then(onSuccess).then(onJson);
            }

        else if(opzione==='Bundesliga'){
            fetch("https://v3.football.api-sports.io/teams?league=78&season=2022", {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "v3.football.api-sports.io",
                        "x-rapidapi-key": "55068989789c93a8435d6e1c2fc66e9d"
                    }
                }).then(onSuccess).then(onJson);
            }    
        else if(opzione==='Ligue 1'){
            fetch("https://v3.football.api-sports.io/teams?league=61&season=2022", {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "v3.football.api-sports.io",
                        "x-rapidapi-key": "55068989789c93a8435d6e1c2fc66e9d"
                    }
                }).then(onSuccess).then(onJson);
        }
        else if(opzione==='Liga BBVA'){
            fetch("https://v3.football.api-sports.io/teams?league=140&season=2022", {
                    "method": "GET",
                    "headers": {
                        "x-rapidapi-host": "v3.football.api-sports.io",
                        "x-rapidapi-key": "55068989789c93a8435d6e1c2fc66e9d"
                    }
                }).then(onSuccess).then(onJson);
        }    
        }

}

function onSubmit2(event){
    event.preventDefault();
    const barra2=document.querySelector('#barra2');
    const nome=barra2.value;
    const barra3=document.querySelector('#barra3');
    const cognome=barra3.value;
    if(nome && cognome){
        fetch('https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=' + nome + '%20' + cognome).then(onSuccess2).then(onJson2);
    }
}


const form1=document.querySelector('#form1');
form1.addEventListener('submit', onSubmit);
const form2=document.querySelector('#form2');
form2.addEventListener('submit', onSubmit2);
const home=document.querySelector('#home');
home.addEventListener('click', onClick);
const home2=document.querySelector('#home2');
home2.addEventListener('click', onClick);