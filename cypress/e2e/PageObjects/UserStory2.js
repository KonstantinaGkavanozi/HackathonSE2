class CompleteOrder{

    click_proceedToCheckout(){
        cy.get('div.action-block button[class=" "]').contains('PROCEED TO CHECKOUT').click();
    }

    place_order(){
        // Check if redirected to the cart page
        cy.url().should('include', '/cart');
        // Click on the "Place Order" button
        cy.contains('button', 'Place Order').click();
    }

    select_country(country){
        cy.get('select').select(country).should('have.value', country)
    }

    agreeToTerms(){
        // Click the checkbox with class "chkAgree"
        cy.get('input.chkAgree[type="checkbox"]').check();
        // Click the "Proceed" button
        cy.contains('button', 'Proceed').click();
    }
    


}

export default CompleteOrder;