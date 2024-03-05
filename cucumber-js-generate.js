const { generate } = require('multiple-cucumber-html-reporter');

let date = new Date();
generate({
    jsonDir: `${process.cwd()}/cucumberjs-report`,
    reportPath: `${process.cwd()}/cucumberjs-report/cucumber-html-report`,
    openReportInBrowser: true,
    disableLog: true,
    saveCollectedJSON: true,
    reportName: 'Automated Testing Report',
    customData: {
        title: 'WDIO tests Report',
        data: [
            { label: 'Project', value: `Qentelli testing` },
            { label: `environment`, value: 'QA' },
            { label: 'Platform', value: process.platform },
            { label: 'Date', value: date.toLocaleDateString() }
        ]
    }
});
