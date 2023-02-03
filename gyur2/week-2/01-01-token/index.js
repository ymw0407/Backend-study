function add(a, b) {
	const result = a + b; // 3
    
    return result;
}

function minus(c, d) {
	const result = c - d; // 2
    return result;
}

const addResult = add(1, 2);
const minusResult = minus(12, 10);

const mergeResult = addResult * minusResult;

console.log(addResult);
console.log(minusResult);
console.log(mergeResult);
