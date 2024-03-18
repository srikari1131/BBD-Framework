import { action } from '../../../support/action/actionFactory';
import * as dotenv from 'dotenv';

import cucumberJson from 'wdio-cucumberjs-json-reporter';
import appConfig from '../config/app-config';

import Page from './Page';

dotenv.config();

const brand = "//a[@class='navbar-brand']";
const aboutUsNav = "//li[@id='about_us']//a[contains(text(),'About Us')]"
const contactUsNav = "//ul[@class='solution_list']//a[normalize-space()='Contact Us']";
const clickProducts = "//a[normalize-space()='PRODUCTS']"
const prodDetails = "//h1[normalize-space()='Revolutionizing Engineering Dynamics']"

const shadowRootDemoDescription = "//div[@class='demo-description']";
const shadowRootDemoDescriptionTxt = "Menu UI component is with Shadow DOM enabled. The Menu's markup structure, style, and behavior in this demo are hidden and separate from other code on the page.";
const shadowText = "File";

const solutionsLink = "//a[normalize-space()='Solutions']"
const digitalInnovationLink = "//div[@class='footer_list']//a[normalize-space()='Digital Innovation']"
const continousDeliveryValueLink = "//div[@class='footer_list']//a[normalize-space()='Continuous Delivery of Value']"
const qeLink = "//div[@class='footer_list']//a[normalize-space()='Quality Engineering']"
const custExpLink = "//div[@class='footer_list']//a[normalize-space()='Customer Experience']"
const sapLink = "//div[@class='footer_list']//a[normalize-space()='SAP']"

const thoughtLeadershipLink = "//div[@class='footer_list']//a[normalize-space()='Thought Leadership']"
const insightsLink = "//a[normalize-space()='Insights']"
const caseStudiesLink = "//a[normalize-space()='Case Studies']"

const aboutUsLink = "//div[@class='footer_list']//a[normalize-space()='About Us']"
const testimonialsLink = "//a[normalize-space()='Testimonials']"
const csrLink = "//a[normalize-space()='CSR']"

const aboutQentelliEle = "//p[contains(text(),'Qentelli (Kwen–Tel–LEE) is a Digital and Cloud Tec')]"
const aboutQentelliText = "Qentelli (Kwen–Tel–LEE) is a Digital and Cloud Technology Company. Our Intellectual Property which includes AI based products, frameworks, methodology and process playbooks help accelerate and deliver Digital Transformation, Cloud Adoption, DevOps and Quality Engineering solutions to our customers."
const aboutQentelliElement = "//div[@class='foot_txt']//p"
const qentelliLogoImg = "//div[@class='foot_list']//h4//img"

export default class TestPage extends Page {

    constructor() {
        super();
        this.ourFounder = "//div[@class='Heading_text']//h2[contains(text(),'Our Founders')]";
        this.contactUs = "//div[@class='digital_banner-txt']//h1[contains(text(),'Contact Us')]";
        this.products = "//a[normalize-space()='PRODUCTS']"
        this.leadershipProducts = "//ul[@class='solution_list']//a[normalize-space()='Thought Leadership']"
        this.productsContactUs = "//ul[@class='solution_list']//a[normalize-space()='Contact Us']"
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

    // Cliks on Products link
    async clickProductsLink(){
        await action.clickElement(clickProducts,100)
    }
    // Verify products details

    async verifyProductText(){
        await action.verifyIsDisplayed(prodDetails, 100)
        await action.verifyText(prodDetails,)

    }
    // Verify Qentelli various products offerings

    async verifyProductsOfferings(){
        await action.verifyIsDisplayed(this.products)
        await action.pause(1000)
        await action.verifyIsDisplayed(this.products)
        cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
        await action.verifyIsDisplayed(this.leadershipProducts)
        await action.clickElement(this.productsContactUs)
    }

    async verifyVariousLinksandTexts(){
        await action.scrollElement(qentelliLogoImg, 'bottom')
        await action.verifyIsDisplayed(solutionsLink, 100)
        await action.verifyIsDisplayed(digitalInnovationLink, 100)
        await action.verifyIsDisplayed(continousDeliveryValueLink, 100)
        await action.verifyIsDisplayed(qeLink, 100)
        await action.verifyIsDisplayed(custExpLink, 100)
        await action.verifyIsDisplayed(sapLink, 100)

        await action.verifyIsDisplayed(thoughtLeadershipLink, 100)
        await action.verifyIsDisplayed(caseStudiesLink, 100)
        await action.verifyIsDisplayed(insightsLink, 100)

        await action.verifyIsDisplayed(aboutUsLink, 100)
        await action.verifyIsDisplayed(testimonialsLink, 100)
        await action.verifyIsDisplayed(csrLink, 100)

        await action.verifyIsDisplayed(aboutQentelliElement, 100)
        await expect($(aboutQentelliElement)).toHaveText(expect.stringContaining(aboutQentelliText))
        await action.verifyIsDisplayed(qentelliLogoImg, 100)
           
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
}
