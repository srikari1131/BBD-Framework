const fs = require('fs');
const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function runCommand(command) {
    const { stdout, stderr, error } = await exec(command);
    if (stderr) { console.error('stderr:', stderr); }
    if (error) { console.error('error:', error); }
    return Promise.resolve(stdout);
}

function getLine(body, charOrString) {
    if (!body) return false
    if (!charOrString) return false
    var char = (typeof charOrString === 'string') ? body.indexOf(charOrString) : charOrString
    var subBody = body.substring(0, char)
    if (subBody === '') return false
    var match = subBody.match(/\n/gi)
    if (match) return match.length + 1
    return 1
}
async function main() {

    var files = await runCommand('dir /s /b “src\\aut\\consumer_onb\\features\\*.feature"');
    files = files.split('\r\n');
    files.pop();
    let file;
    for (let i = 0; i < files.length; i++) {
        file = files[i];
        fs.readFile(file, (err, data) => {
            if (err) throw err;
            let line = getLine(data.toString(), "Examples:");
            if (i % 9 === 0) console.log("\nnpx wdio run ./wdio.conf.js");
            console.log(' --spec "' + file + ":" + (line + 2) + '"');
        })
    };
}

main();