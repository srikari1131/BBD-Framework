export const reportingConfig = {
    reporters: ['dot', 'spec',
        ['allure', {
            outputDir: 'allure-results',
            useCucumberStepReporter: true,
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false

        }],
        [
            'cucumberjs-json',
            {
                jsonFolder: `${process.cwd()}/cucumberjs-report`,
                language: 'en',
                reportFilePerRetry: 'false',
                disableHooks: 'true'
            }
        ]
    ],
};

