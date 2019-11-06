import { $, ElementFinder, protractor, browser } from 'protractor';

export class PersonalInformationPage {
  private firstName: ElementFinder;

  constructor () {
    this.firstName = $('input[name=firstname]');
  }

  public async fillField(): Promise<void> {
    // tslint:disable-next-line: max-line-length
    await browser.wait(protractor.ExpectedConditions.visibilityOf(this.firstName), 5000, 'input[name=firstname]');
    await this.firstName.sendKeys('Alejandro');
  }
}
