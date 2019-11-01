import { $, ElementFinder } from 'protractor';

export class ProductAddedModalPage {
  private submitModalButtom: ElementFinder;

  constructor () {
    this.submitModalButtom = $('[style*="display: block;"] .button-container > a');
  }

  public async goToProductAddedModalPage(): Promise<void> {
    await this.submitModalButtom.click();
  }
}
