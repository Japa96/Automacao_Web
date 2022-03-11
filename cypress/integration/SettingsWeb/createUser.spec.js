/// <reference types="cypress"/>

describe('Settings Web - User', () => {

    before(() => {
        cy.visit('http://192.168.202.135/eForms_NFCeSettingsWeb/#/login')
    })

    beforeEach(() => {
        login()
        Cypress.Cookies.preserveOnce('session_id', 'remember_token');
    })

    const login = () => {
        cy.visit('http://192.168.202.135/eForms_NFCeSettingsWeb/#/login')
        cy.get(':nth-child(1) > .login__input')
            .type('ndd');
        
        cy.get(':nth-child(2) > .login__input')
            .type('ndd');
        
        cy.get('.btn')
            .click({timeout : 30000})
        
    }

    /*it('Login', () => {
        cy.get(':nth-child(1) > .login__input')
            .type('ndd')
            .should('have.value', 'ndd')
        
        cy.get(':nth-child(2) > .login__input')
            .should('be.visible')
            .type('ndd')

        cy.get('.btn')
            .click()

        cy.get('.navbar__brand-text > span', {timeout: 30000})
            .should('be.visible')
    })*/

    it('Create user', () =>{
        cy.get('.titlebar__main-title')
            .should('be.visible')
            .and('contain', 'Usuários')
        cy.get('.ndd-kendo-grid-header__actions > :nth-child(1)')
            .click()
        
        cy.get('.titlebar__main-title')
            .should('contain', 'Criar Usuário')
        
        cy.get('#name')
            .type('TESTES_AUTOMATIZADOS')
            .should('have.value', 'TESTES_AUTOMATIZADOS')

        cy.get('#password')
            .type('123')
            .should('have.value', '123')
        
        cy.get('#confirmPassword')
            .type('123')
            .should('have.value', '123')

        for(let z = 1; z <= 3; z++) {
            cy.get('section.ng-scope > .container > :nth-child(' + z + ') > .k-checkbox-label')
                .click()
        }

        cy.get('[index="1"] > .nav-link')
            .click()
            .should('have.text', 'Permissões e-Monitor')
            .and('be.visible')

        
        for (let i = 1; i <= 3; i++) {
            cy.get('.active > .ng-scope > :nth-child(1) > :nth-child(1) > .container > :nth-child(' + i + ') > .k-checkbox-label')
                .click()
        }

        for(let j = 1; j <= 9; j++) {
            cy.get('.active > .ng-scope > :nth-child(1) > :nth-child(2) > .container > :nth-child(' + j + ') > .k-checkbox-label')
            .click()
        }


        cy.get('[index="2"] > .nav-link')
            .click()
            .should('have.text', 'Permissões ColdWeb')
        
        cy.get('.active > .ng-scope > :nth-child(1) > :nth-child(1) > .container > :nth-child(1) > .k-checkbox-label')
            .click()

        cy.get('[style="margin-left:40px"] > .k-checkbox-label')
            .click()
        
        cy.get('.active > .ng-scope > :nth-child(1) > :nth-child(1) > .container > :nth-child(3) > .k-checkbox-label')
            .click()

        for(let y = 4; y <= 5; y++){
            cy.get(':nth-child(1) > .container > :nth-child(' + y + ') > .k-checkbox-label')
                .click()
        }

        
        for(let l = 1; l <= 3; l++){
            cy.get('.active > .ng-scope > :nth-child(1) > :nth-child(2) > .container > :nth-child(' + l +') > .k-checkbox-label')
                .click()
        }

        cy.get('#saveButtonId > .btn')
            .click()

        cy.get('.ngdialog-content > header')
            .should('be.visible')
            .and('have.text', 'Confirmação')

        cy.get('#ngdialog1-aria-describedby')
            .and('have.text', 'Usuário salvo com sucesso!')
        
        cy.get('.btn')
            .click()
        
    })

    it('Delete User', () => {
        cy.get('.ndd-filter__searchbar__input')
            .type('TESTES_AUTOMATIZADOS')
            .should('have.value', 'TESTES_AUTOMATIZADOS')
        
        cy.get('.ndd-filter__searchbar__input-icon > .fa')
            .click()

        cy.get('tbody > .ng-scope > :nth-child(2) > .ng-binding')
            .should('be.visible')
            .and('have.text', 'TESTES_AUTOMATIZADOS')

        cy.get('tbody > .ng-scope > :nth-child(2)')
            .click()
            
        cy.get('.ndd-kendo-grid-header__actions > :nth-child(3)')
            .should('be.visible')
            .and('have.text', '  Excluir ')
            .click()

        cy.get('.dialog-content')
            .should('be.visible')
            .and('have.text', '\n     Deseja realmente excluir o usuário TESTES_AUTOMATIZADOS? \n')
        
        cy.get('#dialog-action-confirm')
            .should('be.visible')
            .and('have.text', ' Sim ')
        
        cy.get('#dialog-action-cancel')
            .should('be.visible')
            .and('have.text', ' Não ')

        cy.get('#dialog-action-confirm')
            .click()
        
        cy.get('.k-grid-content')
            .should('not.have.text')
        
        cy.get('.ndd-filter__searchbar__input')
            .should('have.value', 'TESTES_AUTOMATIZADOS')

        cy.get('.ndd-filter__searchbar__input-icon > .fa')
            .should('be.visible')
            .click()
    })
})