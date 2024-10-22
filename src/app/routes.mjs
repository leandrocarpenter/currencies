import express from 'express';
import {BRL, EUR, BTC, USD} from '../models/currencies.mjs';

const router = express.Router();

router.use((req, res, next) => {
  console.log('Horário: ', Date.now())
  next()
})

router.get('/', (req, res) => {
  res.send('Homepage de Currencies')
})

router.get('/currencies', (req, res) => {
  res.json({
    BRL: BRL,
    EUR: EUR,
    BTC: BTC,
    USD: USD,
  })
})
export default router