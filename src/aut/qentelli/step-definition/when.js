import { When } from '@wdio/cucumber-framework';
import { action } from '../../../support/action/actionFactory';
import * as dotenv from 'dotenv';

import TestPage from '../pages/TestPage';

const testPage = new TestPage();

dotenv.config();

// When(/^I verify Home Page is displayed$/, async () => {
//     await homePage.verifyHomePageDisplayed();
// });