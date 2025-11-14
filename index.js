function signup (username ){
    let user = {shanu: arham };
    if (user[username]) {
        return "Username already taken";
    }
}

// Example usage:
console.log(signup("shanu")); // Output: "Username already taken"
console.log(signup("newUser")); //signup successful


//login function


 function login(userName, password) {
    let users = ["arham", "shanu", ""];

    if (!users.includes(userName)) {
        return "User Not Found, Please Signup";
    } else {
        if (password === "Emp@123") {
            return "Login Successful...";
        } else {
            return "Wrong Password....";
        }
    }
}

console.log(login("arham", "Emp@123"));

        