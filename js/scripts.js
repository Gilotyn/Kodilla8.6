var a = -1;
var b = 7;
var value = (a * a) + (2 * a * b) - (b * b);
console.log(value);
if (value > 0) {
    console.log('wynik dodatni');
} else if (value === 0) {
	console.log('wynik równy 0');
} else {
    console.log('wynik ujemny');
}