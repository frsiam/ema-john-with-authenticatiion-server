const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');
const port = process.env.PORT || 4000;
const app = express();

// midleware 
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.yqc26.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("emaJohn").collection("products");
  // perform actions on the collection object
  console.log('connected to db')
  client.close();
});






app.get('/', (req, res) => {
    res.send('john is running and waiting for ema john')
});

app.listen(port, () => {
    console.log('John is running on port', port)
})