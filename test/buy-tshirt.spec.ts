import { $, browser } from 'protractor';
import { MenuContentPage, SignInStepPage, AddressStepPage, ShippingStepPage, BankPaymentPage,
  PaymentStepPage, SummaryStepPage, ProductAddedModalPage, OrderSummaryPage } from '../src/page';

describe('Open shopping page', () => {
  beforeAll(async () => {
    await browser.get('http://automationpractice.com/');
  });

  describe('Buying a Tshirt', () => {
    beforeAll(async () => {
      const menuContentPage: MenuContentPage = new MenuContentPage();
      const orderSummaryPage : OrderSummaryPage = new OrderSummaryPage();
      const productAddedModalPage : ProductAddedModalPage = new ProductAddedModalPage();
      const summaryStepPage : SummaryStepPage = new SummaryStepPage();
      await menuContentPage.goToTShirtMenu();
      await orderSummaryPage.goToOrderSummaryPage();
      await productAddedModalPage.goToProductAddedModalPage();
      await summaryStepPage.goToSummaryStepPage();
    });

    describe('Login to the application', () => {
      beforeAll(async () => {
        const signInStepPage: SignInStepPage = new SignInStepPage();
        await signInStepPage.goToSignInStepPage();
      });

      describe('Selecting default address', () => {
        beforeAll(async () => {
          const addressStepPage: AddressStepPage = new AddressStepPage();
          await addressStepPage.goToAdressStepPage();
        });

        describe('Paying to the bank', () => {
          beforeAll(async () => {
            const shippingStepPage: ShippingStepPage = new ShippingStepPage();
            const bankPaymentPage : BankPaymentPage = new BankPaymentPage();
            const paymentStepPage : PaymentStepPage = new PaymentStepPage();

            await shippingStepPage.goToShippingStepPage();
            await bankPaymentPage.goToBankPaymentPage();
            await paymentStepPage.goToPaymentStepPage();
            it('then should be bought a t-shirt', async () => {
              await expect($('#center_column > div > p > strong').getText())
             .toBe('Your order on My Store is complete.');
            });
          });
        });
      });
    });
  });
});
