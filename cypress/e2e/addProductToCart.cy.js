import AddProduct from "./PageObjects/UserStory1";

describe('User Story 1', () => {

    beforeEach(() => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    })

    it('Add Product' , () => {

        cy.fixture('example').then((data) =>{
            const ln = new AddProduct();
            ln.chooseProduct(data.product)
            ln.increaseQuantity(data.product);
            ln.addToCart(data.product);
            ln.openCart();
        })

        
    })
})
