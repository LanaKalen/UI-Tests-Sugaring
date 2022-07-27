const {Builder, By, until} = require("selenium-webdriver");
var expect = require('expect.js');

// expected results
const softPUrl = `https://test.sugaringfactory.com/sugaring-paste/soft`

// locators init
const softPXpath = `//a[@onclick='ShCounters.product.click({"id":"101","name":"Soft","description":"Super smooth paste for fine hair","price":"$29.89"});']`

async function example(){

    // launch the browser
    let driver = await new Builder().forBrowser("chrome").build();

    //navigate to our app application
    await driver.get("https://test.sugaringfactory.com/")

    // wait for the element
    await driver.wait(until.elementLocated(By.xpath(softPXpath)), 5000);
    // find element
    const softProduct = await driver.findElement(By.xpath(softPXpath));
    
    // interact with element
    await softProduct.click();

    // wait for the url
    // await driver.wait(until.urlIs(softPUrl), 2000);

    // get url
    const actualSoftPUrl = await driver.getCurrentUrl();
    
    // check for errors 
    if (softPUrl != actualSoftPUrl) {
        console.log(`Expected ${softPUrl} to be ${actualSoftPUrl}`);
    }
    else {
        console.log(`Test passed`);
    }

    //close the browser
    // await driver.sleep(5000);
    await driver.quit();
}

example();