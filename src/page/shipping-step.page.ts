import { $, ElementFinder, browser } from 'protractor';

export class ShippingStepPage {
  private checkSelector: ElementFinder;
  private clickSubmitButtom: ElementFinder;

  constructor () {

    this.checkSelector = $('#cgv');
    this.clickSubmitButtom = $('#form > p > button > span');

  }

  public async goToShippingStepPage(): Promise<void> {
    await this.checkSelector.click();
    await browser.sleep(3000);
    await this.clickSubmitButtom.click();

  }
}
