/// <reference types="cypress" />

import menu from '../pages/menu';
import produtos from '../pages/produtos';
import carrinho from '../pages/carrinho';
import cadastro from '../pages/cadastro';

const tiposDeUsuarios = require('../fixtures/usuarios.js');

describe('Automation Exercise', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Test Case 1: Cadastrar um usuário', () => {
    menu
      .irParaMenu('Signup')
      .iniciarCadastro(tiposDeUsuarios.usuario1)
      .preencherFormularioDeCadastro(tiposDeUsuarios.usuario1)
      .verificarSeCadastroFoiConcluido(tiposDeUsuarios.usuario1)
      .apagarCadastro();
  });

  // Obs: no caso de teste está dizendo para apagar a conta ao final, porém não o farei para utilizar o dado cadastrado
  it('Test Case 2: Login User with correct email and password', () => {
    menu
      .irParaMenu('Login')
      .realizarLogin(tiposDeUsuarios.usuarioExistente.email, tiposDeUsuarios.usuarioExistente.senha)
      .verificarLoginComSucesso(`${tiposDeUsuarios.usuarioExistente.nome} ${tiposDeUsuarios.usuarioExistente.sobrenome}`);
  });

  it('Test Case 3: Login User with incorrect email and password', () => {
    menu
      .irParaMenu('Login')
      .realizarLogin('tester-1721346302730@mail.com', '54321')
      .verificarLoginComErro();
  });

  it('Test Case 4: Logout User', () => {
    menu
      .irParaMenu('Login')
      .realizarLogin(tiposDeUsuarios.usuarioExistente.email, tiposDeUsuarios.usuarioExistente.senha)
      .verificarLoginComSucesso(`${tiposDeUsuarios.usuarioExistente.nome} ${tiposDeUsuarios.usuarioExistente.sobrenome}`)
      .realizarLogout()
      .verificarLogoutComSucesso();
  });

  it('Test Case 5: Register User with existing email', () => {
    menu
      .irParaMenu('Signup')
      .iniciarCadastro(tiposDeUsuarios.usuarioExistente)
      .verificarErroNoInicioDoCadastro();
  });

  it('Test Case 6: Contact Us Form', () => {
    menu
      .irParaMenu('Contact us')
      .verificarPaginaDeContato()
      .preencherFormularioDeContato(tiposDeUsuarios.usuarioDeContato)
      .verificarEnvioComSucessoDeContato();
  });

  it('Test Case 8: Verify All Products and product detail page', () => {
    menu
      .irParaMenu('Products')
      .verificarPaginaDeProdutos()
      .visualizarPrimeiroProduto()
      .verificarDetalhesDoProduto();
  });

  it('Test Case 9: Search Product', () => {
    const produto = 'Shirt';

    menu      
      .irParaMenu('Products')
      .verificarPaginaDeProdutos()
      .pesquisarProduto(produto)
      .verificarPaginaDeProdutosPesquisados()
      .verificarProdutosPesquisados(produto);
  });

  it('Test Case 10: Verify Subscription in home page', () => {
    menu
      .irParaMenu('Home')
      .inscreverEmail(tiposDeUsuarios.usuarioDeContato.email)
      .verificarSeInscricaoFoiRealizadaComSucesso();
  });

  it('Test Case 15: Place Order: Register before Checkout', () => {
    menu
      .irParaMenu('Signup')
      .iniciarCadastro(tiposDeUsuarios.usuario2)
      .preencherFormularioDeCadastro(tiposDeUsuarios.usuario2)
      .verificarSeCadastroFoiConcluido(tiposDeUsuarios.usuario2);
      
    produtos
      .adicionarUmProdutoNoCarrinho();
    
    carrinho
      .verCarrinho()
      .realizarCheckout(tiposDeUsuarios.usuario2, 'Favor entregar em caixa de papelão');

    cadastro
      .apagarCadastro();
  });
});