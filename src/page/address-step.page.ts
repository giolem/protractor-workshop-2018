import { $, ElementFinder } from 'protractor';

export class AddressStepPage {
  private confirmAddress: ElementFinder;

  constructor () {
    this.confirmAddress = $('#center_column > form > p > button > span');

  }

  public async goToAdressStepPage(): Promise<void> {
    await this.confirmAddress.click();
  }
}
