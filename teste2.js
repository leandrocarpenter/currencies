// import module
const readline = require('readline').createInterface(process.stdin, process.stdout);

// declared and initialize const, always UPPERcase
const USD = 5.25;
const EUR = 6.15;
const BTC = 0.0000045;
const BRL = 1;

// declared and initialize variable, using let because they are changes
let currencyReceived = "";
let amountReceived = 0.0;

// input default stdin(always keyboard) and stdout(windows)

readline.question(`Qual valor deseja converter ? `, amount => {
  amountReceived = parseFloat(amount);

  readline.question(`Qual a moeda desse valor ? `, currency => {
    currencyReceived = currency;

    // Perform multiplication based on the selected currency
    let conversion;
    switch (currencyReceived.toUpperCase()) {
      case "USD":
        conversion = amountReceived * USD;
        break;
      case "EUR":
        conversion = amountReceived * EUR;
        break;
      case "BTC":
        conversion = amountReceived * BTC;
        break;
      case "BRL":
        conversion = amountReceived * BRL;
        break;
      default:
        console.log("Moeda inválida.");
        return;
    }

    console.log(`Conversão: ${conversion}`);

    readline.close();
  });
});