const express = require('express');
const app = express();
const SERVER_PORT = 8089;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/plan');
    res.status(200).send('');
});

app.get('/hello', (req, res) => {
    res.setHeader('Content-Type', 'text/plan');
    res.status(200).send('Hello Express JS');
});

app.get('/user', (req, res) => {
    const user = {
        firstname: 'ALlanis',
        lastname: 'Sumaya',
    };
    res.json(user);
});

app.post('/user/:firstname/:lastname', (req, res) => {
    const { firstname, lastname } = req.params;
    const user = {
        firstname,
        lastname,
    };
    res.json(user);
});

app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}`);
});
