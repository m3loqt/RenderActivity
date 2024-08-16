import express from "express"

const app = express();
app.use(express.json());



app.get('/', (req, res) => {
    res.status(200).send('Welcome to my server');
});
const PORT = 3333;

app.listen(PORT, () => {
    console.log(`Server Started on port ${PORT}`);
});

app.get('/myprofile', (req, res) => {
    res.status(200).send({name: 'Mel', address: "Cebu City", age: 23});
});


