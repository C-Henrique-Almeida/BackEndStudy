import users from '../database/database.js'
class userServices{
    getAll(req, res){
        console.log(users);
        return;
    }
}

export default new userServices();