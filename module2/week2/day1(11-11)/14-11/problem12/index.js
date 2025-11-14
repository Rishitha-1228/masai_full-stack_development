function signup(userName) {
    let users = ["john", "david", "maria"]; // existing users

    if (users.includes(userName)) {
        return "User Already Registered, Please Login";
    } else {
        users.push(userName);
        return "Signup Successful, Please Login";
    }
}

module.exports = signup;
