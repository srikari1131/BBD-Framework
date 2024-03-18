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

Then(/^I verify ContactUs Submit Form$/, async () => {
    await testPage.verifyContactUsForm();
});

Then(/^I verify name field is displayed in form$/, async () => {
    await testPage.verifyNameField();
});

Then(/^I verify email field is displayed in form$/, async () => {
    await testPage.verifyEmailField();
});

Then(/^I verify message field is displayed in form$/, async () => {
    await testPage.verifyContactUsForm();
});

Then(/^I verify submit button field is displayed in form$/, async () => {
    await testPage.verifySubmitButton();
});

Then(/^I click on submit button field$/, async () => {
    await testPage.clickSubmitButton();
});

Then(/^I verify ShadowRoot Demo page description is displayed$/, async () => {
    await testPage.verifyShadowRootDemoPageDescription();
});

Then(/^I verify Shadow Root Element is displayed$/, async () => {
    await testPage.verifyShadowRootElement();
});