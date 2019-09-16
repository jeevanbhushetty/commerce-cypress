/// <reference types="Cypress" />

context('Login form validation', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('.ico-login').click();
    })

    it('empty credentials', () => {
        cy.get('.login-button').click();
        cy.get('#Email-error').should('have.text', 'Please enter your email');
    })

    it('Invalid credential', () => {
        cy.get('#Email').type('invalid@address.com');
        cy.get('#Password').type('invalidpassword');
        cy.get('.login-button').click();
        cy.get('.validation-summary-errors')
            .should('have.text', 
                'Login was unsuccessful. Please correct the errors and try again.No customer account found\n');
    })
});