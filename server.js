const express = require('express');
const redis = require('redis');

const app = express();

// Allow React (port 3000) to fetch data from Express (port 8081)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

const client = redis.createClient({
  host: 'redis',
  port: 6379
});

client.set('visits', 0);

app.get('/visits', (req, res) => {
  client.get('visits', (err, visits) => {
    res.send(visits);
    client.set('visits', parseInt(visits) + 1);
  });
});

app.listen(8081, () => {
  console.log('API listening on port 8081');
});