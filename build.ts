import {exec} from 'child_process'
import fs from 'fs-extra'

console.log("Starting build!")

exec("'node_modules/pug-cli/index.js' --out ./dist/ --basedir ./site/ ./site", {},
    (error, stdout, stderr) => {
        if (error) {
            console.error('exec error: ' + error);
            return;
        }
        console.log('pug: ' + stdout);
        if (stderr)
            console.error('pug error: ' + stderr);
    })

fs.copy('./site/lib', './dist/lib', () => {
    console.log('lib: Moved')
})

fs.copy('./site/styles/assets', './dist/styles/assets', () => {
    console.log('assets: Moved')
})


