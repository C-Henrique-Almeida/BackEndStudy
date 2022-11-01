import UserService from '../services/usersServiece.js'

const routes = [
    {
        endpoint: "/users",
        method: "GET",
        handler: UserService.getAll
        
    },
    {
        endpoint: "/users",
        method: "POST",
        handler: UserService.getAll
        
    }
]

export default routes;