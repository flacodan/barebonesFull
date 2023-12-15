import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

let app = express();
app.use(express.json());

let db = []; //our fake db


app.get('/', (req, res) => {
    res.sendFile(join(dirname(fileURLToPath(import.meta.url)), '/public/index.html'))
})

app.get('/css', (req, res) => {
    res.sendFile(join(dirname(fileURLToPath(import.meta.url)), '/public/styles.css'))
})

app.get('/js', (req, res) => {
    res.sendFile(join(dirname(fileURLToPath(import.meta.url)), '/public/main.js'))
})

app.post('/create-fighter', (req, res) => {
    db.push(req.body);
    res.status(200).send(db) //status 200 is default so we didn't need to put the status call for success, it's just an example
})

app.get('/fighters', (req, res) => {
    res.status(200).send(db);
})

app.delete('/delete-fighter/:name', (req, res) => {
    let name = req.params.name;
    for(let i = 0; i < db.length; i++) {
        if (db[i].name === name) {
            db.splice(i, 1);
        }
    }
    res.send(db);
})


app.listen(8080, () => {
    console.log('Server listening on port 8080');
})
