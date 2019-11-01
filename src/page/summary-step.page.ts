import { $, ElementFinder } from 'protractor';

export class SummaryStepPage {
  private submitSummaryButtom: ElementFinder;

  constructor () {
    this.submitSummaryButtom = $('.cart_navigation span');
  }

  public async goToSummaryStepPage(): Promise<void> {
    await this.submitSummaryButtom.click();
  }
}
