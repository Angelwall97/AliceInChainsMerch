// create an array to store user data
const users = [];

// create a function to add a user to the array
function CreateUser(username, password) {
    users.push({ username, password });
    console.log(users);
}
function authenticationUser(username, password) {
    // find the user by username in the array
    const user = users.find(user => user.username === username);
    
    if(!user || user.password !== password) 
    {
        return false;
    } 
        return true;
    }

// export the CreateUser function
module.exports = { CreateUser, authenticationUser };