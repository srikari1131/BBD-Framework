export const capabilitiesEdgeConfig = {
    maxInstances: process.env.FR_INSTANCES ? parseInt(process.env.FR_INSTANCES) : process.env.TF_BUILD ? 3 : 1,
    browserName: 'edge',
    'ms:edgeOptions': {
        args: ['--start-maximized']
    },
    acceptInsecureCerts: true,
    //
    // Edge launches via devtools/puppeteer.
    // Need to set defaultViewport to null to use the whole browser
    'wdio:devtoolsOptions': {
        defaultViewport: null

    }
};