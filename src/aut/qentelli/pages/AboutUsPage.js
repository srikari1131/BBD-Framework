import { action } from '../../../support/action/actionFactory';
import * as dotenv from 'dotenv';

import cucumberJson from 'wdio-cucumberjs-json-reporter';
import appConfig from '../config/app-config';

import Page from './Page';

dotenv.config();

const ourVisionAndMission = "(//div[@class='Heading_text']//h2)[1]";
const verifyOurVisionAndMissionCardsText = "//div[@class='about-white-box']/p";


export default class AboutUsPage extends Page {

    constructor() {
        super();
    }
    async verifyOurVisionAndMissionText(){
     await action.verifyIsDisplayed(ourVisionAndMission);
     cucumberJson.attach(await browser.takeScreenshot(), 'image/png');       
    }
    async verifyOurVisionAndMissionCardsText(){
        const cardsTexts = await $$(verifyOurVisionAndMissionCardsText);
        const cardsTextValues = [
            "Be the World’s best Technology company",
            "Achieve Business Assurance Goals through Engineering Assurance",
            "Transform Applications by applying the Core Principles the Software was built on",
            "Build a culture that supports Qentellects - our employees, who provide exceptional service to our customers",
            "Bring Real-time and absolute visibility into the technology and its operations as it progresses through each stage of the lifecycle"
        ];        
        for (let i = 0; i < cardsTexts.length; i++) {
            const cardText = await cardsTexts[i].getText();
            expect(cardText).toEqual(cardsTextValues[i]);
            console.log(">>>>", cardText);
        }
        browser.pause(1000);      
    cucumberJson.attach(await browser.takeScreenshot(), 'image/png');       
    }
}
