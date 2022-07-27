
const {Builder, By, until} = require("selenium-webdriver");
var expect = require('expect.js');

// expected results
const loginPUrl = 'https://test.sugaringfactory.com/index.php?route=account%2Flogin'

// locators init
const loginPXpath = '//*[@id="header"]/div[1]/div[2]/a[5]'
async function example(){

    // launch the browser
    let driver = await new Builder().forBrowser("chrome").build();

    //navigate to our app application
    await driver.get("https://test.sugaringfactory.com/")

    // wait for the element
    await driver.wait(until.elementLocated(By.xpath(loginPXpath)), 5000);
    // find element
    const loginPage = await driver.findElement(By.xpath(loginPXpath));
    
    // interact with element
    await loginPage.click();

    // wait for the url
    // await driver.wait(until.urlIs(LoginPUrl), 2000);

    // get url
    const actualLoginPUrl = await driver.getCurrentUrl();
    
    // check for errors 
    if (loginPUrl != actualLoginPUrl) {
        console.log(`Expected ${loginPUrl} to be ${actualloginPUrl}`);
    }
    else {
        console.log(`Test passed`);
    }

    //close the browser
    // await driver.sleep(8000);
    await driver.quit();
}

example();