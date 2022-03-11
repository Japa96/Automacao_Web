/// <reference types="cypress"/>

describe('Testes Settings Web', () =>{

    before(() => {
        cy.visit('http://192.168.202.135/eForms_NFCeSettingsWeb/#/login');
    })

    beforeEach(() => {
        cy.reload();
    })

    it('Login', () => {
        cy.get(':nth-child(1) > .login__input')
            .type('ndd')
            .should('have.value', 'ndd')
        
        cy.get(':nth-child(2) > .login__input')
            .should('be.visible')
            .type('ndd')

        cy.get('.btn')
            .click()

        cy.get('.navbar__brand-text > span', {timeout: 10000})
            .should('be.visible')
    })

    it('Logout', () => {
        cy.get(':nth-child(1) > .login__input')
            .type('ndd')
            .should('have.value', 'ndd')
        
        cy.get(':nth-child(2) > .login__input')
            .should('be.visible')
            .type('ndd')

        cy.get('.btn')
            .click()

        cy.get('.navbar__brand-text > span', {timeout: 10000})
            .should('be.visible')
        

        cy.get('#simple-dropdown')
            .click();

        cy.get(':nth-child(2) > .ndd-dropdown__option')
            .click()

        cy.get('.login__header-description > span')
            .should('be.visible')
            .and('contain', 'Nota fiscal do Consumidor Eletrônica | NFC-e | SAT | CF-e')
    })
})