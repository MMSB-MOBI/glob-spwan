import { fork } from 'child_process';
import { FindDatum, isFindDatum } from './dto';


export const find = (pattern:string, options?:{}):Promise<string[]> => {
    const controller = new AbortController();
    const { signal } = controller;
    return new Promise((res, rej) => {
        const proc = fork(`${__dirname}/worker.js`, [], { signal });
        proc.send({pattern, options})
        proc.on('message', (d:FindDatum)=>{
            if( isFindDatum(d) )
                res(d.results);
            else
                rej(d)            
        })
    })
}


/*
const child = fork(__filename, ['child'], { signal });
child.on('error', (err) => {
    // This will be called with err being an AbortError if the controller aborts
});
  controller.abort(); // Stops the child process
*/