/// <reference types="Cypress" />

context('Cart', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Adding product to the cart from homepage and checkout.', () => {
        cy.get('[value="Add to cart"]')
          .first()
          .click();

        cy.get('#product_attribute_3_7')
          .check();

        cy.get('#add-to-cart-button-1')
          .click();  

        cy.get('.bar-notification')
            .should('have.text', 'The product has been added to your shopping cart');

        cy.get('.bar-notification a').click();

        cy.get('.country-input').select('India');
        cy.get('.zip-input').type('411026');
        cy.get('#termsofservice').check();
        cy.get('#checkout').click();
        cy.get('.checkout-as-guest-button').click();
        cy.get('#BillingNewAddress_FirstName').type('Smith');
        cy.get('#BillingNewAddress_LastName').type('John');
        cy.get('#BillingNewAddress_Email').type('test@test.com');
        cy.get('#BillingNewAddress_Company').type('Test Company');
        cy.get('#BillingNewAddress_CountryId').select('India');
        cy.get('#BillingNewAddress_City').type('ABCD');
        cy.get('#BillingNewAddress_Address1').type('ABCD');
        cy.get('#BillingNewAddress_Address2').type('ABCD');
        cy.get('#BillingNewAddress_ZipPostalCode').type('411026');
        cy.get('#BillingNewAddress_PhoneNumber').type('123456789');
        cy.get('#BillingNewAddress_FaxNumber').type('123456');
        cy.get('[value="Continue"').first().click();
        cy.get('#shippingoption_1').check();
        cy.get('.shipping-method-next-step-button').click();
        cy.get('.payment-method-next-step-button').click();
        cy.get('.payment-info-next-step-button').click();
        cy.get('.confirm-order-next-step-button').click();
        cy.get('.order-completed .title')
            .first()
            .should('have.text', 'Your order has been successfully processed!');
    })
});