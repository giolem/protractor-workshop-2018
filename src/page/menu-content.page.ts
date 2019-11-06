import { $, ElementFinder, browser, protractor } from 'protractor';

export class MenuContentPage {
  private tShirtMenu: ElementFinder;

  constructor () {
    this.tShirtMenu = $('li:nth-child(3) > a[title=T-shirts]');
  }
  public async goToTShirtMenu(): Promise<void> {
    await browser.wait(protractor.ExpectedConditions.visibilityOf(this.tShirtMenu), 5000, 'Element still not visible');
    await this.tShirtMenu.click();
  }
}
