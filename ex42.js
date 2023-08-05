var magician = ["Houdini", "Copperfield", "Blaine"];
function show_magicians() {
    for (var i = 0; i < magician.length; i++) {
        console.log(magician[i]);
    }
}
console.log(show_magicians());
function make_great() {
    for (var i = 0; i < magician.length; i++) {
        console.log("The Great ", magician[i]);
    }
}
console.log(make_great());
