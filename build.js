import { exec } from 'child_process';
import { rename } from 'fs';
console.log("Starting build!");
exec("pug --out ./dist/ --basedir ./site/ ./site", {}, (error, stdout, stderr) => {
    if (error) {
        console.error('exec error: ' + error);
        return;
    }
    console.log('pug: ' + stdout);
    console.error('pug error: ' + stderr);
});
rename('./site/styles/assets', './dist/styles/assets', () => {
    console.log('assets: Moved');
});
//# sourceMappingURL=build.js.map