const { v4: uuidv4 } = require('uuid');

let users = [
    {
        "first_name":"Tony",
        "last_name":"Stark",
        "alias":"Iron Man"
    }
]

module.exports.getUsers = (req, res) => {

    res.status(200).send(users);

}

module.exports.createUser = (req, res) => {
    
    const user = req.body;
    users.push({... user, id: uuidv4()});
    res.send(`User with the username ${user.first_name} added to the database!`);

}

module.exports.getUser = (req, res) =>{

    const { id } = req.params;
    const foundUser = users.find((user) => user.id === id);
    res.send(foundUser);

}

module.exports.deleteUser = (req, res) => {

    const {id} = req.params;
    users = users.filter((user) =>  user.id !== id);
    res.send(`User with ID ${id} deleted from the database.`);

}

module.exports.updateUser = (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, alias } = req.body;

    const user = users.find((user) => user.id === id);

    if(first_name) user.first_name = first_name;
    if(last_name) user.last_name = last_name;
    if(alias) user.alias = alias;
    
    res.send(`User with  id ${id} has been updated`);


}