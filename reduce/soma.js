function soma(arr) {
	if (!arr || !arr.length) return;
	const soma = arr.reduce((prev, curr) => prev + curr);

	return soma;
}

console.log(soma([1, 1, 1, 2, 2, 3, 3, 45, 98]));
