const {Builder, By, until} = require("selenium-webdriver");
var expect = require('expect.js');

// expected results
const ultimaPUrl = `https://test.sugaringfactory.com/sugaring-paste/ultima`

// locators init
const ultimaPXpath = '//*[@id="container"]/div[2]/div/ul/a[4]/div[1]'
async function example(){

    // launch the browser
    let driver = await new Builder().forBrowser("chrome").build();

    //navigate to our app application
    await driver.get("https://test.sugaringfactory.com/")

    // wait for the element
    await driver.wait(until.elementLocated(By.xpath(ultimaPXpath)), 5000);
    // find element
    const ultimaProduct = await driver.findElement(By.xpath(ultimaPXpath));
    
    // interact with element
    await ultimaProduct.click();

    // wait for the url
    // await driver.wait(until.urlIs(UltimaPUrl), 2000);

    // get url
    const actualUltimaPUrl = await driver.getCurrentUrl();
    
    // check for errors 
    if (ultimaPUrl != actualUltimaPUrl) {
        console.log(`Expected ${ultimaPUrl} to be ${actualUltimaPUrl}`);
    }
    else {
        console.log(`Test passed`);
    }

    //close the browser
    // await driver.sleep(5000);
    await driver.quit();
}

example();