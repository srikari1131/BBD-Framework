// https://github.com/mozilla/geckodriver/blob/master/README.md#firefox-capabilities

export const capabilitiesFirefoxConfig = {
    maxInstances: process.env.FR_INSTANCES ? parseInt(process.env.FR_INSTANCES) : process.env.TF_BUILD ? 3 : 1,
    'browserName': 'firefox',
    'moz:firefoxOptions': {
        args: [].concat(
            (process.env.FR_BROWSER.includes('FIREFOXHEADLESS')) ? [
                '-headless'
            ] : [
                // When NOT running on Azdo DevOps headless mode is not enabled    
                // to allow viewing actions in the browser.    
            ],),

    },

    'acceptInsecureCerts': true,

    'cjson:metadata': {
        device: process.env.SELENIUM_VERSION,

    },
};