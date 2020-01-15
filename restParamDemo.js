function name(first) {
    var other = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        other[_i - 1] = arguments[_i];
    }
    if (other == undefined)
        return first;
    else if (other.length == 1)
        return first + other[0];
}
console.log(name('niki'));
