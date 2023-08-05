{
    var user_name = ["Ussaid", "Anwar", "Admin", "Waqas", "Jameel"];
    var current_users = ["Ali", "Anwar", "Admin", "Waqar", "Junaid"];
    for (var i = 0; i < current_users.length; i++) {
        if (current_users[i].toLowerCase() == user_name[i].toLowerCase()) {
            console.log("".concat(current_users[i], " not available! You need to enter a new username."));
        }
        else {
            console.log("".concat(current_users[i], " Username is available."));
        }
    }
}
