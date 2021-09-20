describe('Notes feature', () => {
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

    it('renders notes correctly', () => {
        cy.visit('/notes');
        cy.findByText(/title/i).should('exist');
        cy.findByText(/content/i).should('exist');
    });

    it('allows user to add new note and delete it', () => {
        cy.visit('/notes');
        cy.findByText(/title/i).click().type('cypress note');
        cy.findByText(/content/i)
            .click()
            .type('This is my cypress note content');
        cy.findByText(/add/i).click();
        cy.findAllByText(/cypress note/i).should('exist');

        cy.findAllByText(/cypress note/i)
            .first()
            .parent()
            .findByLabelText(/delete/i)
            .click();

        cy.findAllByText(/cypress note/i).should('not.exist');
    });
});
