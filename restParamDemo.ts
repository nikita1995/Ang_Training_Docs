function name(first, ...other):string {
if(other == undefined)
	return first;
else if(other.length == 1)
	return first + other[0];
}

console.log(name('niki', 'mahajan')); 