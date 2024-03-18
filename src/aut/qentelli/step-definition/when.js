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
