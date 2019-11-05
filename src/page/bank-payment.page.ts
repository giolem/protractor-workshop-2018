import { $, ElementFinder } from 'protractor';

export class BankPaymentPage {
  private selectBankPayment: ElementFinder;

  constructor () {
    // this.selectBankPayment = $('#HOOK_PAYMENT > div:nth-child(1) > div > p > a');
    this.selectBankPayment = $('p.payment_module > a.bankwire');
  }
  public async goToBankPaymentPage(): Promise<void> {
    await this.selectBankPayment.click();
  }
}
