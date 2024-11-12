import express from 'express';
import {BRL, EUR, BTC, USD} from '../models/currencies.mjs';

const router = express.Router();

function isNumeric(str) {
  if (typeof str != "string") return false // we only process strings!  
  return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
         !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

router.use((req, res, next) => {
  console.log('Horário: ', Date.now())
  next()
})

router.get('/', (req, res) => {
  res.send('Homepage de Currencies')
})

router.get('/conversion/:amount', (req, res) => {
  const amount = req.params.amount
  const from = req.query.from
  const to = req.query.to

  const valid = isNumeric(amount)
  if (!valid) { 
    res.status(400).send('amount não é válido')
  }

  if (!from) {
    res.status(400).send('from is required')
  }

  if (!to) {
    res.status(400).send('to is required')
  }

  if (from !== 'BRL' && from !== 'EUR' && from !== 'USD' && from !== 'BTC'  ) {
    res.status(400).send('from is not allowed as ' + from)
  }

  if (to !== 'BRL' && to !== 'EUR' && to !== 'USD' && to !== 'BTC'  ) {
    res.status(400).send('from is not allowed as ' + to)
  }

  res.send(`Página ${amount}`)
})


router.get('/luana', (req, res) => {
  res.send('Luana, Meu AMOR !!')
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