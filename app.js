const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const main = require('./views/main');
const { db } = require('./models');

app.use(express.static(path.join(__dirname, '../public')));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res, next) => {
    res.send(main());
});

// db.authenticate().
// then(() => {
//   console.log('connected to the database');
// })

const init = async () => {
    await db.sync();
    app.listen(3000, () => {
        console.log('Listening!!!!');
    });
};

init();
