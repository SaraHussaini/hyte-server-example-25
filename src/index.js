import express from 'express';
import cors from 'cors';
//import {addItem, deleteItem, editItem, getItemById, getItems} from './items.js';

//import userRouter from './routes/user-router.js';
//import authRouter from './routes/auth-router.js';
//import entryRouter from './routes/entry-router.js';
//const hostname = '127.0.0.1';
const app = express();
//const port = 3000;

// middleware, mitä tarvitaan, jotta Ullan fronttiharjoitukset toimivat (Vite)
// lisää myös: import cors from 'cors'; tiedoston yläosaan
// ja asenna paketti: npm install cors
app.use(cors());

// Staattinen html-sivusto tarjoillaan palvelimen juuressa
app.use('/', express.static('public'));
// middleware, joka lukee json data POST-pyyntöjen rungosta (body)
app.use(express.json());

// rest-apin resurssit tarjoillaan /api/-polun alla
app.get('/api/', (req, res) => {
  console.log('get-pyyntö apin juureen havaittu');
  console.log(req.url);
  res.send('Welcome to my REST API!');
});


