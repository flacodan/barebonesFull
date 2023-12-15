
const createForm = document.getElementById('createForm');
const nameInput = document.getElementById('create-name-input');
const powerInput = document.getElementById('create-power-input');
const healthInput = document.getElementById('create-health-input');

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
        console.log(response.data);
    })
    .catch((err) => {
        console.log(err);
    })
})