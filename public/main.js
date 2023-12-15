
const createForm = document.getElementById('createForm');
const nameInput = document.getElementById('create-name-input');
const powerInput = document.getElementById('create-power-input');
const healthInput = document.getElementById('create-health-input');
const deleteForm = document.getElementById('deleteForm');
const deleteInput = document.getElementById('delete-name-input');

createForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (+powerInput.value < 0) {
        alert('Wrong power')
        return;
    }

    if (+healthInput.value < 0) {
        alert('needs health')
        return;
    }

    let maBod = {
        name: nameInput.value,
        power: powerInput.value,
        health: healthInput.value
    }

    axios.post('/create-fighter', maBod)
    .then((response) => {
        loadFightersToDom(response.data);
    })
    .catch((err) => {
        console.log(err);
    })
})

deleteForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    axios.delete('/delete-fighter/' + deleteInput.value)
    .then((result) => {
        console.log('delete!!!!');
        loadFightersToDom(result.data);
})
    .catch(() => {})
})

axios.get('/fighters')
.then((result) => {
    loadFightersToDom(result.data);
})
.catch((err) => {
    console.log(err);
})

function loadFightersToDom(fightersArray) {
    const fighterDiv = document.getElementById('fighters-display');
    document.getElementById('fighters-display').innerHTML = '';

    for(let i=0; i < fightersArray.length; i++) {
        let containerDiv = document.createElement('div');
        let heading = document.createElement('h3');
        let powerP = document.createElement('p');
        let healthP = document.createElement('p');
        containerDiv.appendChild(heading);
        containerDiv.appendChild(powerP);
        containerDiv.appendChild(healthP);
        heading.innerHTML = fightersArray[i].name;
        powerP.innerHTML = "power : " + fightersArray[i].power;
        healthP.innerHTML = "health : " + fightersArray[i].health;
        document.getElementById('fighters-display').appendChild(containerDiv);
    }




}