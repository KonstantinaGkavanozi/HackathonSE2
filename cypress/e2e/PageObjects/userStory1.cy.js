class AddProduct{


    chooseProduct(product){
        cy.get('.product-name')
        .should('contain', product);
    }

    increaseQuantity(product){

        // cy.get('input[xpath="1"]').eq(1)
        cy.contains('.product-name',product)
          .parent()
          .children('.product-name')
          .should('contain',product);
        };
        // cy.get('.increment')
        //   .parent()
        //   .parent()
        //   .children('.product-name')
        //   .should('contain','Brocolli');
    

    // decreaseQuantity(){

    // }

    addToCart(product){
        // cy.get('.product-name')
        //   .should('contain','Brocolli')
        //   .parent()
        //   .children('.product-action')
        //   .get('button[type="button"]').click();
        //   .within(() => {
        //     cy.get('.product-action button[type="button"]').click();
        // });

        cy.contains('.product-name',product)
          .parent()
        //   .children('.product-action')
          .within(() => {
            cy.get('.product-action button[type="button"]').click();
            });
        };
}


export default AddProduct;