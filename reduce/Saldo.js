function Saldo(saldo, itens) {
	if (!saldo || !itens || !itens.length) return 'É necessario o envio de todos os parâmetros';

	const saldoFinal = itens.reduce((acc, item) => acc - item.preco, saldo);

	return `O saldo será de ${saldoFinal} reais`;
}

lista = [
	{
		preco: 6,
		nome: 'morango',
	},
	{
		preco: 7,
		nome: 'chocolate',
	},
	{
		preco: 5,
		nome: 'leite condensado',
	},
	{
		preco: 3,
		nome: 'creme de leite',
	},
	{
		preco: 4,
		nome: 'manteiga',
	},
];

saldo = 50;

console.log(Saldo(saldo, lista));
