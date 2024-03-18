import { action } from '../../../support/action/actionFactory';
import * as dotenv from 'dotenv';

import cucumberJson from 'wdio-cucumberjs-json-reporter';
import appConfig from '../config/app-config';

import Page from './Page';

dotenv.config();

const brand = "//a[@class='navbar-brand']";
const aboutUsNav = "//li[@id='about_us']//a[contains(text(),'About Us')]";
const contactUsNav = "//li[@id='contact_tab']";

const shadowRootDemoDescription = "//div[@class='demo-description']";
const shadowRootDemoDescriptionTxt = "Menu UI component is with Shadow DOM enabled. The Menu's markup structure, style, and behavior in this demo are hidden and separate from other code on the page.";
const shadowText = "File";

/************************************************************/

const solutionsTab= $("//p[@id='solution_tab']");
const sapTab="//h4[@id='SAP_tab']";
const sapHeaderText="//div[@class='digital_banner-txt']/h1";
const sapHeaderContent="SAP S/4 HANA";
const sapParaText="//div[@class='digital_banner-txt']/p";
const sapParaContent="SAP’s S/4 HANA, a fully integrated ERP solution on an in-memory database";
const talkToAnExpertButton="[id='edit-actions-submit']";

export default class TestPage extends Page {

    constructor() {
        super();
        this.ourFounder = "//div[@class='Heading_text']//h2[contains(text(),'Our Founders')]";
        this.contactUs = "//div[@class='digital_banner-txt']//h1[contains(text(),'Contact Us')]";
    }

    // Navigate to Qentelli Website
    async navigateToQentelliWebsite() {
        await action.openApplication(appConfig.url);
        await action.pause(1000);
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }

    // Verify Qentelli Brand
    async verifyBrand() {
        await action.verifyIsDisplayed(brand);
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }

    // Verify Qentelli About Us Navigation
    async verifyAboutUsNav() {
        await action.verifyIsDisplayed(aboutUsNav);
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }

    // Verify Qentelli Contact Us Navigation
    async verifyContactUsNav() {
        await action.verifyIsDisplayed(contactUsNav);
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }

    // Click Qentelli About Us Navigation
    async clickAboutUs() {
        await action.clickElement(aboutUsNav, 100);
    }

    // Click Qentelli Contact Us Navigation
    async clickContactUs() {
        await action.clickElement(contactUsNav, 100);
    }

    // Verify Qentelli About Us Page
    async verifyAboutUsPage() {
        await action.verifyIsDisplayed(this.ourFounder);
        await action.pause(1000);
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }

    // Verify Qentelli Contact Us Page
    async verifyContactUsPage() {
        await action.verifyIsDisplayed(this.contactUs);
        await action.pause(1000);
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }

    // Navigate to ShadowRoot Demo Page
    async navigateToShadowRootDemoPage() {
        await action.openApplication(appConfig.shadowUrl);
        await action.pause(1000);
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }

    // Verify ShadowRoot Demo Page description
    async verifyShadowRootDemoPageDescription() {
        await action.verifyIsDisplayed(shadowRootDemoDescription, 100);
        await expect($("//div[@class='demo-description']")).toHaveText(shadowRootDemoDescriptionTxt);
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }

    // Verify Shadow Root Element
    async verifyShadowRootElement() {
        const locator = await $('smart-ui-menu').shadow$('smart-menu-items-group[role=menuitem] span');
        await expect(locator).toBeDisplayed();
        await expect(locator).toHaveText(expect.stringContaining(shadowText));
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }

    /************************************************************/

    // Mouseover on solutions tab on home page
    async iMouseOverOnSolutionsTab(){
        await solutionsTab.moveTo();
        await action.pause(1000);
        await action.addScreenshot();
    } 

    //Click on sap tab
    async iClickOnSapTab(){
        await action.clickElement(sapTab)
        await action.pause(1000)
        await action.addScreenshot()
    }

    //Verify the header text on the sap page
    async iVerifyTheHeaderTextDisplayedOnTheSapPage(){
        await action.verifyIsDisplayed(sapHeaderText)
        await expect($(sapHeaderText)).toHaveText(expect.stringContaining(sapHeaderContent));
        await action.addScreenshot()
    }

    //Verify the header text on the sap page
    async iVerifyTheSubTextDisplayedOnTheSapPage(){
        await action.verifyIsDisplayed(sapParaText)
        await expect($(sapParaText)).toHaveText(expect.stringContaining(sapParaContent));
        await action.addScreenshot()
    }

    //Click on talk to an expert button 
    async iClickOnTalkToAnExpertButton(){
        await action.clickElement(talkToAnExpertButton)
        await action.addScreenshot()
    }
    
    //Verify mandatory alert message on sap page
    // async iVerifyMandatoryAlertMessageOnEmptySubmission(){
    //         broswer.getHTML('body').then(function(form, done){
    //           form.should.contain('Please fill out this field.');
    //           setTimeout(done, 1000);
    //        });
         
    // }
}
