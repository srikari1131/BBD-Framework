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
//I Verify Product link is desplayed
Then(/^I Verify Product link is desplayed$/, async () => {
    await testPage.verifyProdlink();
});
//I verify Discover Our Featured Products is desplayed
Then(/^I verify Discover Our Featured Products is desplayed$/, async () => {
    await testPage.VerifyDiscoverText();
});
//I verify Streamlined Engineering Governance is displayed
Then(/^I verify Streamlined Engineering Governance is displayed$/, async () => {
    await testPage.VerifyEngineeringText();
});
//I verify TED offers a comprehensive text is displayed
Then(/^I verify TED offers a comprehensive text is displayed$/, async () => {
    await testPage.TEDfulltext();
});

