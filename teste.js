// index.js (ou qualquer nome que você preferir)

// Variável global
const real = 10;

// Importar o módulo readline para interagir com o usuário
const readline = require('readline');

// Criar uma interface para leitura de entrada
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Perguntar ao usuário por um valor
rl.question('Digite um número: ', (answer) => {
  // Converter a resposta para um número
  const valorDigitado = parseInt(answer);

  // Verificar se a entrada é um número válido
  if (!isNaN(valorDigitado)) {
    // Realizar a soma
    const resultado = real + valorDigitado;

    // Exibir o resultado
    console.log(`O resultado da soma é: ${resultado}`);
  } else {
    console.log('Entrada inválida. Por favor, digite um número.');
  }

  // Fechar a interface
  rl.close();
});