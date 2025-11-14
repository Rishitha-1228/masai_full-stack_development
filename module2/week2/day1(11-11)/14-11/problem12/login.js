function signup(userName) {
    let users = ["john", "david", "maria"];

    if (users.includes(userName)) {
        return "User Already Registered, Please Login";
    } else {
        users.push(userName);
        return "Signup Successful, Please Login";
    }
}

function login(userName, password) {
    let users = ["john", "david", "maria"]; // existing users
    let correctPassword = "Emp@123";

    if (!users.includes(userName)) {
        return "User Not Found, Please Signup";
    }

    if (password !== correctPassword) {
        return "Wrong Password....";
    }

    return "Login Successful...";
}

module.exports = { signup, login };
