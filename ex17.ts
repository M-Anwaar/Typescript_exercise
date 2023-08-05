{
    const dinner2 = ["Ahmad", "Ali", "Hassan"]
console.log(dinner2[0] + "! Please have a dinner with me tomorrow.")
console.log(dinner2[1] + "! Please have a dinner with me tomorrow.")
console.log(dinner2[2] + "! Please have a dinner with me tomorrow.")
console.log(dinner2[1])

dinner2.splice(1,1,"Arslan")

console.log(dinner2[0] + "! Please have a dinner with me tomorrow.")
console.log(dinner2[1] + "! Please have a dinner with me tomorrow.")
console.log(dinner2[2] + "! Please have a dinner with me tomorrow.")

console.log("I have found a big dinner table.")


dinner2.unshift("Sadia")
dinner2.splice(2,0, "Nadia")
dinner2.push("Aleena")

console.log(dinner2[0] + "! Please dine with me tomorrow night.")
console.log(dinner2[1] + "! Please dine with me tomorrow night.")
console.log(dinner2[2] + "! Please dine with me tomorrow night.")
console.log(dinner2[3] + "! Please dine with me tomorrow night.")
console.log(dinner2[4] + "! Please dine with me tomorrow night.")
console.log(dinner2[5] + "! Please dine with me tomorrow night.")

console.log("I can only invite two people.")

const message1 = `I am sorry ${dinner2.pop()}, I can not invite you on dinner.`
console.log(message1)

const message2 = `I am sorry ${dinner2.pop()}, I can not invite you on dinner.`
console.log(message2)

const message3 = `I am sorry ${dinner2.pop()}, I can not invite you on dinner.`
console.log(message3)

const message4 = `I am sorry ${dinner2.pop()}, I can not invite you on dinner.`
console.log(message4)

console.log(dinner2[0] + "! You are still invited.")
console.log(dinner2[1] + "! You are still invited.")

const message5 = `${dinner2.pop()}`
const message6 = `${dinner2.pop()}`

console.log(dinner2)
}