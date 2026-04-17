console.log('helllo');

function addTwoNum(num1, ...args) {
	return num1 + args[0];
}

console.log(addTwoNum(4, 5));