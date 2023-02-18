const express = require('express');
const route = express.Router();
const app = express();
const port = 3000;
const users = require('./UserControllers')
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(route);

app.get('/',(req,res)=>{
    res.send("Selamat datang di sini!")
});

app.get('/user',users.GetUser);
app.post('/user',users.CreateUser);
app.put('/user/:id',users.EditUser);
app.delete('/user/:id',users.DeleteUser)

app.listen(port,()=>{
    console.log(`listening on ${port}`)
});