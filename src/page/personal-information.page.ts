import { element, by, ElementFinder, browser, protractor } from 'protractor';
import * as remote from 'selenium-webdriver/remote';
import { existsSync } from 'fs';
import { resolve } from 'path';
import { DownloadService } from '../service';

interface PersonalInformation {
  firstName: string;
  lastName: string;
  sex: string;
  experience: number;
  profession: string[];
  tools: string[];
  continent: string;
  commands: string[];
  file?: string;
  downloadFile?: boolean;
}

export class PersonalInformationPage {
  private firstNameField: ElementFinder;
  private lastNameField: ElementFinder;
  private sendButton: ElementFinder;
  private pageTitleLabel: ElementFinder;
  private uploadFileInput: ElementFinder;
  private testFileDownloadLink: ElementFinder;

  constructor() {
    this.firstNameField =  element(by.css('input[name=firstname]'));
    this.lastNameField = element(by.css('input#lastname'));
    this.sendButton = element(by.css('#buttonwithclass'));
    this.pageTitleLabel = element(by.id('content')).element(by.tagName('h1'));
    this.uploadFileInput = element(by.id('photo'));
    this.testFileDownloadLink = element(by.linkText('Test File to Download'));

  }

  private sexOption(name: string): ElementFinder {
    return element(by.css(`[name="sex"][value="${name}"]`));
  }

  private async download() {
    const link = await this.testFileDownloadLink.getAttribute('href');

    const service = new DownloadService();
    await service.downloadFile(link, 'test-document.xlsx');
  }

  private experienceOption(years: number): ElementFinder {
    return element(by.css(`[name="exp"][value="${years}"]`));
  }

  private professionOption(name: string): ElementFinder {
    return element(by.css(`[name="profession"][value="${name}"]`));
  }

  private toolsOption(name: string): ElementFinder {
    return element(by.css(`[name="tool"][value="${name}"]`));
  }

  private continentOption(name: string): ElementFinder {
    return element(by.id('continents')).element(by.cssContainingText('option', name));
  }

  private seleniumCommandOption(name: string): ElementFinder {
    return element(by.id('selenium_commands')).element(by.cssContainingText('option', name));
  }

  public async getPageTitle(): Promise<string> {
    await browser.wait(protractor.ExpectedConditions.visibilityOf(this.pageTitleLabel), 8000, 'Element still not visible');
    return await this.pageTitleLabel.getText();
  }
  public async getFilename(): Promise<string> {
    const fullPath: string = await this.uploadFileInput.getAttribute('value');
    return fullPath.split(/(\\|\/)/g).pop();
  }

  private async uploadFile(relativePath: string): Promise<void> {
    const fullPath = resolve(process.cwd(), relativePath);

    if (existsSync(fullPath)) {
      await browser.setFileDetector(new remote.FileDetector());
      await this.uploadFileInput.sendKeys(fullPath);
      await browser.setFileDetector(undefined);
    }
  }

  public async fillForm(form: PersonalInformation): Promise<void> {
    await browser.executeScript('window.scrollTo(0,300);');
    await this.firstNameField.sendKeys(form.firstName);
    await this.lastNameField.sendKeys(form.lastName);
    await this.sexOption(form.sex).click();
    await browser.executeScript('window.scrollTo(505,700);');
    await this.experienceOption(form.experience).click();

    for (const name of form.profession) {
      await browser.executeScript('window.scrollTo(505,881);');
      await this.professionOption(name).click();
    }

    if (form.file) {
      await this.uploadFile(form.file);
    }

    if (form.downloadFile) {
      await this.download();
    }

    for (const name of form.tools) {
      await browser.executeScript('window.scrollTo(0,800);');
      await this.toolsOption(name).click();
    }

    await this.continentOption(form.continent).click();

    for (const name of form.commands) {
      await browser.executeScript('window.scrollTo(0,500);');
      await this.seleniumCommandOption(name).click();
    }
  }

  public async submit(form: PersonalInformation): Promise<void> {
    await this.fillForm(form);
    await this.sendButton.click();
  }
}
