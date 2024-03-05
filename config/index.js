import { capabilitiesChromeConfig } from './chrome.config';
import { capabilitiesFirefoxConfig } from './firefox.config';
import { capabilitiesEdgeConfig } from './edge.config';
import { hooksConfig } from './hooks.config';
import { loggingConfig } from './logging.config';
import { reportingConfig } from './reporting.config';
import { serverConfig } from './server.config';
import { testsConfig } from './tests.config';

export const config = {
    runner: 'local',
    baseUrl: 'http://localhost',
    framework: 'cucumber',

    cucumberOpts: {
        retry: process.env.FR_RETRY ? parseInt(process.env.FR_RETRY) : process.env.TF_BUILD ? 2 : 0,
        backtrace: false,
        failAmbiguousDefinitions: true,
        failFast: false,
        ignoreUndefinedDefinitions: false,
        name: [],
        snippets: true,
        source: true,
        profile: [],
        require: [
            `src/aut/${process.env.aut_name}/step-definition/**/*.js`,
        ],
        snippetSyntax: undefined,
        strict: true,
        tagExpression: '',
        tagsInTitle: false,
        timeout: process.env.DEBUG_TESTS === 'true' ? 10000000 : 300000,
    },

    maxInstances: process.env.FR_INSTANCES ? parseInt(process.env.FR_INSTANCES) : process.env.TF_BUILD ? 3 : 1,
    maxInstancesPerCapability: 10,
    capabilities: []
        .concat(
            (process.env.FR_BROWSER.includes('CHROME')) ? [capabilitiesChromeConfig] :
                (process.env.FR_BROWSER.includes('EDGE')) ? [capabilitiesEdgeConfig] :
                    (process.env.FR_BROWSER.includes('FIREFOX')) ? [capabilitiesFirefoxConfig] :
                        [capabilitiesChromeConfig])
    ,
    services: [

    ],

    ...serverConfig,
    ...testsConfig,
    ...loggingConfig,
    ...reportingConfig,
    ...hooksConfig,
};