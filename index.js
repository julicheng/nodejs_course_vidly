const mongoose = require('mongoose');
const genres = require('./routes/genres');
const express = require('express');
const app = express();

// connect to mongodb
mongoose
  .connect('mongodb://localhost/vidly', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB...'))
  .catch(() => console.error('Could not connect to MongoDB...'));

// adding a piece of middleware
app.use(express.json()); // req.body is this
app.use('/api/genres', genres);

const port = process.env.PORT || 3000;
app.listen(3000, () => console.log(`Listening on port ${port}....`));
