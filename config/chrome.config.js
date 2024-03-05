export const capabilitiesChromeConfig = {
    maxInstances: process.env.FR_INSTANCES ? parseInt(process.env.FR_INSTANCES) : process.env.TF_BUILD ? 3 : 1,
    browserName: 'chrome',
    acceptInsecureCerts: true,
    'goog:chromeOptions': {
        args: [
            '--no-sandbox',
            '--window-size=1920,1080',
            '--disable-notifications'
        ].concat(
            (process.env.TF_BUILD || process.env.FR_BROWSER.includes('CHROMEHEADLESS')) ? [
                '--headless',
                '--disable-gpu',
            ] : [

            ],
        ),
    },
    'cjson:metadata': {
        device: process.env.SELENIUM_VERSION,
    },
    'wdio:devtoolsOptions': {
        defaultViewport: null
    }
};
