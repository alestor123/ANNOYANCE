var {readdirSync,statSync,readFileSync, writeFileSync} = require('fs'),
{join,extname} = require('path'),
files = [];
module.exports = (dir,str,strd) => {
filesDir(dir).forEach(paths => {
if(extname(paths)==='.js') replaceFile(paths,str,strd)
})}
function filesDir(dir){
readdirSync(dir).forEach(file => {
const inn = join(dir,file);
if (statSync(inn).isDirectory()) return filesDir(inn);
else return files.push(inn);
});
return files        
}
function replaceFile(path,str,strd) {
writeFileSync(path,readFileSync(path).toString().replace(new RegExp(str, 'g'),strd))
}