const express = require('express');
const bodyParser = require('body-parser');
const routerBlog = require('./controller/blogController');

const app = express();

const PORT = 3001;

app.use(bodyParser.json());

app.get('/', (_req, res) => res.send('Hello World!'));
app.use('/blog', routerBlog);

app.listen(PORT);
