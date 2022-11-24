const express = require('express');
const app = express();
const Joi = require('joi');

app.use(express.json());
const toilet_status = [
    {id:1, name:'lg1',avail_num:'0',report:'0'},
    {id:2, name:'lg2',avail_num:'0',report:'0'},
    {id:3, name:'lg3',avail_num:'0',report:'0'},
    {id:4, name:'lg4',avail_num:'0',report:'0'},
];

app.get('/api',(req,res)=>{
    res.send('Wanna go to toilet?');
});

app.get('/api/toilet',(req,res)=>{
    res.send(toilet_status);
});

app.put('/api/toilet/:id',(req,res)=>{
    const toilet = toilet_status.find(c=>c.id === parseInt(req.params.id));
    if(!toilet) res.status(404).send('The toilet was not found');

    const {error} = validateToilet(req.body);
    if(error){
        res.status(400).send(error.details[0].message);
        return;
    }
    toilet.avail_num = req.body.avail_num;
    toilet.report = req.body.report;
    res.send(toilet);
});
// app.post('/api/toilet',(req,res)=>{
//     cosnt toilet_status = {
//         id: course
//     }
// });

app.get('/api/toilet/:id',(req,res)=>{
    const toilet = toilet_status.find(c=>c.id === parseInt(req.params.id));
    if(!toilet)res.toilet_status(404).send('No toilet found, just do it right here');
    res.send(toilet);
});

const port = process.env.PORT || 3000;
app.listen(port,()=>console.log('Listening on port ${port}...'));


function validateToilet(toilet){
    const schema = Joi.object({
        name: Joi.string().min(1).required(),
        avail_num: Joi.number().required(),
        report: Joi.number().required(),
    });
    return schema.validate(toilet);
}
