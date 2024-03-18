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

Then(/^I verify Product is displayed$/, async()=>{
    await testPage.verifyProductButtonIsDisplayed();
});

Then(/^I verify product options are displayed$/, async()=>{
    await testPage.verifyProductTabIsDisplayed();
});

Then(/^I verify TED link is displayed$/, async()=>{
    await testPage.verifyTedTabIsDisplayed();
});

Then(/^I verify TED page is displayed$/, async ()=>{
    await testPage.verifyTedPageIsDisplayed();
})

Then(/^I verify Request Demo is displayed$/, async ()=>{
    await testPage.verifyRequestDemoButtonIsDisplayed();
})

Then(/^I verify thought leadership button is displayed$/, async ()=>{
    await testPage.verifyThoughtLeadershipButton();
})

Then(/^I verify thought leadership section$/, async ()=>{
    await testPage.verifyThoughtLeadershipSection();
})

Then(/^I verify Product link on thought leadership$/, async ()=>{
    await testPage.verifyProductsLinkOnThoughtLeadership();
})

Then(/^I verify TED link on thought leadership$/, async ()=>{
    await testPage.verifyTedLinkOnThoughtLeadership();
})

Then(/^I verify automagiq link on thought leadership$/, async ()=>{
    await testPage.verifyAutoMagiqLinkOnThoughtLeadership();
})

Then(/^I verify thought leadership links on thought leadership$/, async ()=>{
    await testPage.verifyThoughtLeadershipLinkOnThoughtLeadership();
})

Then(/^I verify Qentelli branding on thought leadership$/, async ()=>{
    await testPage.verifyQentelliBrandingThoughtLeaderShip();
})