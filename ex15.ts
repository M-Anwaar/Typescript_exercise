{
    const myGuestList = ["Ahmad", "Ali", "Hassan"]
    console.log(myGuestList[0] + "! Please have a dinner with me tomorrow.")
    console.log(myGuestList[1] + "! Please have a dinner with me tomorrow.")
    console.log(myGuestList[2] + "! Please have a dinner with me tomorrow.")

    console.log(myGuestList[1])


    myGuestList.splice(1,1,"Arslan")

    console.log(myGuestList[0] + "! Please have a dinner with me tomorrow.")
    console.log(myGuestList[1] + "! Please have a dinner with me tomorrow.")
    console.log(myGuestList[2] + "! Please have a dinner with me tomorrow.")
    
}