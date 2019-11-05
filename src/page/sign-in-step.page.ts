import { $, ElementFinder } from 'protractor';

export class SignInStepPage {
  private email: ElementFinder;
  private password: ElementFinder;
  private clickButtom: ElementFinder;

  constructor () {
    this.email = $('#email');
    this.password = $('#passwd');
    this.clickButtom = $('#SubmitLogin > span');

  }

  public async goToSignInStepPage(): Promise<void> {
    await this.email.sendKeys('aperdomobo@gmail.com');
    await this.password.sendKeys('WorkshopProtractor');
    await this.clickButtom.click();
  }
}
