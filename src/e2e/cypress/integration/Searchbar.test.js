describe('searchbar feature', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.findByText(/login/i).should('exist');
        cy.findByText(/login/i).click().type('teacher@studybuddy.com');
        cy.findByText(/password/i).should('exist');
        cy.findByText(/password/i)
            .click()
            .type('1234');
        cy.findByText(/sign in/i).click();
    });

    it('renders searchbar correctly', () => {
        cy.visit('/group');
        cy.findByPlaceholderText(/search/i).should('exist');
    });

    it('types name of stundet in searchbar and finds it', () => {
        cy.visit('/group');
        cy.findByPlaceholderText(/search/i)
            .click()
            .type('cum');
        cy.findByText(/caroline cummings/i).click();
    });
});
