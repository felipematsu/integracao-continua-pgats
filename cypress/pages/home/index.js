class Home {
    inscreverEmail(email) {
        cy.get('input#susbscribe_email').scrollIntoView().type(email);
        cy.get('button#subscribe').click();

        return this;
    };

    verificarSeInscricaoFoiRealizadaComSucesso() {
        cy.contains('You have been successfully subscribed!').should('be.visible');

        return this;
    };
};

export default new Home();