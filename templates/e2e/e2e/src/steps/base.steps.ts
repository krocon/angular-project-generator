import { After, Before, Given, Status, Then, When } from 'cucumber';
import { expect } from 'chai';
import { logging } from 'selenium-webdriver';
import { AppPage } from '../pages/base.po';
import { browser, by, element, protractor } from 'protractor';
import { RadioButtonHarnessFilters } from '@angular/material/radio/testing';
import { OptionHarnessFilters } from '@angular/material/core/testing';

let page: AppPage;

Before(() => {
  page = new AppPage();
  browser.waitForAngularEnabled(false);
});


// =======================================================================================================
// PREPARATIONS (given)
// =======================================================================================================


Given(/^I am logged in$/,
  {timeout: 20 * 1000}, async () => {
    await page.navigateTo('anmelden');
    await page.inputText('login-user-input', 'ohnekontingent');
    await page.inputText('login-password-input', 'def');
    await page.pressButtonById('anmelden-login-button');
    await browser.sleep(2000);
    await page.navigateTo('anfrage');
  });

Given(/^I am logged in as Kontingentkunde$/,
  {timeout: 20 * 1000}, async () => {
    await page.navigateTo('anmelden');
    await page.inputText('login-user-input', 'mitkontingent');
    await page.inputText('login-password-input', 'def');
    await page.pressButtonById('anmelden-login-button');
    await browser.sleep(2000);
    await page.navigateTo('anfrage');
  });

Given(/^The slide toggle "([^"]*)" is (on|off)$/,
  {timeout: 20 * 1000}, async (id: string, state: string) => {
    const slider = await page.getSlideToggle(id);
    if (state === 'on') {
      await slider.check();
    } else if (state === 'off') {
      await slider.uncheck();
    }
  });

Given(/^The radio button "([^"]*)" is selected in group "([^"]*)"$/,
  {timeout: 20 * 1000},
  async (id: string, group: string) => {
    const radioButtonGroup = await page.getRadioButtonGroup(group);
    await radioButtonGroup.checkRadioButton({selector: `[data-test-id=${id}]`} as RadioButtonHarnessFilters);
  });

Given(/^The input field "([^"]*)" is empty$/,
  {timeout: 20 * 1000}, async (field: string) => {
    await page.clearInput(field);
  });

Given(/^The input field "([^"]*)" contains the text "([^"]*)"$/,
  {timeout: 20 * 1000},
  async (field: string, text: string) => {
    await page.clearInput(field);
//    await browser.sleep(1000);
    await page.inputText(field, text);
//    await browser.sleep(1000);
  });

Given(/^I am on the "([^"]*)" page$/,
  {timeout: 10 * 1000}, async (path: string) => {
    await page.navigateTo(path);
  });

Given(/^I expect errors in the logfile$/,
  {timeout: 20 * 1000}, async () => {
    page.expectSevereLogEntries = true;
  });


// =======================================================================================================
// TRIGGERS (when)
// =======================================================================================================


When(/^I do nothing$/,
  {timeout: 20 * 1000}, () => {
  });

When(/^I enter "([^"]*)" with RETURN in the input field "([^"]*)"$/,
  {timeout: 20 * 1000},
  async (text: string, field: string) => {
    await page.inputText(field, text);
    await browser.sleep(2000);
    await browser.actions().sendKeys(protractor.Key.ENTER).perform();
    //  await browser.sleep(100);
    //  await browser.actions().sendKeys(protractor.Key.TAB).perform();
    //  await browser.sleep(2500);
  });

When(/^I drag "([^"]*)" to "([^"]*)"$/,
  {timeout: 20 * 1000}, async (id1, id2: string) => {
    const source = await (page.getElementsByTestId(id1).getWebElement());
    const target = await (page.getElementsByTestId(id2).getWebElement());
    await page.dragAndDrop(source, target).perform();
    await browser.sleep(2000);
  });

When(/^I enter "([^"]*)" in the input field "([^"]*)"$/,
  {timeout: 20 * 1000},
  async (text: string, field: string) => {
    await page.inputText(field, text);
  });

When(/^I choose "([^"]*)" from the select box "([^"]*)"$/,
  {timeout: 20 * 1000},
  async (text: string, field: string) => {
    const select = await page.getSelect(field);
    await select.clickOptions({selector: `[data-test-id=${text}]`} as OptionHarnessFilters);
  });

When(/^I remove the input of the field "([^"]*)"$/,
  {timeout: 20 * 1000}, async (field: string) => {
    await page.clearInput(field);
  });

When(/^I remove the input of the autocomplete field "([^"]*)"$/,
  {timeout: 20 * 1000},
  async (field: string) => {
    await page.clearInput(field);
  });

When(/^I click the button "([^"]*)"$/,
  {timeout: 20 * 1000}, async (id: string) => {
    // const button = await page.getButton(id); // TODO click does not work this way
    // await button.click();
    await page.pressButtonById(id); // old way
  });

When(/^I click the radio button "([^"]*)"$/,
  {timeout: 20 * 1000}, async (id: string) => {
    const radioButton = await page.getRadioButton(id);
    await radioButton.check();
  });

When(/^I click the slide toggle "([^"]*)"$/,
  {timeout: 20 * 1000}, async (id: string) => {
    const slide = await page.getSlideToggle(id);
    await slide.toggle();
  });

When(/^I click the link "([^"]*)"$/,
  {timeout: 20 * 1000}, async (id: string) => {
    await page.pressAnchorById(id);
  });

When(/^I wait (\d+)ms$/,
  {timeout: 20 * 1000}, async (waitMs: string) => {
    await browser.sleep(parseInt(waitMs, 10));
  });


// =======================================================================================================
// ASSERTIONS (then)
// =======================================================================================================


Then(/^The select box "([^"]*)" should be set to "([^"]*)"$/,
  {timeout: 20 * 1000},
  async (id: string, text: string) => {
    const select = await page.getSelect(id);
    expect(await select.getValueText()).to.contain(text);
  });

Then(/^I should see the title "([^"]*)"$/,
  {timeout: 20 * 1000},
  async (title: string) => {
    expect(await page.getTitleText()).to.equal(title);
  });

Then(/^The button "([^"]*)" should be (enabled|disabled)$/,
  {timeout: 20 * 1000},
  async (buttonName: string, state: string) => {
    if (state === 'enabled') { // tslint:disable-next-line:no-unused-expression
      expect(await page.checkButtonEnabled(buttonName)).to.be.true;
    } else { // tslint:disable-next-line:no-unused-expression
      expect(await page.checkButtonEnabled(buttonName)).to.be.false;
    }
  });

Then(/^The input "([^"]*)" should be (enabled|disabled)$/,
  {timeout: 20 * 1000},
  async (id: string, state: string) => {
    if (state === 'enabled') { // tslint:disable-next-line:no-unused-expression
      expect(await page.checkInputEnabled(id)).to.be.true;
    } else { // tslint:disable-next-line:no-unused-expression
      expect(await page.checkInputEnabled(id)).to.be.false;
    }
  });

Then(/^The (shadow |)input "([^"]*)" should contain the text "([^"]*)"$/,
  {timeout: 20 * 1000},
  async (mode: string, id: string, text: string) => {
    if (mode === 'shadow ') {
      const inputs = await page.getInputValueShadowDom(id);
      expect(inputs).to.contain(text);
    } else {
      expect(await page.getInputValue(id)).to.contain(text);
    }
  });

Then(/^The input "([^"]*)" should be empty$/,
  {timeout: 20 * 1000},
  async (id: string) => {
    expect(await page.getInputValue(id)).to.equal('');
  });

Then(/^The fieldset "([^"]*)" should be (enabled|disabled)$/,
  {timeout: 20 * 1000}, async (id: string, state: string) => {
    const ele = await (page.getElementsByTestId(id).getWebElement());
    const disabled = ele['isDisabled'] && ele['isDisabled']();
    if (state === 'enabled') {
      expect(disabled);
    } else {
      expect(!disabled);
    }
  });

Then(/^The radio button "([^"]*)" should be (checked|unchecked)$/,
  {timeout: 20 * 1000},
  async (id: string, state: string) => {
    const radioButton = await page.getRadioButton(id);
    if (state === 'checked') { // tslint:disable-next-line:no-unused-expression
      expect(await radioButton.isChecked()).to.be.true;
    } else { // tslint:disable-next-line:no-unused-expression
      expect(await radioButton.isChecked()).to.be.false;
    }
  });

Then(/^The radio button "([^"]*)" should be (enabled|disabled)$/,
  {timeout: 20 * 1000},
  async (id: string, state: string) => {
    const radioButton = await page.getRadioButton(id);
    if (state === 'enabled') { // tslint:disable-next-line:no-unused-expression
      expect(await radioButton.isDisabled()).to.be.false;
    } else { // tslint:disable-next-line:no-unused-expression
      expect(await radioButton.isDisabled()).to.be.true;
    }
  });

Then(/^The slide toggle "([^"]*)" should be (on|off)$/,
  {timeout: 20 * 1000},
  async (id: string, state: string) => {
    if (state === 'on') { // tslint:disable-next-line:no-unused-expression
      expect(await (await page.getSlideToggle(id)).isChecked()).to.be.true;
    } else { // tslint:disable-next-line:no-unused-expression
      expect(await (await page.getSlideToggle(id)).isChecked()).to.be.false;
    }
  });

Then(/^The select box "([^"]*)" should be (enabled|disabled)$/,
  {timeout: 20 * 1000},
  async (id: string, state: string) => {
    const select = await page.getSelect(id);
    if (state === 'enabled') {
      expect(await select.isDisabled()).to.be.false;
    } else {
      expect(await select.isDisabled()).to.be.true;
    }
  });

Then(/^The select box "([^"]*)" should be empty$/,
  {timeout: 20 * 1000}, async (id: string) => {
    const select = await page.getSelect(id);
    expect((await select.getValueText()).trim()).to.equal('');
  });

Then(/^I should see an error message containing "([^"]*)" displayed$/,
  {timeout: 20 * 1000},
  async (text: string) => {
    expect(await page.getErrorMessage()).to.contain(text);
  });

Then(/^The specific (hint|error) message "([^"]*)" should contain "([^"]*)"$/,
  {timeout: 20 * 1000},
  async (type: string, id: string, text: string) => {
    if (type === 'error') {
      expect(await page.getErrorMessageById(id)).to.contain(text);
    } else {
      expect(await page.getHintMessageById(id)).to.contain(text);
    }
  });

Then(/^The specific element "([^"]*)" should be missing$/,
  {timeout: 20 * 1000},
  async (id: string) => {
    const ele = await element(by.deepCss(`[data-test-id=${id}]`));
    expect(ele && await ele.isPresent()).to.be.false;
  });

Then(/^I should see a dialog with the title containing "([^"]*)"$/,
  {timeout: 20 * 1000},
  async (title: string) => {
    expect((await page.getDialogCount()).length, 'too many dialogs!').to.equal(1);
    expect(await page.getDialogTitle()).to.contain(title);
  });

Then(/^I should see no dialog$/,
  {timeout: 20 * 1000}, async () => {
    expect((await page.getDialogCount()).length).to.equal(0);
  });

Then(/^I should see the text "([^"]*)" in the sidenav$/,
  {timeout: 20 * 1000}, async (text: string) => {
    expect(await page.getSideNavText()).to.contain(text);
  });

Then(/^I should got routed to page "([^"]*)"$/,
  {timeout: 20 * 1000}, async (pageName: string) => {
    expect(await page.getCurrentUrl()).to.satisfy(p => p.endsWith(pageName));
  });

Then(/^The checkbox "([^"]*)" should be (checked|unchecked)$/, async (id: string, state: string) => {
  const checkbox = await page.getCheckbox(id);
  if (state === 'checked') {
    expect(await checkbox.isChecked()).to.be.true;
  } else {
    expect(await checkbox.isChecked()).to.be.false;
  }
});

Then(/^The option-menu "([^"]*)" should be set to "([^"]*)"$/, async (id: string, value: string) => {
  const option = await page.getOptionMenuValue(id);
  expect(option[0]).to.equal(value);
});


After(async function(scenario) {
  const world = this;

  if (page.isChrome) {
    if (scenario.result.status === Status.FAILED
      || scenario.result.status === Status.AMBIGUOUS) {
      const screenshot = await browser.takeScreenshot();
      world.attach(Buffer.from(screenshot, 'base64'), 'image/png');
    }
    const logs = (await page.getBrowserLog()) || [];
    if (page.hasErrorsInLog(logs)) {
      world.attach(Buffer.from('<pre>' + logs.map((logentry, index) => {
          let prefix = null;
          if (page.isIgnorableError(logentry)) {
            prefix = '<span style="color: silver">';
          } else if (logentry.level === logging.Level.SEVERE) {
            prefix = `<span style="color: ${page.expectSevereLogEntries ? 'green' : 'red'}">`;
          }
          return `${prefix ? prefix : ''}${logentry.timestamp} ${logentry.level.name} ${logentry.message}}${prefix ? '</span>' : ''}`;
        }).join('\r\n') + '</pre>'),
        'text/html');
    }
    if (page.hasErrorsInLog(logs) && !page.expectSevereLogEntries) {
      throw new Error('Unexpected SEVERE entries in console.log');
    }
    if (!page.hasErrorsInLog(logs) && page.expectSevereLogEntries) {
      throw new Error('Missing SEVERE entries in console.log');
    }
  }
});
