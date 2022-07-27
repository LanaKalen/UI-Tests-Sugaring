const { Builder, By, until } = require("selenium-webdriver");
var expect = require('expect.js');

// expected results
const loginPUrl = 'https://test.sugaringfactory.com/index.php?route=account%2Flogin'

// actual results
let actualFirstname = 'Lana';
let actualLastname = 'Kalen';


async function example() {

    // launch the browser
    let driver = await new Builder().forBrowser("chrome").build();

    //navigate to our app application
    await driver.get("https://test.sugaringfactory.com/");

    // wait for the element
    await driver.wait(until.elementLocated(By.linkText('Login')), 5000);
    // find element
    const loginPage = await driver.findElement(By.linkText('Login'));

    // interact with element
    await loginPage.click();


    // wait for the element
    await driver.wait(until.elementLocated(By.linkText('Continue')), 5000);

    // find element
    const registerPage = await driver.findElement(By.linkText('Continue'));

    // interact with element
    await registerPage.click();

    await driver.wait(until.elementLocated(By.name('firstname')), 5000);
    let firstname = await driver.findElement(By.name('firstname'));
    await firstname.sendKeys(actualFirstname);
    
    await driver.wait(until.elementLocated(By.name('lastname')), 5000);
    let lastname = await driver.findElement(By.name('lastname'));
    await lastname.sendKeys(actualLastname);
    
    let registerForm = await driver.findElement(By.id('register'));
    let registerHeader = await registerForm.findElement(By.xpath(`//h2`));
    let actualRegisterHeader = await registerHeader.getText();

   let  expectedRegisterHeader = 'Your Personal Details';

    if (expectedRegisterHeader != actualRegisterHeader) {
        console.log(`Expected ${expectedRegisterHeader} to be ${actualRegisterHeader}`);
    }
    else {
        console.log(`Test passed`);
    }

    
    // // check for errors 
    // if (registerPUrl != actualRegisterPUrl) {
    //     console.log(`Expected ${RegisterPUrl} to be ${actualRegisterPUrl}`);
    // }
    // else {
    //     console.log(`Test passed`);
    // }

    //close the browser
    // await driver.sleep(5000);
    await driver.close();
    await driver.quit();
}

example();