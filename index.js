const express = require('express');
var cors = require('cors');

const app = express();

app.use(cors());

app.listen(8086, function () {  //포트번호
    console.log('Server Starting!')
});

app.get('/pet', function (req, res) {   // (req, res) => {res.send('Pet Shopppping');}
    res.send('Pet Shopppping');
});

/* app.get('/dog', (req, res) => {
    //res.send({'강아지':'멍멍'});
    res.json({ '강아지': '멍멍' });
}); */

/* app.get('/pet/:id', (req, res) => {
   const q = req.params
   console.log(q)
   res.json({'petid':q.id});
}); */

/* app.get('/pet/:id', (req, res) => {
    const p = req.params;
    console.log(p);
    const q = req.query;
    console.log(q)
    console.log(q.name)
    console.log(q.age)
    res.json(q);
 });  */

/* app.get('/sound/:name', (req, res) => {
    const p = req.params;
    if (p.name == 'cat')
        res.json({ 'sound': '냐옹옹' });
    if (p.name == 'cat')
        res.json({ 'sound': '냐옹옹' });
}); */

app.get('/sound/:name', (req, res) => {
    const {name} = req.params;
    console.log(name)
     res.json({ 'sound': '냐옹' , 'name':'야옹'});
});

// app.get('/', function (req, res) {
//     res.sendFile(__dirname + '/main.html');
// });

