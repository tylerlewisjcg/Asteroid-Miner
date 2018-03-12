const express = require('express'),
 bodyParser = require('body-parser'),
cors = require('cors'),
uc = require('./controllers/user_controller');


const app = express();
app.use(cors());
app.use(bodyParser.json());



app.get('/api/users', uc.read);
app.post('/api/users', uc.create);
app.put('/api/users/:id', uc.update);
app.delete('/api/users/:id', uc.delete);


const port = 3005;


app.listen(port, ()=> console.log(`Listening on port ${port}`));



