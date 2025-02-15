const express = require('express')
const app = express()
let {people} = require('./data');

app.use(express.static('./methods-public'));

app.get('/api/people', (req,res) => {
    res.status(200).send({success: true, data: people});
})

app.listen(8000, () => {
    console.log('Server is listening on port 8000....');
})
