function make_shirt(size) {
    if (size === "Large" || size === "Medium") {
        console.log("Size of the shirt is " + size + " and this is printed on the shirt : I Love TypeScript!!");
    }
    else {
        console.log("Size of the shirt is " + size + " and this is printed on the shirt : Our time will come!!");
    }
}
console.log(make_shirt("Large"));
console.log(make_shirt("Medium"));
console.log(make_shirt("Small"));
