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
    await menuContentPage.goToTShirtMenu();
    await orderSummaryPage.goToOrderSummaryPage();
    await productAddedModalPage.goToProductAddedModalPage();
    await summaryStepPage.goToSummaryStepPage();
    await signInStepPage.goToSignInStepPage();
    await addressStepPage.goToAdressStepPage();
    await shippingStepPage.goToShippingStepPage();
    await bankPaymentPage.goToBankPaymentPage();
    await paymentStepPage.goToPaymentStepPage();

    await expect($('#center_column > div > p > strong').getText())
      .toBe('Your order on My Store is complete.');
  });

});
