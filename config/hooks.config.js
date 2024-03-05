import AllureReporter from '@wdio/allure-reporter';
import { addObject, addScreenshot } from '../src/support/lib/context';
import cucumberJson from 'wdio-cucumberjs-json-reporter';

function resetReportingValues(sc) {
    sc.newUsers = [];
    sc.sessionID = '';
    sc.lastError = '';
    sc.rcError = '';
    sc.specAddr = '';
}

function getSpecAddress(w) {
    var line;
    for (var s = 0; s < w.gherkinDocument.feature?.children.length; s++) {
        let scenario = w.gherkinDocument.feature?.children[s].scenario;
        for (var e = 0; e < scenario.examples.length; e++) {
            let table = scenario.examples[e].tableBody;
            for (var r = 0; r < table.length; r++) {
                let row = table[r];
                if (w.pickle.steps[0].astNodeIds.includes(row.id)) {
                    line = row.location.line;
                    break;
                }
            }
        }
    }
    return (line) ? w.gherkinDocument.uri + ':' + line : w.gherkinDocument.uri;
}

export const hooksConfig = {
    onPrepare: function (config, capabilities) {
        console.log("/\\".repeat(50));
        console.log("BROWSER: " + process.env.FR_BROWSER);
        console.log("THREADS: " + process.env.FR_INSTANCES);
        console.log("RETRY: " + process.env.FR_RETRY);
        console.log("\\/".repeat(50));

    },

    onWorkerStart: function (cid, caps, specs, args, execArgv) {

    },

    onWorkerEnd: function (cid, exitCode, specs, retries) {

    },

    beforeSession: function (config, capabilities, specs) {
        global.scenarioContext = {};
    },

    before: function (capabilities, specs, browser) {

    },

    beforeSuite: function (suite) {

    },

    beforeHook: function (test, context) {

    },

    afterHook: function (test, context, { error, result, duration, passed, retries }) {

    },

    beforeTest: function (test, context) {

    },

    beforeCommand: function (commandName, args) {

    },

    afterCommand: function (commandName, args, result, error) {

    },

    afterTest: function (test, context, { error, result, duration, passed, retries }) {

    },

    afterSuite: function (suite) {

    },

    after: function (result, capabilities, specs) {

    },

    afterSession: function (config, capabilities, specs) {

    },

    onComplete: function (exitCode, config, capabilities, results) {

    },

    onReload: function (oldSessionId, newSessionId) {

    },

    beforeFeature: function (uri, feature) {

    },

    beforeScenario: function (world, context) {
        console.log('=:'.repeat(45) + `\nSCENARIO - ${world.pickle.name}\n` + '=:'.repeat(45));
        scenarioContext = [];
        resetReportingValues(scenarioContext);
        scenarioContext.scenarioName = world.pickle.name;
        scenarioContext.specAddr = getSpecAddress(world);

    },

    beforeStep: function (step, scenario, context) {
        console.log('='.repeat(75) + `\n${step.keyword}- ${step.text}\n` + '='.repeat(75));
    },

    afterStep: async function (step, scenario, { error, duration, passed }, context) {
        if (error) {
            scenarioContext.lastError = error;
            await browser.takeScreenshot();
            await cucumberJson.attach(await browser.takeScreenshot(), 'image/png');

        }
    },
    afterScenario: async function (world, result, context) {
        const continueSession = world.pickle.tags.some(e => e.name === "@_CONTINUE_SESSION");
        if (!continueSession) {
            console.log('Reloading Session...');
            await browser.reloadSession();
        }

        await AllureReporter.addDescription(scenarioContext.specAddr + ';'
            + scenarioContext.sessionID + ';'
            + scenarioContext.rcError + ';'
            + scenarioContext.lastError.split(" at ")[0]);

    },
    afterFeature: function (uri, feature) {

    }
};
