// Express Code Goes Here


const express = require('express'),
 bodyParser = require('body-parser'),
cors = require('cors'),
uc = require('./controllers/user_controller')


const app = express();

app.use(bodyParser.json());
app.use(cors());




app.post('/api/users', uc.create);
app.get('/api/users', uc.read);
app.put('/api/users/:id', uc.update);
app.delete('/api/books/:id', uc.delete);


const port = 3005;


app.listen(port, ()=> console.log(`Listening on port ${port}`));



