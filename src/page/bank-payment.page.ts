import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private selectBankPayment: ElementFinder;

  constructor () {
    this.selectBankPayment = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
  }
  public async goToBankPaymentPage(): Promise<void> {
    await this.selectBankPayment.click();
  }
}
