const numb1 = Math.round((Math.random() * 9) + 0.5);
const numb2 = Math.round((Math.random() * 9) + 0.5);
const numb3 = Math.round((Math.random() * 9) + 0.5);

const container = document.getElementById('container');
const container2 = document.getElementById('container2');
const container3 = document.getElementById('container3');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const input3 = document.getElementById('input3');
const btn = document.getElementById('btn');
const body = document.getElementsByTagName('body')[0];


console.log(numb1, numb2, numb3);

let numberOfTries = 0;

let elementFalse = document.createElement('div');
    elementFalse.classList.add('classDiv2');
    container.appendChild(elementFalse);

btn.addEventListener('click', () => {

    let element1 = document.createElement('div');
    element1.classList.add('classDiv');
    container3.appendChild(element1);

    let element2 = document.createElement('div');
    element2.classList.add('classDiv');
    container3.appendChild(element2);
    
    let element3 = document.createElement('div');
    element3.classList.add('classDiv');
    container3.appendChild(element3);

    
    if(input1.value == numb2){       
        element2.style.background = 'yellow';
    }
    if(input1.value == numb3){     
        element3.style.background = 'yellow';
    }
    
    if(input2.value == numb1){       
        element1.style.background = 'yellow';
    }
    
    if(input2.value == numb3){      
        element3.style.background = 'yellow';
    }
    
    if(input3.value == numb1){       
        element1.style.background = 'yellow';
    }
    if(input3.value == numb2){      
        element2.style.background = 'yellow';
    }

    if(input1.value == numb1){       
        element1.style.background = 'green';
    }

    if(input2.value == numb2){        
        element2.style.background = 'green';
    }

    if(input3.value == numb3){
        element3.style.background = 'green';
    }

    numberOfTries++;
    console.log(numberOfTries);

    elementFalse.innerHTML = `<h1>${numberOfTries}</h1>`;

    if(numberOfTries == 6){
        elementFalse.remove();
        btn.remove();
        input1.remove();
        input2.remove();
        input3.remove();
        let elementH1 = document.createElement('h1');
        elementH1.classList.add('classDiv3');
        elementH1.innerHTML = `<h1>You lose the game</h1>`;
        body.appendChild(elementH1);
    } 

    if((input1.value == numb1)&&(input2.value == numb2)&&(input3.value == numb3)){
        elementFalse.remove();
        btn.remove();
        input1.remove();
        input2.remove();
        input3.remove();
        let elementH1 = document.createElement('h1');
        elementH1.classList.add('classDiv3');
        elementH1.innerHTML = `<h1>You win the game with ${numberOfTries} tries</h1>`;
        body.appendChild(elementH1);

        /* container3.innerHTML = `<h1>You win the game with ${numberOfTries} tries</h1>`; */
    }

});