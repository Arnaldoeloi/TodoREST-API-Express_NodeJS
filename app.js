import express from 'express';
import db from './db/db';

//Set up the express App
const app = express();
var router = express.Router();

//get all todos
app.get('/api/v1/todos', (req, res)=>{
    res.status(200).send({
        success: 'true',
        message: 'Todos retrieved successfully',
        todos: db
    })
});

router.get('/', function(req, res, next) {
    res.send('THIS IS AN API');
    res.redirect('/api/v1/todos');
 })

const PORT = 5000;

app.listen(PORT, ()=>{
    console.log(`server running on port ${PORT}`)
});