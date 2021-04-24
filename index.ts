import express from 'express';
import * as http from 'http';

import cors from 'cors';

import {CommonRoutesConfig} from './src/common/common.routes.config'
import {UserRoutes} from './src/users/users.routes.config';


const app: express.Application = express();
const server: http.Server = http.createServer(app);

const port = 3000;
const routes: Array<CommonRoutesConfig> = [];

app.use(express.json())
app.use(cors())

routes.push(new UserRoutes(app));

app.get('/', (req: express.Request, res: express.Response) => {
    const {body} = req;
    console.log(body);
    res.status(200).send('Server up and running');
})

server.listen(port, () => {
    console.log(`Server running at port ${port}`)
})