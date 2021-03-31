const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { routerBlog, routerVillas } = require('./controller');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/assets/images`));

app.get('/', (_req, res) => res.send('Myconian Luxury'));
app.use('/blog', routerBlog);
app.use('/villas', routerVillas);

app.listen(PORT);
