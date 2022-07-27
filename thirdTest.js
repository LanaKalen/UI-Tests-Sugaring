const {Builder, By, until} = require("selenium-webdriver");
var expect = require('expect.js');

// expected results
const ultraPUrl = `https://test.sugaringfactory.com/sugaring-paste/ultra`

// locators init
const ultraPXpath = '//*[@id="container"]/div[2]/div/ul/a[3]'
async function example(){

    // launch the browser
    let driver = await new Builder().forBrowser("chrome").build();

    //navigate to our app application
    await driver.get("https://test.sugaringfactory.com/")

    // wait for the element
    await driver.wait(until.elementLocated(By.xpath(ultraPXpath)), 5000);
    // find element
    const ultraProduct = await driver.findElement(By.xpath(ultraPXpath));
    
    // interact with element
    await ultraProduct.click();

    // wait for the url
    // await driver.wait(until.urlIs(UltraPUrl), 2000);

    // get url
    const actualUltraPUrl = await driver.getCurrentUrl();
    
    // check for errors 
    if (ultraPUrl != actualUltraPUrl) {
        console.log(`Expected ${ultraPUrl} to be ${actualUltraPUrl}`);
    }
    else {
        console.log(`Test passed`);
    }

    //close the browser
    // await driver.sleep(5000);
    await driver.quit();
}

example();