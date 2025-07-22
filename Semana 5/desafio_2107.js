// Lista de produtos com nome, categoria e preço
const produtos = [
    { nome: "Notebook", categoria: "Eletrônicos", preco: 5020 },
    { nome: "Camiseta", categoria: "Vestuário", preco: 120 },
    { nome: "Bicicleta", categoria: "Esportes", preco: 1800 }
  ];
  
  // 1. Criei um array de strings formatadas: "Nome do produto - Categoria"
  const nomesFormatados = produtos.map(produto => {
    return `${produto.nome} - ${produto.categoria}`;
  });
  console.log("1. Nome formatado:");
  console.log(nomesFormatados);
  
  
  // 2. Criei um array com os preços com 15% de imposto
  const precosComImposto = produtos.map(produto => {
    return produto.preco * 1.15;
  });
  console.log("\n2. Preços com imposto:");
  console.log(precosComImposto);
  
  
  // 3. Usei forEach com acumulador para calcular o total dos preços
  let total = 0;
  produtos.forEach(produto => {
    total += produto.preco;
  });
  console.log("\n3. Total dos preços sem imposto:");
  console.log(total); 
  
  // Total com imposto
  let totalComImposto = 0;
  produtos.forEach(produto => {
    totalComImposto += produto.preco * 1.15;
  });
  console.log("\nTotal dos preços com imposto:");
  console.log(totalComImposto); 
  