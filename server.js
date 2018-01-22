var express = require('express');
var exphbs = require('express-handlebars');
var app = express();

app.set('port', process.env.PORT || 3000);
app.engine('.hbs', exphbs({defaultLayout: 'master', extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(app.get('port'), () => {
    console.log('server connected in PORT ' + app.get('port'));
});


//git ls -a , git status 