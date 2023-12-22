describe('Shopping Cart and Checkout Flow', () => {
    it('Should navigate to checkout, place an order, and verify success message', () => {


        // Visit the initial page
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/');
        
        // Click on the cart icon
        cy.get('a.cart-icon').click();

        // Check if the cart preview is visible before proceeding
        cy.get('div.cart-preview.active').should('be.visible');

        // Click on the "PROCEED TO CHECKOUT" button
        cy.get('div.action-block button[class=" "]').contains('PROCEED TO CHECKOUT').click();

        // Check if redirected to the cart page
        cy.url().should('include', '/cart');

        // Check if the "Place Order" button is present
        cy.get('button:contains("Place Order")').should('exist');

        // Click on the "Place Order" button
        cy.contains('button', 'Place Order').click();

        // Check if redirected to the country page
        cy.url().should('include', '/country');

        // Click the checkbox with class "chkAgree"
        cy.get('input.chkAgree[type="checkbox"]').check();

        // Click the "Proceed" button
        cy.contains('button', 'Proceed').click();

        // Verify the success message
        cy.get('span[style="color: green; font-size: 25px;"]').should('be.visible').and('contain.text', 'Thank you, your order has been placed successfully');

        // Verify the presence of the Home link in the success message
        cy.get('span[style="color: green; font-size: 25px;"] a[href="#/"]').should('be.visible');
    });
});