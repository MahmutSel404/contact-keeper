const express = require('express');
const app = express();
const connectDB = require('./config/db');

connectDB();

app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World');
});

//Define routes
app.use('/api/users', require('./routes/users'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/auth', require('./routes/auth'));

const PORT = 5000;

app.listen(PORT, () => console.log(`The app is listening to ${PORT}`));
