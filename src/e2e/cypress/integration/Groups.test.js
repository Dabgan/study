describe('Groups feature', () => {
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

    it('renders groups correctly', () => {
        cy.visit('/group/A');
        cy.findByText(/group a/i).should('exist');
        cy.findByText(/change group/i).should('exist');
    });

    it('show list of students connected to particular group, click on student to open modal, then close modal and change group', () => {
        cy.visit('/group/A');
        cy.findByText(/group a/i);
        cy.findByText(/lonnie deckow/i).should('exist');
        cy.findByText(/javonte/i).click();
        cy.findByText(/average grades/i).should('exist');
        cy.findByText(/course/i).should('exist');
        cy.findByText(/close/i).click();
        cy.findByText(/change group/i).click();
        cy.findByText(/C/).click();
        cy.findByText(/save/i).click();
        cy.findByText(/caroline cummings/i).should('exist');
    });
});
