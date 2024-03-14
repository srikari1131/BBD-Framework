import { assert } from 'chai';
const yaml = require('js-yaml');
const fs = require('fs');
import allureReporter from '@wdio/allure-reporter';
import { Key } from 'webdriverio';
import cucumberJson from 'wdio-cucumberjs-json-reporter';

let Xlocation;
let Ylocation;
let Width;
let Height;

class userAction {

    /**
    * Delete allbrowser cookies
    */
    async deleteCookies() {
        try {
            await allureReporter.step('Delete Cookies', async () => {
                setTimeout(async function () {
                    await browser.deleteCookies();
                    console.log('Delete cookies');
                }, 2000)
            });
        }

        catch (error) {
            await browser.pause(1000);
        }
    }

    async setBrowserSize(x, y) {
        try {
            await allureReporter.step(`Setting browser size to [${x},${y}]`, async () => {
                setTimeout(async function () {
                    await browser.setWindowSize(x, y);
                    console.log(`Set browser size to [${x},${y}]`);
                }, 2000);
            })
        }
        catch (error) {
            await browser.pause(1000);
        }
    }

    async scrollElement(selector, loc) {
        console.log(`scrollElement[${selector}][${loc}]`);
        const element = (typeof (selector) === 'string') ? await $(selector) : selector;
        switch (loc) {
            case 'view':
                await element.scrollIntoView();
                break;

            case 'top':
                await element.scrollIntoView(true);
                break;

            case 'bottom':
                await element.scrollIntoView(false);
                break;

            case 'center':
                await element.scrollIntoView({ block: 'center', inline: 'center' });
                break;
        }
    }

    async highLightElement(selector) {
        console.log(`highLightElement (${selector})`);
        const element = (typeof (selector) === 'string') ? await $(selector) : selector;
        Xlocation = await element.getLocation('x') - 2;
        Ylocation = await element.getLocation('y') - 2;
        Width = await element.getSize('width') + 4;
        Height - await element.getSize('height') + 4;
        await browser.execute(
            "var div=document.createElement ('div');"
            + "div.style.width ='" + Width + "px';"
            + "div.style.height ='" + Height + "px';"
            + "div.style.background = 'transparent';"
            + "div.style.border = '4px solid green';"
            + "div.style.position = 'absolute';"
            + "div.style.left = '" + Xlocation + "px';"
            + "div.style.top = '" + Ylocation + "px';"
            + "div.style.zIndex = '99999';"
            + "div.id = 'highlightBorder' ;"
            + "document.body.appendChild (div) ;"

        );

        await browser.pause(100);
        await browser.execute("var child=document .getElementById('highlightBorder') ;"
            + "child. parentNode.removeChild(child);");
        await browser.pause(100);
        return this;
    }

    async waitForPageLoad() {
        console.log(`waitForPageLoad...`);
        try {
            for (var iLoop = 0; iLoop < 300; iLoop++) {
                var pageStatus = await browser.execute("return document .readyState");
                if (pageStatus === "complete" || pageStatus === "interactive") { break; }
                else { await browser.pause(100) };
            }
        }
        catch (e) { }
    }

    async getElement(strORobj) {
        await this.waitForPageLoad();
        await browser.pause(100);
        let element;
        if (typeof (strORobj) === 'string') {
            await this.scrollElement(strORobj, "center");
            await browser.pause(100);
            await this.highLightElement(strORobj);
            element = await $(strORobj);

        }
        else {
            element = strORobj;
            await element.scrollIntoView({ 'block': 'center', 'inline': 'center' });
            await browser.pause(100);
            await this.highLightElement(element);
        }
        return element;
    }

    async clickElement(selector, pauseMS) {
        console.log(`clickElement([${selector}], ${pauseMS})`);
        const element = await this.getElement(selector);
        await element.waitForClickable();
        await element.click();
        await this.waitForPageLoad();
        if (pauseMS != null) { await browser.pause(pauseMS); }
    }

    async jsClick(selector) {
        console.log(`jsClick([${selector}])`);
        const element = (typeof (selector) === 'string') ? await $(selector) : selector;
        await allureReporter.step(`jsClick([${selector}])`, async () => {
            await element.scrollIntoView({ 'block': 'center', 'inline': 'center' });
            await browser.execute("arguments[0].click();", element);

        })
    }

    async focus(selector) {
        console.log(`focus([${selector}])`);
        const element = (typeof (selector) === 'string') ? await $(selector) : selector;
        await allureReporter.step(`focus([${selector}])`, async () => {
            await element.scrollIntoView({ 'block': 'center', 'inline': 'center' });
            await browser.execute("arguments[0].focus();", element);
            await action.pause(1000);

        })
    }

    async outFocus(selector) {
        console.log(`outFocus([${selector}])`);
        const element = (typeof (selector) === 'string') ? await $(selector) : selector;
        await allureReporter.step(`outFocus([${selector}])`, async () => {
            await element.scrollIntoView({ 'block': 'center', 'inline': 'center' });
            await browser.execute("arguments[0].blur();", element);
        })
    }

    async fireEvent(eventName, selector) {
        const element = (typeof (selector) === 'string') ? await $(selector) : selector;
        var scriptCode = '';
        if (eventName === "onclick") {
            scriptCode = `arguments[0].click();`;

        }
        switch (eventName) {
            case 'onmouseover':
                scriptCode = `if(document.createEvent){
                    var evObj = document.createEvent('MouseEvents');
                    ev0bj.initEvent('mouseover', true, false);
                    arguments[0].dispatchEvent(ev0bj) ;
                    } else if(document.createEventObject) {
                    arguments[0].fireEvent('onmouseover');
                    }`;
                break;
            case 'onchange':
                scriptCode = `if(document.createEvent){
                    var evObj = document.createEvent('HTMLEvents');
                    ev0bj.initEvent('change', true, false);
                    arguments[0].dispatchEvent(ev0bj) ;
                    } else if(document.createEventObject) {
                    arguments[0].fireEvent('onchange');
                }`;
                break;
        }
        await browser.execute(scriptCode, element);
    }

    async enterText(selector, data, pauseMS) {
        console.log(`enterText[${selector}], [${data}]`);
        await allureReporter.step(`enterText[${selector}], [${data}]`, async () => {
            const element = await this.getElement(selector);
            await element.setValue(data);
            if (pauseMS != null) { await browser.pause(pauseMS); }

        })
        return this;
    }

    async ClearText(selector) {
        console.log(`clearText[${selector}]`);
        await allureReporter.step(`clearText[${selector}]`, async () => {
            const element = await this.getElement(selector);
            await this.pause(1000);
            await element.click();
            await browser.action('key')
                .down(Key.Ctrl).down('A')
                .pause(10)
                .up(Key.Ctrl).up('A')
                .pause(10)
                .down(Key.Delete).up(Key.Delete)
                .perform()
            await browser.pause(1000);
        })
        return this;
    }


    async selectByText(selector, data) {
        console.log(`select8yText[${selector}], [${data}]`);
        await allureReporter.step(`selectByText[${selector}], [${data}]`, async () => {
            const element = await this.getElement(selector);
            await element.selectByVisibleText(data);
        })
        return this;
    }

    async addScreenshot() {
        await cucumberJson.attach(await browser.takeScreenshot(), 'image/png');
    }

    async selectByIndex(selector, data) {
        console.log(`select8yIndex[${selector}], [${data}]`);
        await allureReporter.step(`selectByIndex[${selector}], [${data}]`, async () => {
            const element = await this.getElement(selector);
            await element.selectByIndex(data);
        })
        return this;
    }

    async enterViaKeys(selector, data) {
        console.log(`enterViakeys[${selector}], [${data}]`);
        await allureReporter.step(`enterViakeys[${selector}], [${data}]`, async () => {
            const element = await this.getElement(selector);
            await element.click();
            await browser.pause(100);
            await browser.keys([data]);
        })
        return this;
    }

    async keyboardKeys(data) {
        console.log(`keyboardkeys[${data}]`);
        await allureReporter.step(`keyboardkeys[${data}]`, async () => {
            await this.waitForPageload();
            await browser.pause(100);
            await browser.keys(data);
            await browser.pause(100);
        })
        return this;
    }

    async pause(millis) {
        await browser.pause(millis);
    }

    async eleDisplayed(selector) {
        console.log(`elementDisplayed[${selector}]`);
        await allureReporter.step(`elementDisplayed[${selector}]`, async () => {
            const element = await this.getElement(selector);
            await element.isDisplayed();
        })
        return this;
    }

    async verifyIsDisplayed(selector, timeoutMS = 60000) {
        console.log(`verifyIsDisplayed[${selector}, ${timeoutMS}]`);
        const element = (typeof (selector) === 'string') ? await $(selector) : selector;
        await allureReporter.step(`verifyIsDisplayed[${selector}, ${timeoutMS}]`, async () => {
            await expect(element).toBeDisplayed({ wait: timeoutMS });
        }).finally(async () => {

        })
    }

    async eleEnabled(selector) {
        console.log(`eleEnabled[${selector}]`);
        let enabled = false;
        await allureReporter.step(`eleEnabled[${selector}]`, async () => {
            const element = await this.getElement(selector);
            enabled = await element.isEnabled();
        })
        return enabled;
    }

    async verifyText(selector, data) {
        console.log(`verifyText[${selector}], [${data}]`);
        await allureReporter.step(`verifyText[${selector}], [${data}]`, async () => {
            const element = await this.getElement(selector);
            assert(await element.getText() === data);
        }).finally(async () => {

        })
        return this;
    }


    async selectOptionByText(selector, data) {
        console.log(`selectOptionByText[${selector}], [${data}]`);
        const element = (typeof (selector) === 'string') ? await $(selector) : selector;
        await allureReporter.step(`selectOptionByText[${selector}], [${data}]`, async () => {
            await this.waitForPageload();
            const elems = $$(selector);
            const eleCount = await elems.length;
            for (var iLoop = 0; iLoop < eleCount; iLoop++) {
                if (await elems[iLoop].getText() === data) {
                    await elems[iLoop].click();
                    break;
                }
            }
        })
        return this;
    }

    async openApplication(data) {
        console.log(`openApplication[${data}]`);
        await allureReporter.step(`openApplication[${data}]`, async () => {
            await this.deleteCookies();
            await this.pause(1000);
            await browser.url(data);
            await this.waitForPageload();
        })
        return this;
    }


    async getTestData(sPage, sConfig, sField) {
        const config = yaml.load(fs.readFileSync('src/coa/test-data/' + sPage + '.yml', 'utf8'));
        let TestDataString = "config." + sPage + "." + sConfig + "." + sField;
        var sTestData = eval('(' + TestDataString + ')');
        return sTestData;
    }

    async waitforWindowsCount(count, timeoutMs = 30000) {
        await browser.waitUntil(async function () {
            return (await browser.getWindowHandles()).length == count;
        }, { timeout: timeoutMs });

    }

    //open new tab
    async openNewTab(url) {
        console.log(`openNewtab[${url}]`);
        await allureReporter.step(`openNewtab[${url}]`, async () => {
            browser.execute((url) => {
                window.open(url);
            }, url);
            browser.pause(2000);
        })
    }

    //close tab
    async closeTab() {
        console.log(`closeTab...`);
        await allureReporter.step(`closeTab`, async () => {
            browser.getAllWindowHandles().then(function (handles) {
                browser.driver.switchTo().window(handles[1]);
                browser.driver.close();
                browser.driver.switchTo().window(handles[0]);
            });
        })
    }

    async switchTolframe(selector) {
        console.log(`Switch to iframe [${selector}]`);
        const iframe = await browser.findElement('css selector', selector);
        await browser.switchToFrame(iframe);
        await browser.pause(1000);
        return this;
    }

    async switchToMainFrame() {
        await browser.switchToParentFrame();
        return this;
    }

    async waitForPageload() {
        console.log(`waitForPageLoad...`);
        try {
            for (var iLoop = 0; iLoop < 300; iLoop++) {
                var pageStatus = await browser.execute("return document.readyState");
                if (pageStatus === "complete" || pageStatus === "interactive") { break; }
                else { await browser.pause(100) };

            }
        }
        catch (e) { }
    }

    async actionClick(selector) {
        let element = await $(selector);
        let clickAction = [
            {
                "type": "pointer",
                "id": "mouseClick",
                "actions": [
                    { type: 'pointerMove', origin: element, x: 0, y: 0 },
                    { type: 'pointerDown', button: 0 },
                    { type: 'pointerUp', button: 0 }
                ]
            }
        ];

        await browser.performActions(clickAction);
    }

}

export const action = new userAction();