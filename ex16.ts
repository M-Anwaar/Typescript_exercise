{
    const dinner1 = ["Ahmad", "Ali", "Hassan"]
console.log(dinner1[0] + "! Please have a dinner with me tomorrow.")
console.log(dinner1[1] + "! Please have a dinner with me tomorrow.")
console.log(dinner1[2] + "! Please have a dinner with me tomorrow.")
console.log(dinner1[1])

dinner1.splice(1,1,"Arslan")

console.log(dinner1[0] + "! Please have a dinner with me tomorrow.")
console.log(dinner1[1] + "! Please have a dinner with me tomorrow.")
console.log(dinner1[2] + "! Please have a dinner with me tomorrow.")

console.log(dinner1[0] + "! I have found a bigger dinner table.")
console.log(dinner1[1] + "! I have found a bigger dinner table.")
console.log(dinner1[2] + "! I have found a bigger dinner table.")


dinner1.unshift("Sadia")
dinner1.splice(2,0, "Nadia")
dinner1.push("Aleena")

console.log(dinner1[0] + "! Please dine with me tomorrow night.")
console.log(dinner1[1] + "! Please dine with me tomorrow night.")
console.log(dinner1[2] + "! Please dine with me tomorrow night.")
console.log(dinner1[3] + "! Please dine with me tomorrow night.")
console.log(dinner1[4] + "! Please dine with me tomorrow night.")
console.log(dinner1[5] + "! Please dine with me tomorrow night.")
}