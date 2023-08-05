function make_sandwich(...item: string[]) {
    for (let i = 0; i < item.length; i++) {
        console.log(item[i])
        }
}
console.log(make_sandwich("Tomatoes", "Lettuce", "Onions"));
console.log(make_sandwich("Jelly", "Jam", "Kechup"));
console.log(make_sandwich("Mayonese", "Achar", "Chicken"));