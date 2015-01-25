var i = 2;
var FactorList = [];
var largest = 0;
otherFactor = 0;

var makepFactorList = function(f) {
	for (var j = 0; j < f.length; j++) {
		for (var k = 1; k < f.length; k++) {
			if (f[k] % f[j] === 0 && f[k] !== f[j]) {
				delete FactorList[k];
			}
		}
	}
	FactorList = FactorList.filter(function(e){return e});
};

var factor = function(num) {
	otherFactor = num;
	for (0; i < otherFactor; i++) {
		if (otherFactor % i === 0) {
			FactorList.push(i);
			otherFactor = otherFactor / i;
		}
	}
	makepFactorList(FactorList);
	largest = FactorList[FactorList.length - 1];
	return(largest);
}

console.log(factor(600851475143));

