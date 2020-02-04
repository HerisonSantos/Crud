const express = require('express');
const mongoose = require('mongoose')
const bobyParser = require('body-parser');
const router = require('./routes');
const cors = require('cors');
const app = express();
mongoose.connect('mongodb+srv://herison:herison10@omnistack-vub2h.mongodb.net/projeto?retryWrites=true&w=majority')

app.use(cors({origin: 'http://localhost:3333'}));
app.use(express.json());
app.use(router);

app.listen(3333); 