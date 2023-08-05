function make_album(artistName: string, albumTitle: string, tracks?: number): void {
    const album_object1 = {
        artistName: "Rasilia"
        , albumTitle: "Motomami"
    }
    const album_object2 = {
        artistName: "Rasilia",
        albumTitle: "Beyoncé"
    }
    const album_object3 = {
        artistName: "Pusha",
        albumTitle: "It's Almost Dry"
    }
    console.log(`${artistName}, ${albumTitle}, ${tracks}`)
}
console.log(make_album(`Pusha`, `It's Almost Dry`))
console.log(make_album(`Rasilia`, `Beyoncé`))
console.log(make_album(`Rasilia`, `Motomami`, 10))