const dataAtual = new Date();
const timestamp = new Date().getTime();

import { fakerPT_BR as faker } from '@faker-js/faker';

const meses = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
];
const genero = ['Mr', 'Mrs'];

const usuario1 = {
    nome: faker.person.firstName(),
    sobrenome: faker.person.lastName(),
    genero: genero[Math.floor(Math.random() * genero.length)],
    email: `testandousuario1fcpm${timestamp + 10}@email.com`,
    senha: faker.internet.password(),
    dataDeNascimento: {
        dia: dataAtual.getDate().toString(),
        mes: meses[dataAtual.getMonth()],
        ano: (Math.floor(Math.random() * (2021 - 1900 + 1)) + 1900).toString()
    },
    empresa: faker.company.name(),
    endereco: {
        endereco: faker.location.streetAddress(),
        pais: 'United States',
        estado: faker.location.state(),
        cidade: faker.location.city(),
        cep: faker.location.zipCode(),
        celular: faker.phone.number()
    }
};

const usuario2 = {
    nome: faker.person.firstName(),
    sobrenome: faker.person.lastName(),
    genero: genero[Math.floor(Math.random() * genero.length)],
    email: `testandousuario2fcpm${timestamp + 10}@email.com`,
    senha: faker.internet.password(),
    dataDeNascimento: {
        dia: dataAtual.getDate().toString(),
        mes: meses[dataAtual.getMonth()],
        ano: (Math.floor(Math.random() * (2021 - 1900 + 1)) + 1900).toString()
    },
    empresa: faker.company.name(),
    endereco: {
        endereco: faker.location.streetAddress(),
        pais: 'United States',
        estado: faker.location.state(),
        cidade: faker.location.city(),
        cep: faker.location.zipCode(),
        celular: faker.phone.number()
    },
    cartao: {
        nome: '',
        numero: faker.finance.creditCardNumber(),
        cvc: faker.finance.creditCardCVV(),
        mesExpiracao: (Math.floor(Math.random() * (12 - 1 + 1)) + 1).toString(),
        anoExpiracao: (Math.floor(Math.random() * (9999 - dataAtual.getFullYear() + 1)) + 1).toString()
    }
};

usuario2.cartao.nome = usuario2.nome;

const usuarioExistente = {
    nome: 'Usuario',
    sobrenome: 'Especial de teste',
    email: 'testeespecificoespecial28072024@email.com',
    senha: '12345'
};

const usuarioDeContato = {
    nome: 'Tester',
    email: 'testeespecificoespecial28072024@email.com',
    assunto: 'Test Automation',
    mensagem: 'Learning Test Automation',
    nomeDoArquivo: 'example.json'
};

module.exports = {
    usuario1,
    usuario2,
    usuarioExistente,
    usuarioDeContato
};