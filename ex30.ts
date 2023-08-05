{let user_name = ["Anwar", "Ussaid",  "Admin", "Waqas", "Jameel"];

if (user_name.length === 0) {
  console.log("We need to find some users!");
} else {
  for (let i = 0; i < user_name.length; i++) {
    if ("Admin" === user_name[i]) {
      console.log("Hello admin, would you like to see a status report?");
    } else {
      console.log(`Hello ${user_name[i]}, thank you for logging in again`);
    }
  }
}}