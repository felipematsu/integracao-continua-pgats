class Contato {
    verificarPaginaDeContato() {
        cy.get('.contact-form h2').should('be.visible').and('have.text', 'Get In Touch');
        
        return this;
    };

    preencherFormularioDeContato(contato) {
        cy.get('[data-qa="name"]').type(contato.nome);
        cy.get('[data-qa="email"]').type(contato.email);
        cy.get('[data-qa="subject"]').type(contato.assunto);
        cy.get('[data-qa="message"]').type(contato.mensagem);
        cy.fixture(contato.nomeDoArquivo).as('arquivo');
        cy.get('input[name="upload_file"]').selectFile('@arquivo');
        cy.get('[data-qa="submit-button"]').click();
        
        return this;
    };

    verificarEnvioComSucessoDeContato() {
        cy.get('.status').should('have.text', 'Success! Your details have been submitted successfully.');

        return this;
    };
 }

export default new Contato();