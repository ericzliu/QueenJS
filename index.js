const Queens = require('./queen');

function main() {
	const queens = new Queens(8);
	const iterator = queens.lookUpRec(0);
	const answer = iterator.next();
	console.log(answer);
	console.log(iterator.next());
}

main();
