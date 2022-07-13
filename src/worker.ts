import { Glob } from 'glob';

import { FindDatum, FindSettings, isFindSettings } from './dto';

process.on('message', (d:FindSettings) => {
  if( ! isFindSettings(d) ) {
    //@ts-ignore
    process.send({"error" : "malformed find settings"});
    process.exit();``
  }
  const options = d.hasOwnProperty("options") ? d.options : {};
 
  const glob = new Glob(d.pattern, options,
    (er:string, files:string[]) =>{   
      if(process.send) { 
        if(er){ 
          process.send({"error" : er});
          process.exit();
        }
        process.send({"results" : files});
      }
  });


})
