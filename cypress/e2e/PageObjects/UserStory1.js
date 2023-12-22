class AddProduct{


    chooseProduct(product){
        cy.get('.product-name')
          .should('contain', product);
    }

    increaseQuantity(product){
        
        cy.contains('.product-name',product)
          .parent()
          .children('.product-name')
          .should('contain',product)
        };

    addToCart(product){

        cy.contains('.product-name',product)
          .parent()
          .within(() => {
            cy.get('.product-action button[type="button"]').click();
            });
        };

    openCart(){
      cy.get('img[alt="Cart"]').click();
    }
}


export default AddProduct;