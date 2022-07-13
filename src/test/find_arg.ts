import { find } from '..'

// node build/test/find_arg.js 'src/**/*.ts'

const MAX_WORKER = 10;

(async () => {
   if (process.argv.length > 2) {
        console.log("let's find " +process.argv[2] )
       
        try {
            const files = await find(process.argv[2]);
            console.log(files);
        } catch(e) {
            console.log(e);
        }

        for (let i = 0; i < MAX_WORKER; i++) {
            console.log(`Starts find process ${i}`)
            find(process.argv[2]).then((files:string[])=> console.log(files))
                                .catch((e)=>console.error(e));
        }
    }
})();