function make_album(artistName, albumTitle, tracks) {
    var album_object1 = {
        artistName: "Rasilia",
        albumTitle: "Motomami"
    };
    var album_object2 = {
        artistName: "Rasilia",
        albumTitle: "Beyoncé"
    };
    var album_object3 = {
        artistName: "Pusha",
        albumTitle: "It's Almost Dry"
    };
    console.log("".concat(artistName, ", ").concat(albumTitle, ", ").concat(tracks));
}
console.log(make_album("Pusha", "It's Almost Dry"));
console.log(make_album("Rasilia", "Beyonc\u00E9"));
console.log(make_album("Rasilia", "Motomami", 10));
