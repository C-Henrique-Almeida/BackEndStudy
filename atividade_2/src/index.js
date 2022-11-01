import {createServer} from 'node:http';
import routes from './routes/routes.js'

const server = createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "Application/json"})
    res.write(JSON.stringify({sucess: "Hello"}));   
    res.end();  
});

server.listen(3000, () => console.log("porta 3000 escutandol"));
