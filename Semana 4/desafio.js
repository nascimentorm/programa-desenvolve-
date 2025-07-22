const meuNome = "Mirian";
const sobrenome = "Nascimento"
const nomeCompleto = meuNome + " " + sobrenome
const apresentacao = `Boa noite, meu nome é ${meuNome} ${sobrenome}`;

console.log("nome completo:", nomeCompleto.toLowerCase());
console.log("nome completo tamanho:", nomeCompleto.length);
console.log( "Apresentação:", apresentacao);


// DESAFIO: Faça estas operaçoes 
// 1. Extraia o primeiro nome usando o metodo slice ou substring
// 2. Verifique se o nome completo contém a letra 'a'
// 3. Substitua "Nascimento" por outro sobrenome usando replace

// 1.
const primeiroNome = meuNome.slice(0,7);
console.log("Primeiro nome:", primeiroNome);

//2.
 const caractere = 'a'
 const contem = nomeCompleto.includes(caractere);
 console.log("resposta:", contem);

//3. 

const novoSobrenome = sobrenome.replace(/Nascimento/g,"Rosa");
const novo = meuNome+ " " +novoSobrenome;
console.log("Meu novo sobrenome é:", novo);
