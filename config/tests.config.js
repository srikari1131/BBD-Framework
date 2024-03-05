const { specConfig } = require(`../src/aut/${process.env.aut_name}/config/suites`)
export const testsConfig = {
    ...specConfig,

    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is @ - don't bail, run all tests).
    bail: 0,

    // Default timeout for all waitFor* commands.
    waitforTimeout: 20000,

    // Default timeout in milliseconds for request
    // if Selenium Grid doesn't send response
    connectionRetryTimeout: 90000,

    // Default request retries count
    connectionRetryCount: 3,
};