const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('dist'));

// app.get('/', (req, res) => {
//     res.render('index.html');
// });


app.listen(port, () => {console.log(`John is listening on ${port}`)});


//write function with query in db
//import function into server
//route url
//call with the post master general