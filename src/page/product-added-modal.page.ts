import { $, ElementFinder, protractor, browser } from 'protractor';

export class ProductAddedModalPage {
  private submitModalButtom: ElementFinder;

  constructor () {
    this.submitModalButtom = $('[style*="display: block;"] .button-container > a');
  }

  public async goToProductAddedModalPage(): Promise<void> {
    await browser.wait(protractor.ExpectedConditions.visibilityOf(this.submitModalButtom), 4000, 'Element still not visible');
    await this.submitModalButtom.click();
  }
}
