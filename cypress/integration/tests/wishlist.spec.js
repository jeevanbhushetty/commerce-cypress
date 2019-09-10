/// <reference types="Cypress" />

context('Wishlist', () => {

    it('Add item', () => {
        cy.visit('/')
        cy.get('.top-menu li').first().click();
        cy.get('.category-page a').first().click();
        cy.get('.add-to-wishlist-button').first().click();
        cy.get('#product_attribute_3_7').check();
        cy.get('#add-to-wishlist-button-1').click();
        cy.get('.bar-notification').should('have.text', 'The product has been added to your wishlist');
        cy.get('[href="/wishlist"]').first().click();
        cy.get('.product-name').should('have.text', 'Build your own computer');
    })
});