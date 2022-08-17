import axios from 'axios';
import { app } from 'electron';
import fs from 'fs';
import { Agent } from 'https';
import { promisify } from 'util';
import { exec } from 'child_process';
import OpenAPIClientAxios from 'openapi-client-axios';
import { OpenAPIV3 } from 'openapi-types';

const writeFile = promisify(fs.writeFile);
// const readFile = promisify(fs.readFile);
const execPromise = promisify(exec);

// const definition = def as unknown as OpenAPIV3.Document;
// import def from './openapi.json';

interface Auth {
    port: string;
    password: string;
    pid: string;
    certificate: string;
}


const authenticate = async (): Promise<Auth> => {
    const portRegex = /--app-port=([0-9]+)/
    const passwordRegex = /--remoting-auth-token=([\w-_]+)/
    const pidRegex = /--app-pid=([0-9]+)/

    // console.log('end');
    const name = 'LeagueClientUx';
    const command = `ps x -o args | grep '${name}'`
    const { stdout: rawStdout } = await execPromise(command);
    
    const stdout = (rawStdout as any).replace(/\s/g, '')
    const [, port] = stdout.match(portRegex)!
    const [, password] = stdout.match(passwordRegex)!
    const [, pid] = stdout.match(pidRegex)!
    const certificate = await fs.readFileSync(`${app.getAppPath()}/assets/riotgames.pem`, 'utf8'); // readFile(`${app.getAppPath()}/assets/riotgames.pem`);
    return {
        port,
        password,
        pid,
        certificate,
    }
}

const createHttpSession = async (port: string, certificate: string, password: string) => {
    const httpsAgent = new Agent({
        ca: certificate
    });
    const Authorization = 'Basic ' + Buffer.from(`riot:${password}`).toString('base64');
    console.log('Authorization', Authorization);

    console.log('end');
    
    const result = await axios.get(`https://127.0.0.1:${port}/lol-summoner/v1/current-summoner`, {
        httpsAgent,
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            // Authorization,
            Authorization: 'Basic RGAPI-317e0ec1-2bf3-41be-9b4a-989c4399d89d',
        }
    })
    console.log('result', result);
}

export const runOpenApi = async () => {
    try {
        const { port, password, certificate, pid } = await authenticate();
        console.log('password', password);
        createHttpSession(port, certificate, password)
    } catch (error) {
        console.log('error', error);
    }
    
}
