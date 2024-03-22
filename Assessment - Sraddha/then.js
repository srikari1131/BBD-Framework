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

Then(/^I verify Solutions dropdown is clicked$/, async () => {
    await testPage.clickSolutionsTab();
});

Then(/^I navigate to Continuous Delivery of Value link$/, async () => {
    await testPage.clickCdvTab();
});

Then(/^I verify Continuous Delivery of Value text is displayed$/, async () => {
    await testPage.verifyCdvText();
});

Then(/^I verify Briding Culture subtext is displayed$/, async () => {
    await testPage.verifyBridingText();
});


