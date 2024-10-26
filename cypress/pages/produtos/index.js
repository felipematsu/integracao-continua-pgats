class Produtos {
    verificarPaginaDeProdutos() {
        cy.url().should('contain', 'products');
        cy.get('.title').should('be.visible').and('contain', 'All Products');
        cy.get('.single-products').should('be.visible').and('have.length.at.least', 1);
        
        return this;
    };

    visualizarPrimeiroProduto() {
        cy.get('.single-products')
            .should('be.visible')
            .first()
            .parent()
            .contains('View Product')
            .click();

        return this;
    };

    verificarDetalhesDoProduto() {
        cy.get('.product-information > h2').should('be.visible')
        cy.get('.product-information p').should('be.visible').and('have.length', 4)
        cy.get('.product-information span span').should('be.visible')

        return this;
    }

    pesquisarProduto(produto) {
        cy.get('input#search_product').type(produto);
        cy.get('button#submit_search').click();

        return this;
    };

    verificarPaginaDeProdutosPesquisados() {
        cy.get('.features_items .title').should('be.visible').and('contain', 'Searched Products');

        return this;
    }

    verificarProdutosPesquisados(produto) {
        cy.get('.single-products')
            .should('be.visible')
            .and('contain', produto)
            .and('have.length.at.least', 1)

        return this;
    };

    adicionarUmProdutoNoCarrinho() {
        cy.contains('Add to cart').click()
        cy.get('#cartModal .text-center').eq(0).should('contain', 'Your product has been added to cart.');

        return this;
    };
};

export default new Produtos();