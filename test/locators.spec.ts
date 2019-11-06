import { browser } from 'protractor';
import { PersonalInformationPage } from '../src/page';

describe('Open shopping page', () => {
  beforeAll(async () => {
    await browser.get('http://toolsqa.com/automation-practice-form/');
  });

  describe('Filling first field', () => {
    const fillFieldName: PersonalInformationPage = new PersonalInformationPage();
    fillFieldName.fillField();

    it('then should have a title', async () => {
      await expect(browser.getTitle()).toEqual('Demo Form for practicing Selenium Automation');
    });

  });

});
