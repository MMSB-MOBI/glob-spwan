import { find } from '..'

// node build/test/find_arg.js '**/*.ts'

const MAX_WORKER = 10;

(async () => {
   if (process.argv.length > 2) {
        console.log("let's find " +process.argv[2] )
       
        try {
            const files = await find(process.argv[2], { cwd : 'src'});
            console.log(files);
        } catch(e) {
            console.log(e);
        }
        process.exit()
    }
})();