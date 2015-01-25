var sum = 0;
var i = 0;
var j = 1;

var fibsum = function(max) {
	for (0; i + j < max;) {
		i += j
		j += i
		if (i % 2 === 0 && i < max) {
			sum += i;
		}
		else if (j % 2 === 0 && j < max) {
			sum += j;
		}
	}
	return sum;
}

console.log(fibsum(4000000));
