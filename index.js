function signup (username ){
    let user = {shanu: arham };
    if (user[username]) {
        return "Username already taken";
    }
}

// Example usage:
console.log(signup("shanu")); // Output: "Username already taken"
console.log(signup("newuser")); // Output: undefined