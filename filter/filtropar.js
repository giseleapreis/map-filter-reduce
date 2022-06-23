function filtropar(arr) {
	if (!arr || !arr.length) return;

	const filteredArr = arr.filter((item) => item % 2 === 0); /* definir o numero par*/

	return filteredArr;
}

console.log(filtropar([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 13]));
