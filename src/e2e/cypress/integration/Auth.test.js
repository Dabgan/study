describe('Study buddy app', () => {
    it('Renders Unauthenticated App', () => {
        cy.visit('/');
        cy.findByText(/login/i).should('exist');
    });

    it('Allows user to login', () => {
        cy.visit('/');
        cy.findByText(/login/i).should('exist');
        cy.findByText(/login/i).click().type('teacher@studybuddy.com');
        cy.findByText(/password/i).should('exist');
        cy.findByText(/password/i)
            .click()
            .type('1234');
        cy.findByText(/sign in/i).click();
        cy.findByText(/logged as/i).should('exist');
    });
});
