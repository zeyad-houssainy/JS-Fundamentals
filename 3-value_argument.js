if (process.argv[2]) {
	process.argv.slice(2).forEach(arg => console.log(arg));
} else {
	console.log('No argument');
}
