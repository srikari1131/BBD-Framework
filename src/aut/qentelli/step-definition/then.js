import { Then } from '@wdio/cucumber-framework';
import { action } from '../../../support/action/actionFactory';
import * as dotenv from 'dotenv';

import TestPage from '../pages/TestPage';

const testPage = new TestPage();

dotenv.config();

Then(/^I verify Company brand is displayed$/, async () => {
    await testPage.verifyBrand();
});

Then(/^I verify About Us Navigation link is displayed$/, async () => {
    await testPage.verifyAboutUsNav();
});

Then(/^I verify About Us page is displayed$/, async () => {
    await testPage.verifyAboutUsPage();
});

Then(/^I verify Contact Us Navigation link is displayed$/, async () => {
    await testPage.verifyContactUsNav();
});

Then(/^I verify Contact Us page is displayed$/, async () => {
    await testPage.verifyContactUsPage();
});

Then(/^I verify ShadowRoot Demo page description is displayed$/, async () => {
    await testPage.verifyShadowRootDemoPageDescription();
});

Then(/^I verify Shadow Root Element is displayed$/, async () => {
    await testPage.verifyShadowRootElement();
});

/************************************************************/

Then(/^I mouseover on solutions tab on home page$/, async() => {
    console.log('I mouseover on solutions tab on home page')
    await testPage.iMouseOverOnSolutionsTab();
});

Then(/^I verify home page is displayed$/, async() => {
    console.log('I verify home page is displayed');
    await testPage.verifyBrand();
});

Then(/^I verify sap page is displyed$/, async() => {
    console.log('I verify sap page is displyed');
    await testPage.verifyBrand();
    await action.pause(1000);
    await expect(browser).toHaveUrl(expect.stringContaining("/solutions/sap"))
});

Then(/^I verify the header text displayed on the sap page$/, async() => {
    console.log('I verify the header text displayed on the sap page');
    await testPage.iVerifyTheHeaderTextDisplayedOnTheSapPage();
});

Then(/^I verify the sub text displayed on the sap page$/, async() => {
    console.log('I verify the sub text displayed on the sap page');
    await testPage.iVerifyTheSubTextDisplayedOnTheSapPage();
});

// Then(/^I verify mandatory alert message is displayed$/, async() => {
//     console.log('I verify mandatory alert message is displayed');
//     await testPage.iVerifyMandatoryAlertMessageOnEmptySubmission()
// });
