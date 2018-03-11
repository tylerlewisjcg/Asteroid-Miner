let users = [];
let id = 0;

module.exports = {
    create: (req, res)=> {
        let {userName, shipName} = req.body 
        let user = {
            userName: userName,
            shipName: shipName,
            id: id
        }
        id++;
        users.push(user);
        res.status(200).send(users);      
    },
    read: (req, res)=>{
        res.status(200).send(users); 
    } ,
    update: (req, res)=>{
        for (let i = 0; i < users.length; i++) {
            if (users[i].id === +req.params.id){
                users[i].shipName = req.body.text || users[i].text
                return res.status(200).send(users);
            }
        }
    
        res.status(200).send(users); 
    }, 
    delete: (req, res)=>{
        for (let i = 0; i < users.length; i++) {
            if (users[i].id === +req.params.id){
                users.splice(i,1)}
        res.status(200).send(users); 
        }
    } 
}  