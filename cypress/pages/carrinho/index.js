class Carrinho {
    verCarrinho() {
        cy.contains('View Cart').click();
        cy.get('#cart_items').should('be.visible');

        return this;
    };

    verificarEnderecoDeEntrega(usuario) {
        cy.get('.heading').first().should('have.text', 'Address Details');
        cy.get('#address_delivery .address_title').should('contain', 'Your delivery address');
        cy.get('#address_delivery .address_firstname.address_lastname').should('contain', `${usuario.genero}. ${usuario.nome} ${usuario.sobrenome}`);
        cy.get('#address_delivery .address_address1.address_address2').eq(1).should('contain', usuario.endereco.endereco);
        cy.get('#address_delivery .address_city.address_state_name.address_postcode')
            .should('contain', usuario.endereco.cidade)
            .and('contain', usuario.endereco.estado)
            .and('contain', usuario.endereco.cep);
        cy.get('#address_delivery .address_country_name').should('contain', usuario.endereco.pais);
        cy.get('#address_delivery .address_phone').should('contain', usuario.endereco.celular);
    
        return this;
    };

    verificarEnderecoDeCobranca(usuario) {
        cy.get('.heading').first().should('have.text', 'Address Details');
        cy.get('#address_invoice .address_title').should('contain', 'Your billing address');
        cy.get('#address_invoice .address_firstname.address_lastname').should('contain', `${usuario.genero}. ${usuario.nome} ${usuario.sobrenome}`);
        cy.get('#address_invoice .address_address1.address_address2').eq(1).should('contain', usuario.endereco.endereco);
        cy.get('#address_invoice .address_city.address_state_name.address_postcode')
            .should('contain', usuario.endereco.cidade)
            .and('contain', usuario.endereco.estado)
            .and('contain', usuario.endereco.cep);
        cy.get('#address_invoice .address_country_name').should('contain', usuario.endereco.pais);
        cy.get('#address_invoice .address_phone').should('contain', usuario.endereco.celular);
        
        return this;
    };

    verificarPedidos() {
        cy.get('.heading').last().should('have.text', 'Review Your Order');
        cy.get('#cart_info').should('be.visible');

        return this;
    };

    preencherComentario(comentario) {
        cy.get('.form-control').type(comentario);

        return this;
    };

    preencherDadosDoCartao(cartao) {
        cy.get('[data-qa="name-on-card"]').type(cartao.nome);
        cy.get('[data-qa="card-number"]').type(cartao.numero);
        cy.get('[data-qa="cvc"]').type(cartao.cvc);
        cy.get('[data-qa="expiry-month"]').type(cartao.mesExpiracao);
        cy.get('[data-qa="expiry-year"]').type(cartao.anoExpiracao);
        cy.get('[data-qa="pay-button"]').click();
        
        return this;
    };

    realizarCheckout(usuario, comentario) {
        cy.get('.btn-default.check_out').should('be.visible');
        cy.get('.btn-default.check_out').click();
        this.verificarEnderecoDeEntrega(usuario);
        this.verificarEnderecoDeCobranca(usuario);
        this.verificarPedidos();
        this.preencherComentario(comentario);
        cy.get('.btn-default.check_out').click();
        this.preencherDadosDoCartao(usuario.cartao);
        cy.get('[data-qa="order-placed"]').should('be.visible').and('contain', 'Order Placed!');

        return this;
    };
};

export default new Carrinho();