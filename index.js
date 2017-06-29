var express = require('express');
var app = express();
var path = require('path');

app.set('port', (process.env.PORT || 3001));

app.use(express.static(__dirname + '/build'));


app.get('/', function(request, response) {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


