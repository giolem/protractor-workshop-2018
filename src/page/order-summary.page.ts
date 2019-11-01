import { $, ElementFinder } from 'protractor';

export class OrderSummaryPage {
  private submitAddButtom: ElementFinder;

  constructor () {
    this.submitAddButtom = $('#center_column a.button.ajax_add_to_cart_button.btn.btn-default');
  }

  public async goToOrderSummaryPage(): Promise<void> {
    await this.submitAddButtom.click();
  }
}
