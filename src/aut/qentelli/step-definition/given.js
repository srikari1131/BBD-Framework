import { Given } from '@wdio/cucumber-framework';
import TestPage from '../pages/TestPage';

const testPage = new TestPage();

Given(/^I navigate to the Qentelli Website$/, async () => {
    console.log('I navigate to the Qentelli Website');
    await testPage.navigateToQentelliWebsite();
});

Given(/^I navigate to the ShadowRoot Demo Page$/, async () => {
    console.log('I navigate to the ShadowRoot Demo Page');
    await testPage.navigateToShadowRootDemoPage();
});