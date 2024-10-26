class Login {
    realizarLogin(usuario, senha) {
        cy.get('[data-qa="login-email"]').type(usuario)
        cy.get('[data-qa="login-password"]').type(senha, { log: false })
    
        cy.get('[data-qa="login-button"]').click();

        return this;
    };

    verificarLoginComSucesso(usuario) {
        cy.get('i.fa-user').parent().should('contain', `Logged in as ${usuario}`);

        return this;
    };

    verificarLoginComErro() {
        cy.get(`.login-form form p`).should('contain', 'Your email or password is incorrect!');

        return this;
    };

    realizarLogout() {
        cy.contains('Logout').click();
       
        return this;
    };

    verificarLogoutComSucesso() {
        cy.url().should('contain', 'login');
        cy.get('.nav.navbar-nav').should('contain', 'Signup / Login');
        cy.get('.login-form').should('contain', 'Login to your account');

        return this;
    }
}

export default new Login()