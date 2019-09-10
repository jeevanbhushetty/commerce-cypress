/// <reference types="Cypress" />

context('Recently Viewed', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Checking recently viewed items are listed.', () => {
        var expectedName;
        var actualName;
        cy.get('.top-menu li').first().click();
        cy.get('.category-page a').first().click();
        cy.get('.item-box:nth-child(1) .product-title').then(($item) => {
            expectedName = $item.text();
        }).find('a').click();
        cy.get('[href="/recentlyviewedproducts"]').click();
        cy.get('.item-box:nth-child(1) .product-title').then(($item) => {
            actualName = $item.text();
            expect(actualName).to.equals(expectedName);
        });
    });
    
});