import { $, ElementFinder, browser, protractor } from 'protractor';

export class MenuContentPage {
  private tShirtMenu: ElementFinder;

  constructor () {
    this.tShirtMenu = $('#block_top_menu > ul > li:nth-child(3) > a');
  }
  public async goToTShirtMenu(): Promise<void> {
    await browser.wait(protractor.ExpectedConditions.visibilityOf(this.tShirtMenu), 4000, 'Element still not visible');
    await this.tShirtMenu.click();
  }
}
