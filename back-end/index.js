const express = require('express');
const bodyParser = require('body-parser');
const { routerBlog, routerVillas } = require('./controller');

const app = express();

const PORT = 3001;

app.use(bodyParser.json());

app.use(express.static(`${__dirname}/assets`));

app.get('/', (_req, res) => res.send('Hello World!'));
app.use('/blog', routerBlog);
app.use('/villas', routerVillas);

app.listen(PORT);
