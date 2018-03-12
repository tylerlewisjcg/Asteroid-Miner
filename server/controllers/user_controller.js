let users = [];
id = 0;

module.exports = {
 
    read: (req, res)=>{
        res.status(200).send(users); 
    },
    create: (req, res)=>{
        let {userName, shipName} = req.body;
        let user = {
            userName: userName,
            shipName: shipName,
            id: id
        }
        id++;
        users.push(user);
        res.status(200).send(users); 
    },
    delete: (req, res)=>{
        const userIndex = users.findIndex(users => users.id === req.params.id)
                users.splice(users, 1)
        res.status(200).send(users);
    },
    update: (req, res)=>{
        res.status(200).send(users); 
    }  
}
