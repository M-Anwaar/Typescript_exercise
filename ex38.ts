function describe_city(name: string, country: string = "Pakistan") : void {
    console.log(`${name} is in ${country}`)
}

console.log(describe_city("Karachi"))
console.log(describe_city("Rawalpindi"))
console.log(describe_city("Bejing"))