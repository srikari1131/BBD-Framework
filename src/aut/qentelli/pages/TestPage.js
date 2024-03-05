import { action } from '../../../support/action/actionFactory';
import * as dotenv from 'dotenv';

import cucumberJson from 'wdio-cucumberjs-json-reporter';
import appConfig from '../config/app-config';

import Page from './Page';

dotenv.config();

const brand = "//a[@class='navbar-brand']";
const aboutUsNav = "//li[@id='about_us']";

export default class TestPage extends Page {

    constructor() {
        super();
    }

    // Navigate to Qentelli Website
    async navigateToQentelliWebsite() {
        await action.openApplication(appConfig.url);
        await action.pause(1000);
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }

    // Navigate to Qentelli Website
    async verifyBrand() {
        await action.verifyIsDisplayed(brand, 1000)
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }

    // Navigate to Qentelli Website
    async verifyAboutUsNav() {
        await action.verifyIsDisplayed(aboutUsNav, 1000)
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }
}
