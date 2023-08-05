function cars_info(manufacture, model) {
    var keyword_argument = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        keyword_argument[_i - 2] = arguments[_i];
    }
    var car = {
        manufacture: manufacture,
        model: model,
    };
}
console.log(cars_info("Farari", 1999, ["color", "Red"], ["make", "Japan"]));
