const morango = {
	preço: 5,
};

const kiwi = {
	preço: 4,
};

function mapArray() {
	const array = [1, 2, 3, 4, 5];

	return array.map(function (item) {
		return item * this.preço; /*multiplica o valor do item pelo preço*/
	}, morango); /*seleciona o item*/
}

console.log(mapArray());
