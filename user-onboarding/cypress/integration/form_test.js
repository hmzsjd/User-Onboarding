
describe('User Onboarding App', () => {
    beforeEach(() => {
        // Need fresh state
        // don't want to rely on state leftover from previous test
        // every test should rely on isolation
        cy.visit('http://localhost:3000');
    })


    // Getters to cut down timing
    // Cypress not searches the code it looks at the DOM, the rendered page
    // Thats why we dont have to import any form elements

    const firstNameInput = () => cy.get('input[name=first_name]'); 
    const lastNameInput = () => cy.get('input[name=last_name]'); 
    const passInput = () => cy.get('input[name=password]'); 
    const emailInput = () => cy.get('input[name=email]'); 

    const tosCheckbox = () => cy.get('input[type=checkbox]'); 

    const submitButton = () => cy.get("button[id='submit']")

    const fNameErr = () => cy.get("div[id='fNameError']")

    

    // Writing tests - every test in cy starts with it()

    it('Make sure test work', () => {
        // inside of tests are assertions
        // "except" is one of them
        expect(1+2).to.equal(3);
        expect(2+2).not.to.equal(5);


        expect({}).not.to.equal({});
        // strict equality - objects are by reference - same as ===

        expect({}).to.eql({});
        // not strict equality - same as ==
    });


    // Check First and Last Name Inputs

    it("First and Last Name Working", () => {

        //sets input
        firstNameInput().type("John");
        lastNameInput().type("Smith");

        //checks if input matches
        firstNameInput().should("have.value","John");
        lastNameInput().should("have.value","Smith");

    });


    // Check Email

    it("Email Working", () => {

        //sets input
        emailInput().type("jsmith@gmail.com");

        //checks if input matches
        emailInput().should("have.value","jsmith@gmail.com");

    });

    // Check Password

    it("Password Working", () => {

        //sets input
        passInput().type("hunter22");

        //checks if input matches
        passInput().should("have.value","hunter22");

    });

    // Checkbox click

    it("Checkbox Working", () => {
        tosCheckbox().check();
    });
    
    // Check submit button works after input is valid
    it("Submit enabled after all inputs valid", () => {
            firstNameInput().type("John");
            lastNameInput().type("Smith");
            emailInput().type("jsmith@gmail.com");
            passInput().type("hunter22");
            tosCheckbox().check();

            
            
            submitButton().should("not.be.disabled");
       
        })

    // Yup validation messages showing

    it("Yup validation messages showing", () => {
        firstNameInput().type("j");
        lastNameInput().type("Smith");
        emailInput().type("jsmith@gmail.com");
        passInput().type("hunter22");
        tosCheckbox().check();

        fNameErr().should("have.text","First name must be greater than 3 characters.");
        

        
    });


    




//     //still inside top level describe()

//     describe('Input and Button Testing', () => {
//         // Can use optional describe blocks to org and group tests
    
//         // Can we navigate to URL?

//         it('can nav to URL', () => {
//             cy.url().should('include', 'localhost');
//         });


//         // Submit should start out disabled

//         it('submit starts out disabled', () => {
//             submitBtn().should('be.disabled');
//         });

//         // Test that you can type in inputs 

//         it('can type in the inputs', () => {
//             textInput()
//             .should("have.value", "")
//             .type("Testing Input!")
//             .should("have.value", "Testing Input!")
            
//             authorInput()
//             .should("have.value", "")
//             .type("Testing Author!")
//             .should("have.value", "Testing Author!")


//         });


//         // Test that submit button is clickable after entering all inputs

//         it("Submit enabled after both inputs filled", () => {
//             textInput().type("Quote Test");
//             authorInput().type("Author Test");
//             submitBtn().should("not.be.disabled");
//         })


//         // Test if cancel button removes text and disable submit buttn

//         it("Cancel button resets input and disabled submit button", () => {
//             textInput().type("Quote Test");
//             authorInput().type("Author Test");
//             cancelBtn().click();
//             textInput().should("have.value","");
//             authorInput().should("have.value","");
//             submitBtn().should("be.disabled");
//         })

//     });


//     // Still inside top-level describe

//     describe("Testing New Quotes Addition", () => {

//         it('can submit and delete new quotes', () => {

//             // because we are using backend db we have to test with the same input,
//             // each time so we can have a standard testing procedure
//             // So once we add then we will delete it after test is done

//             textInput().type("Quotes Test");
//             authorInput().type("Author Test");
//             submitBtn().click();
//             // added a quote ^

//             cy.contains("Quotes Test")
//             .siblings('button:nth-of-type(2)') // get 2nd button which is delete
//             // in DOM there are two buttons next to div of quote so we use sibling ^
//             .click();
//             // deletes the added quote ^

//             cy.contains("Quotes Test").should("not.exist");
//             // verified that it is deleted



//         })


//         it('Another way to add a quote', () => {

//             cy.contains("Quotes Test").should("not.exist");
//             // Make sure earlier above is cleaned up ^


//             textInput().type("Quotes Test");
//             authorInput().type("Author Test");
//             submitBtn().click();
//             // added quote element ^

//             cy.contains(/author test/i).should("exist");
//             // Makes it case insensitive will look for any variation of capitalization


//             cy.contains("Author Test").next().next().click();
//             // Next to each quote div are two buttons in the DOM so next.next grabs the delete

//             cy.contains("Author Test").should("not.exist");
//             cy.contains("Quotes Test").should("not.exist");

//             // Checks that delete button has been clicked and both inputs are removed. 




//         })
//     })
    
//     // Still in top level domain
//     describe("Editing an existing quote", () => {

//         it("can edit a quote", () => {


//             textInput().type("Quotes Test");
//             authorInput().type("Author Test");
//             submitBtn().click();
//             // new quote added ^

//             cy.contains("Quotes Test")
//             .siblings('button:nth-of-type(1)') //grabs edit button
//             .click();

//             textInput().should("have.value", "Quotes Test");
//             authorInput().should("have.value", "Author Test");
//             // checks to see if the the initial values exist if editing 

//             textInput().type(" EDITED QUOTE");
//             authorInput().type(" EDITED AUTHOR");
//             submitBtn().click();
//             // edited quote

//             cy.contains("Quotes Test EDITED QUOTE");



//             // Always remove what you changed

//             cy.contains("Quotes Test").next().next().click();
//             cy.contains(" EDITED QUOTE").should("not.exist");



            




//         })

//     })


    

}) // end of top level domain