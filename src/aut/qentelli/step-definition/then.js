import { Then } from '@wdio/cucumber-framework';
import { action } from '../../../support/action/actionFactory';
import * as dotenv from 'dotenv';

import TestPage from '../pages/TestPage';
import AboutUs from '../pages/AboutUsPage';
import AboutUsPage from '../pages/AboutUsPage';

const testPage = new TestPage();
const aboutUsPage =  new AboutUsPage()

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
Then(/^I verify Our Vision and Mission text is displayed$/, async() =>{
    await aboutUsPage.verifyOurVisionAndMissionText()
})
Then(/^I verify Our Vision and Mission cards text is displayed$/, async() =>{
    await aboutUsPage.verifyOurVisionAndMissionCardsText()
})
