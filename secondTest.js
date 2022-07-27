const {Builder, By, until} = require("selenium-webdriver");
var expect = require('expect.js');

// expected results
const gentlePUrl = `https://test.sugaringfactory.com/sugaring-paste/gentle`

// locators init
const gentlePXpath = '//*[@id="container"]/div[2]/div/ul/a[2]/div[1]'

async function example(){

    // launch the browser
    let driver = await new Builder().forBrowser("chrome").build();

    //navigate to our app application
    await driver.get("https://test.sugaringfactory.com/")

    // wait for the element
    await driver.wait(until.elementLocated(By.xpath(gentlePXpath)), 5127);
    // find element
    const gentleProduct = await driver.findElement(By.xpath(gentlePXpath));
    
    // interact with element
    await gentleProduct.click();

    // wait for the url
    // await driver.wait(until.urlIs(gentlePUrl), 2000);

    // get url
    const actualGentlePUrl = await driver.getCurrentUrl();
    
    // check for errors 
    if (gentlePUrl != actualGentlePUrl) {
        console.log(`Expected ${GentlePUrl} to be ${actualGentlePUrl}`);
    }
    else {
        console.log(`Test passed`);
    }

    //close the browser
    // await driver.sleep(5000);
    await driver.quit();
}

example();