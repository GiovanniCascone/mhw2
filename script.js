/* TODO: inserite il codice JavaScript necessario a completare il MHW! */

const boxes = document.querySelectorAll('section div');
for(const box of boxes){
    box.addEventListener('click', check);
}
const titolo = document.querySelector('h2');
const paragrafo = document.querySelector('p');
const bottone = document.querySelector('button');

bottone.addEventListener('click', reset);
bottone.addEventListener('mouseover', on_bot);
bottone.addEventListener('mouseout', out_bot);

function on_bot(event){
    bottone.style.backgroundColor = '#e0e0e0';
}

function out_bot(event){
    bottone.style.backgroundColor = '#cecece';
}

function reset(){
    for(const box of boxes){
        box.addEventListener('click', check);
        box.style.opacity = '1';
        const casella = box.querySelector('.checkbox');
        casella.src = "images/unchecked.png";
        box.style.backgroundColor = '#f4f4f4';
        titolo.classList.add('hidden');
        paragrafo.classList.add('hidden');
        bottone.classList.add('hidden');
    }
}


function check(event){
    const box = event.currentTarget;
    box.style.backgroundColor = '#cfe3ff';
    box.style.opacity = '1';
    const casella = box.querySelector('.checkbox');
    casella.src = "images/checked.png";
    const checked = casella.src;
    const id = box.dataset.choiceId;
    const qu = box.dataset.questionId;
    console.log(id);
    for(const l_box of boxes){
        let l_id = l_box.dataset.choiceId;
        let l_qu = l_box.dataset.questionId;
        if(id !== l_id && qu === l_qu ){
            l_box.style.opacity = '0.6';
            l_box.style.backgroundColor = '#f4f4f4';
            const casella = l_box.querySelector('.checkbox');
            casella.src = "images/unchecked.png";
        }
    }
    let scores = { blep: 0, burger: 0, cart: 0, dopey: 0, happy: 0, nerd: 0, shy: 0, sleeping: 0, sleepy: 0};
    let risposte = 0;
    for(const l_box of boxes){
        const l_qu = l_box.dataset.questionId;
        const l_id = l_box.dataset.choiceId;
        const l_casella = l_box.querySelector('.checkbox');
        const percorso = l_casella.src;
        if(percorso === checked){
            if(l_qu === 'one'){
                risposte ++;
                console.log(l_id);
                scores[l_id] ++;
                console.log(scores);
                console.log('1 ' + risposte);
            }
            if(l_qu === 'two'){
                risposte ++;
                console.log(l_id);
                scores[l_id] ++;
                console.log(scores);
                console.log('2' + risposte);
            }
            if(l_qu === 'three'){
                risposte ++;
                console.log(l_id);
                scores[l_id] ++;
                console.log(scores);
                console.log('3' + risposte);
            }
        }

        if(risposte === 3){
            console.log('Hai finito!');
            stop();
            let max = 0;
            for(let key in scores){
                if(scores[key] > max){
                    max = scores[key];
                }
            }
            let parola;
            for(let key in scores){
                if(scores[key] === max){
                    parola = key;
                    console.log('Parola '+ parola);
                }
            }
            console.log(RESULTS_MAP[parola]);
            
            titolo.classList.remove('hidden');
            titolo.textContent = RESULTS_MAP[parola].title;
            
            
            paragrafo.classList.remove('hidden');
            paragrafo.textContent = RESULTS_MAP[parola].contents;
            

            bottone.classList.remove('hidden');
            
            
            break;
        }
    }
}

function stop(){
    for(const l_box of boxes){
        l_box.removeEventListener('click', check); 
    }
}