import axios from 'axios'
import { RootPath } from './Config';

const Get = (path) => {
    const promise = new Promise((resolve, reject) => {
        axios.get(`${RootPath}/${path}`)
        .then((result)=> {
            resolve(result.data);
        }, (err) => {
            reject(err);
        })
    })
    return promise;
}

export default Get;