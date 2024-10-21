// import module
const readline = require('readline').createInterface(process.stdin, process.stdout)

// declared and inicialize const, always UPPERcase
const USD = 5.25;
const EUR = 6.15;
const BTC = 0.0000045;
const BRL = 1;

// declared and inicialize variable, using let because they are changes
let currencyReceived = "";
let amountReceived = 0.0;

//input default stdin(always keyboard) and stdout(windows)

readline.question(`Qual valor deseja converter ?`, amount => {
  amountReceived = parseFloat(amount)

  readline.question(`Qual a moeda desse valor ? `, currency => {
    currencyReceived = currency;

console.log('A Conversa em USD é:', ' ', amountReceived * USD)
console.log('A Conversa em EUR é:', ' ', amountReceived * EUR)
console.log('A Conversa em BTC é:', ' ', amountReceived * BTC)
console.log('A Conversa em BRL é:', ' ', amountReceived * BRL)

readline.close();
  });
});
// process.exit()
