import { When } from '@wdio/cucumber-framework';
import { action } from '../../../support/action/actionFactory';
import * as dotenv from 'dotenv';

import TestPage from '../pages/TestPage';

const testPage = new TestPage();

dotenv.config();

When(/^I click on About Us Navigation link$/, async () => {
    await testPage.clickAboutUs();
});

When(/^I click on Contact Us Navigation link$/, async () => {
    await testPage.clickContactUs();
});

/************************************************************/

When(/^I click on sap tab$/, async() => {
    console.log('I click on sap tab');
    await testPage.iClickOnSapTab();
});

When(/^I click on talk to an expert button directly$/, async() => {
    console.log('I click on talk to an expert button directly');
    await testPage.iClickOnTalkToAnExpertButton();
});
