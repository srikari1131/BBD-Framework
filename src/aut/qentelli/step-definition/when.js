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
//I click on Products Navigation link
When(/^I click on Products Navigation link$/, async () => {
    await testPage.clickProducts();
});
//I click on Learn More About TED 
When(/^I click on Learn More About TED$/, async () => {
    await testPage.clickonTED();
});

