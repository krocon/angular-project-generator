import { browser, by, element } from 'protractor';
import { logging } from 'selenium-webdriver';
import { ProtractorHarnessEnvironment } from '@angular/cdk/testing/protractor';
import { MatSlideToggleHarness, SlideToggleHarnessFilters } from '@angular/material/slide-toggle/testing';
import {
  MatRadioButtonHarness,
  MatRadioGroupHarness,
  RadioButtonHarnessFilters,
  RadioGroupHarnessFilters
} from '@angular/material/radio/testing';
import { MatSelectHarness, SelectHarnessFilters } from '@angular/material/select/testing';
import { InputHarnessFilters, MatInputHarness } from '@angular/material/input/testing';
import { ButtonHarnessFilters, MatButtonHarness } from '@angular/material/button/testing';
import { HarnessLoader } from '@angular/cdk/testing';
import { MatDialogHarness } from '@angular/material/dialog/testing';
import { WebdriverWebElement } from 'protractor/built/element';
import { MatCheckboxHarness } from '@angular/material/checkbox/testing';

export class AppPage {
  expectSevereLogEntries: boolean;
  loader: HarnessLoader;
  readonly logErrorsToIgnore = ['https://fonts.googleapis.com'];
  isChrome = true;

  constructor() {
    this.expectSevereLogEntries = false;
    this.loader = ProtractorHarnessEnvironment.loader();
    browser.driver.getCapabilities().then(caps => {
        this.isChrome = caps.get('browserName') === 'chrome';
      }
    );
  }

  navigateTo(page: string, timeout?: number) {
    if (timeout) {
      return browser.get(browser.baseUrl + page, timeout) as Promise<any>;
    } else {
      return browser.get(browser.baseUrl + page, 10000) as Promise<any>;
    }
  }

  getTitleText() {
    browser.waitForAngularEnabled(false);
    return element(by.css('[data-test-id="app-title-span"]')).getText() as Promise<string>;
    // return element(by.xpath('//[data-test-id="app-title-span"]')).getText() as Promise<string>;
  }

  inputText(field: string, text: string) {
    return element(by.xpath('//input[@data-test-id="' + field + '"]')).sendKeys(text);
  }

  pressButtonById(id: string) {
    return element(by.xpath('//button[@data-test-id="' + id + '"]')).click();
  }

  pressElementById(id: string) {
    return element(by.xpath('//[@data-test-id="' + id + '"]')).click();
  }

  pressAnchorById(id: string) {
    return element(by.xpath('//a[@data-test-id="' + id + '"]')).click();
  }

  async checkButtonEnabled(elementName: string) {
    const input = await this.getButton(elementName);
    return !await input.isDisabled();
  }

  async checkInputEnabled(elementName: string) {
    const input = await this.getInput(elementName);
    return !await input.isDisabled();
  }

  async getInputValue(elementName: string) {
    const input = await this.getInput(elementName);
    return await input.getValue();
  }

  async clearInput(elementName: string) {
    const input = await this.getInput(elementName);
    await input.setValue('');
    await input.blur();
  }

  getDialog() {
    return this.loader.getHarness(MatDialogHarness);
  }

  getDialogTitle() {
    return element(by.css('mat-dialog-container')).getText() as Promise<string>;
  }

  getElementsByTestId(id: string) {
    return element(by.css(`[data-test-id=${id}]`));
  }

  getDialogCount() {
    return element.all(by.css('mat-dialog-container'));
  }

  dragAndDrop(source, target: WebdriverWebElement) {
    return browser.actions()
      .mouseMove(source)
      .mouseDown(source)
      .mouseMove({x: 10, y: 0})
      .mouseMove(target)
      .mouseUp();
  }

  getElementsByClass(classname: string) {
    return element.all(by.deepCss(classname));
  }

  getErrorMessage() {
    return element(by.tagName('mat-error')).getText() as Promise<string>;
  }

  getErrorMessageById(id: string) {
    return element(by.deepCss(`mat-error[data-test-id=${id}]`)).getText() as Promise<string>;
  }

  getHintMessageById(id: string) {
    return element(by.deepCss(`mat-hint[data-test-id=${id}]`)).getText() as Promise<string>;
  }

  getInput(id: string) {
    return this.loader
      .getHarness(MatInputHarness
        .with({selector: `[data-test-id=${id}]`} as InputHarnessFilters));
  }

  getCheckbox(id: string) {
    return this.loader
      .getHarness(MatCheckboxHarness
        .with({selector: `[data-test-id=${id}]`}));
  }

  getOptionMenuValue(id: string) {
    return element.all(by.deepCss(`mat-select[data-test-id=${id}]`))
      .map(x => x.getText());
  }

  getButton(id: string) {
    return this.loader
      .getHarness(MatButtonHarness
        .with({selector: `[data-test-id=${id}]`} as ButtonHarnessFilters));
  }

  getRadioButtonGroup(id: string) {
    return this.loader
      .getHarness(MatRadioGroupHarness
        .with({selector: `[data-test-id=${id}]`} as RadioGroupHarnessFilters));
  }

  getRadioButton(id: string) {
    return this.loader
      .getHarness(MatRadioButtonHarness
        .with({selector: `[data-test-id=${id}]`} as RadioButtonHarnessFilters));
  }

  getSlideToggle(id: string) {
    return this.loader
      .getHarness(MatSlideToggleHarness
        .with({selector: `[data-test-id=${id}]`} as SlideToggleHarnessFilters));
  }

  getSelect(id: string) {
    return this.loader
      .getHarness(MatSelectHarness
        .with({selector: `[data-test-id=${id}]`} as SelectHarnessFilters));
  }

  getCurrentUrl() {
    return browser.getCurrentUrl();
  }

  getSideNavText() {
    return element(by.tagName('app-side-navigation-extra')).getText() as Promise<string>;
  }

  getOptionsShadowDom() {
    return element.all(by.deepCss('span.mat-option-text'))
      .map(x => x.getText()) as Promise<string[]>;
  }

  getInputValueShadowDom(id: string) {
    return element(by.deepCss(`input[data-test-id=${id}]`)).getAttribute('value');
  }

  getBrowserLog() {
    return browser.manage().logs().get('browser');
  }

  hasErrorsInLog(entries: logging.Entry[]) {
    return entries.filter(logEntry => logEntry.level === logging.Level.SEVERE &&
      !this.isIgnorableError(logEntry)).length > 0;
  }

  isIgnorableError(logEntry: logging.Entry) {
    return this.logErrorsToIgnore.some(ign => logEntry.message.includes(ign));
  }
}
