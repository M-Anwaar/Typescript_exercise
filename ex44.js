function make_sandwich() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    for (var i = 0; i < item.length; i++) {
        console.log(item[i]);
    }
}
console.log(make_sandwich("Tomatoes", "Lettuce", "Onions"));
console.log(make_sandwich("Jelly", "Jam", "Kechup"));
console.log(make_sandwich("Mayonese", "Achar", "Chicken"));
