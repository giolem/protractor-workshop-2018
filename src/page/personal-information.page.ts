import { element, by, ElementFinder, browser } from 'protractor';

interface PersonalInformation {
  firstName: string;
  lastName: string;
  sex: string;
  experience: number;
  profession: string[];
  tools: string[];
  continent: string;
  commands: string[];
}

export class PersonalInformationPage {
  private firstNameField: ElementFinder;
  private lastNameField: ElementFinder;
  private sendButton: ElementFinder;
  private pageTitleLabel: ElementFinder;

  constructor() {
    this.firstNameField =  element(by.css('input[name=firstname]'));
    this.lastNameField = element(by.css('input#lastname'));
    this.sendButton = element(by.css('#buttonwithclass'));
    this.pageTitleLabel = element(by.xpath('//*[@id="page"]/div[4]/div/div[1]/h1'));
  }

  private sexOption(name: string): ElementFinder {
    return element(by.css(`[name="sex"][value="${name}"]`));
  }

  private experienceOption(years: number): ElementFinder {
    return element(by.css(`[name="exp"][value="${years}"]`));
  }

  private professionOption(name: string): ElementFinder {
    return element(by.css(`[name="profession"][value="${name}"]`));
  }

  private toolsOption(name: string): ElementFinder {
    return element(by.css(`[name="tool"][value="${name}"]`));
  }

  private continentOption(name: string): ElementFinder {
    return element(by.id('continents')).element(by.cssContainingText('option', name));
  }

  private seleniumCommandOption(name: string): ElementFinder {
    return element(by.id('selenium_commands')).element(by.cssContainingText('option', name));
  }

  public async getPageTitle(): Promise<string> {
    return await this.pageTitleLabel.getText();
  }

  public async fillForm(form: PersonalInformation): Promise<void> {
    await browser.executeScript('window.scrollTo(0,300);');
    await this.firstNameField.sendKeys(form.firstName);
    await this.lastNameField.sendKeys(form.lastName);
    await this.sexOption(form.sex).click();
    await browser.executeScript('window.scrollTo(505,700);');
    await this.experienceOption(form.experience).click();

    for (const name of form.profession) {
      await browser.executeScript('window.scrollTo(505,881);');
      await this.professionOption(name).click();
    }

    for (const name of form.tools) {
      await browser.executeScript('window.scrollTo(0,800);');
      await this.toolsOption(name).click();
    }

    await this.continentOption(form.continent).click();

    for (const name of form.commands) {
      await browser.executeScript('window.scrollTo(0,500);');
      await this.seleniumCommandOption(name).click();
    }
  }

  public async submit(form: PersonalInformation): Promise<void> {
    await this.fillForm(form);
    await this.sendButton.click();
  }
}
