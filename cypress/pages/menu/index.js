import cadastro from "../cadastro";
import login from "../login";
import contato from "../contato";
import produtos from "../produtos";
import home from "../home";

class Menu {
    menus = {
        PRODUTOS: 'Products',
        SIGNUP: 'Signup',
        LOGIN: 'Login',
        CONTATO: 'Contact us',
        HOME: 'Home'
    }

    irParaMenu(menu) {
        cy.contains(menu).click();
        if (menu == this.menus.SIGNUP) {
            return cadastro;
        } else if (menu == this.menus.LOGIN) {
            return login;
        } else if (menu == this.menus.CONTATO) {
            return contato;
        } else if (menu == this.menus.PRODUTOS) {
            return produtos;
        } else if (menu == this.menus.HOME) {
            return home;
        }
    }
};

export default new Menu()