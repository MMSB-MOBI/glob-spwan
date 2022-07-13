import { Glob } from 'glob';

export interface FindDatum {
  results : string[]
}

export const isFindDatum = (o:any): o is FindDatum => {
  if (! o.hasOwnProperty('results') ) return false;
  for (let e in o.results)
    if (typeof(e) != 'string')
      return false;

  return true;
}

if (process.argv.length < 3) {
    //@ts-ignore
    process.send({"error" : "missing arguments"});
    process.exit()
}

const options = {}
const glob = new Glob(process.argv[2], options, 
  (er:string, files:string[]) =>{   
    if(process.send) { 
      if(er){ 
        process.send({"error" : er});
        process.exit();
      }
      process.send({"results" : files});
    }
});
