import CompleteOrder from "./PageObjects/UserStory2"
import AddProduct from "./PageObjects/UserStory1";
describe('User Story 2', () => {

    beforeEach(() => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    })

    it('Complete order' , () => {

        cy.fixture('example').then((data) =>{
            const ln = new AddProduct();
            const ln1 = new CompleteOrder();

            ln.chooseProduct(data.product)
            ln.increaseQuantity(data.product);
            ln.addToCart(data.product);
            ln.openCart();
            ln1.click_proceedToCheckout();
            ln1.place_order();
            ln1.select_country(data.country);
            ln1.agreeToTerms();

        })

        
    })
})