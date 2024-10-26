class Cadastro {
    preencherFormularioDeCadastro(usuario) {
        cy.get('input[type=radio]').check(usuario.genero)
    
        cy.get('[type=password]').type(usuario.senha, { log: false })
    
        cy.get('[data-qa="days"]').select(usuario.dataDeNascimento.dia);
        cy.get('[data-qa="months"]').select(usuario.dataDeNascimento.mes);
        cy.get('[data-qa="years"]').select(usuario.dataDeNascimento.ano);
    
        cy.get('input[type=checkbox]#newsletter').check();
        cy.get('input[type=checkbox]#optin').check();
    
        cy.get('[data-qa="first_name"]').type(usuario.nome);
        cy.get('[data-qa="last_name"]').type(usuario.sobrenome);
        cy.get('[data-qa="company"]').type(usuario.empresa);
        cy.get('[data-qa="address"]').type(usuario.endereco.endereco);
        cy.get('[data-qa="country"]').select(usuario.endereco.pais);
        cy.get('[data-qa="state"]').type(usuario.endereco.estado);
        cy.get('[data-qa="city"]').type(usuario.endereco.cidade);
        cy.get('[data-qa="zipcode"]').type(usuario.endereco.cep);
        cy.get('[data-qa="mobile_number"]').type(usuario.endereco.celular);
    
        cy.get('[data-qa="create-account"]').click();
    
        cy.url().should('includes', 'account_created');
        cy.get('[data-qa="account-created"]').should('be.visible');
    
        cy.get('[data-qa="continue-button"]').click();

        return this;
    };

    iniciarCadastro(usuario) {
        cy.get('[data-qa="signup-name"]').type(`${usuario.nome} ${usuario.sobrenome}`);
        cy.get('[data-qa="signup-email"]').type(usuario.email);
        cy.get('[data-qa="signup-button"]').click();

        return this;
    };

    verificarErroNoInicioDoCadastro() {
        cy.get('.signup-form form p').should('be.visible').and('contain', 'Email Address already exist!');
        
        return this;
    };

    verificarSeCadastroFoiConcluido(usuario) {
        cy.get('i.fa-user').parent().should('contain', `${usuario.nome} ${usuario.sobrenome}`);

        return this;
    };

    apagarCadastro() {
        cy.get('[href *="delete"]').click();
        cy.get('[data-qa="account-deleted"]').should('contain', 'Account Deleted!');
        cy.get('[data-qa="continue-button"]').click();

        return this;
    }
}

export default new Cadastro()