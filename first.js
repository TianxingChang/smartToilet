// this is just a file for testing
const express = require('express');
const app = express();

const toilet_status = [
    {id:1, name:'lg1',avail_num:'0',report:'0'},
    {id:2, name:'lg2',avail_num:'0',report:'0'},
    {id:3, name:'lg3',avail_num:'0',report:'0'},
    {id:4, name:'lg4',avail_num:'0',report:'0'},
];

app.get('/',(req,res)=>{
    res.send('Wanna go to toilet?');
});

app.get('/api/toilet',(req,res)=>{
    res.send(toilet_status);
});

// app.post('/api/toilet',(req,res)=>{
//     cosnt toilet_status = {
//         id: course
//     }
// });

app.get('api/toilet/:id',(req,res)=>{
    const toilet = toilet_status.find(c=>c.id === parseInt(req.parama.id));
    if(!course)res.toilet_status(404).send('No toilet found, just do it right here');
    res.send(toilet_status);
});

const port = 3000;
app.listen(port,()=>console.log('Listening on port ${port}...'));
