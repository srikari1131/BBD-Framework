import { action } from '../../../support/action/actionFactory';
import * as dotenv from 'dotenv';

import cucumberJson from 'wdio-cucumberjs-json-reporter';
import appConfig from '../config/app-config';

import Page from './Page';

dotenv.config();

const brand = "//a[@class='navbar-brand']";
const aboutUsNav = "//li[@id='about_us']//a[contains(text(),'About Us')]";
const contactUsNav = "//li[@id='contact_tab']";
const headingPercentage = "//div[@class='col-md-3']//div//h2";
const headingText = "//div[@class='col-md-3']//div//h5";
const headingParagraph = "//div[@class='col-md-3']//div//p";
const percent1="80%";
const percent2="90%";
const percent3="65%";
const percent4="45%";
const text1 = "Improvement in Data-Driven Decision Making";
const text2 = "Improvement in Customer Satisfaction Scores";
const text3 = "Increase in User Engagement on Digital Platforms";
const text4 = "Cost Reduction in IT Operations";
const p1 = "Leading Healthcare Provider";
const p2 = "CX Overhaul for a Major QSR";
const p3 = "CEO/Presidents Network";
const p4 = "Multinational Telecommunications corporation";

const shadowRootDemoDescription = "//div[@class='demo-description']";
const shadowRootDemoDescriptionTxt = "Menu UI component is with Shadow DOM enabled. The Menu's markup structure, style, and behavior in this demo are hidden and separate from other code on the page.";
const shadowText = "File";

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

    //Verify Percentage Headings
    async verifyHeadingsPercentage() {
        const percentages = await $$(headingPercentage);
        for (let i = 0; i < percentages.length; i++) {
            if (await percentages[i].getText() === percent1) {
                await expect(percentages[i]).toHaveText(percent1);
            }
            else if (await percentages[i].getText() === percent2) {
                await expect(percentages[i]).toHaveText(percent2);
            }
            else if (await percentages[i].getText() === percent3) {
                await expect(percentages[i]).toHaveText(percent3);
            }
            else  {
                await expect(percentages[i]).toHaveText(percent4);
            }
        }
        await action.pause(1000);
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');

    }

    //Verify Heading Text
    async verifyHeadingsText() {
        const text = await $$(headingText);
        for (let i = 0; i < text.length; i++) {
            if (await text[i].getText() === text1) {
                await expect(text[i]).toHaveText(expect.stringContaining(text1));
            }
            if (await text[i].getText() === text2) {
                await expect(text[i]).toHaveText(expect.stringContaining(text2));
            }
            if (await text[i].getText() === text3) {
                await expect(text[i]).toHaveText(expect.stringContaining(text3));
            }
            if (await text[i].getText() === text4) {
                await expect(text[i]).toHaveText(expect.stringContaining(text4));
            }

        }
        await action.pause(1000);
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }

    //Verify Heading Paragraph
    async verifyHeadingsParagraph() {
        const paragrahps = await $$(headingParagraph);
        for (let i = 0; i < paragrahps.length; i++) {
            if (await paragrahps[i].getText() === p1) {
                await expect(paragrahps[i]).toHaveText(p1);
            }
            if (await paragrahps[i].getText() === p2) {
                await expect(paragrahps[i]).toHaveText(p2);
            }
            if (await paragrahps[i].getText() === p3) {
                await expect(paragrahps[i]).toHaveText(p3);
            }
            if (await paragrahps[i].getText() === p4)  {
                await expect(paragrahps[i]).toHaveText(p4);
                }
            }
            await action.pause(1000);
            cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
        }
        
    }
