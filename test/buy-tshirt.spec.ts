import { $, browser } from 'protractor';
import { MenuContentPage, SignInStepPage, AddressStepPage, ShippingStepPage, BankPaymentPage,
  PaymentStepPage, SummaryStepPage, ProductAddedModalPage, OrderSummaryPage } from '../src/page';

describe('Buy a t-shirt', () => {
  const menuContentPage: MenuContentPage = new MenuContentPage();
  const signInStepPage: SignInStepPage = new SignInStepPage();
  const addressStepPage: AddressStepPage = new AddressStepPage();
  const shippingStepPage: ShippingStepPage = new ShippingStepPage();
  const bankPaymentPage : BankPaymentPage = new BankPaymentPage();
  const paymentStepPage : PaymentStepPage = new PaymentStepPage();
  const summaryStepPage : SummaryStepPage = new SummaryStepPage();
  const productAddedModalPage : ProductAddedModalPage = new ProductAddedModalPage();
  const orderSummaryPage : OrderSummaryPage = new OrderSummaryPage();

  it('then should be bought a t-shirt', async () => {
    await browser.get('http://automationpractice.com/');
    await(browser.sleep(3000));
    await menuContentPage.goToTShirtMenu();
    await(browser.sleep(3000));
    orderSummaryPage.goToOrderSummaryPage();
    await(browser.sleep(3000));
    productAddedModalPage.goToProductAddedModalPage();
    await(browser.sleep(3000));
    summaryStepPage.goToSummaryStepPage();
    await(browser.sleep(3000));
    await signInStepPage.goToSignInStepPage();
    await(browser.sleep(3000));
    await addressStepPage.goToAdressStepPage();
    await(browser.sleep(3000));
    await shippingStepPage.goToShippingStepPage();
    await(browser.sleep(3000));
    bankPaymentPage.goToBankPaymentPage();
    await(browser.sleep(3000));
    paymentStepPage.goToPaymentStepPage();
    await(browser.sleep(3000));

    await expect($('#center_column > div > p > strong').getText())
      .toBe('Your order on My Store is complete.');
  });

});
