const express = require('express');

const hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials');

const app = express();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.use(express.static('public'));

app.locals.pageTitle = 'My Application';

app.get('/', (request, response) => {
  response.render('home', { pageTitle: 'Home' });
});

app.get('/intro', (request, response) => {
  response.render('intro', { pageTitle: 'Intro' });
});

app.get('/newprojects', (request, response) => {
  response.render('newprojects', { pageTitle: 'New Projects' });
});

app.listen(3000);
