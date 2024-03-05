const allure = require('allure-commandline');
const reportError = new Error('Could not generate Allure report')
const generation = allure(['serve'])
return new Promise((resolve, reject) => {
    const generationTimeout = setTimeout(
        () => reject(reportError),
        5000)

    generation.on('exit', function (exitCode) {
        clearTimeout(generationTimeout)

        if (exitCode !== 0) {
            return reject(reportError)
        }

        console.log('Allure report successfully generated')
        resolve()
    })
})