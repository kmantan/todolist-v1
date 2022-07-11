const express = require('express');
const bodyParser = require('body-parser');
const app = express();
let ejs = require('ejs');
app.set("view engine", 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

var todos = [];


var today = new Date();
const options = {
  weekday: 'long',
  day: 'numeric',
  month: 'long'
};
var date = today.toLocaleDateString('en-US', options);

app.get('/', (req, res) => {

  res.render('todo', {today: date, list: todos});

});

app.post('/', (req, res) => {
  todos.push(req.body.addTodo);
  res.redirect('/');

})


app.listen(3000, () => {
  console.log('Now listening to port 3000.....');
});