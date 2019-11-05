import { $, ElementFinder } from 'protractor';

export class PaymentStepPage {
  private makePayment: ElementFinder;

  constructor () {
    this.makePayment = $('#cart_navigation > button > span');
  }

  public async goToPaymentStepPage(): Promise<void> {
    await this.makePayment.click();
  }
}
