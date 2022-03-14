/// <reference types="cypress"/>

describe('Settings Web - Connections', () => {

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


    it('Entry Connection', () => {
    
        cy.xpath('/html/body/ui-view/layout/sidebar/aside/nav[1]/div/ul/li[1]/div/div/span')
            .click()

        cy.get('[title="Entrada"]')
            .should('be.visible')
            .click()
        
        cy.get('.titlebar__main-title')
            .should('have.text', 'Conexão de Entrada')

        cy.get('.ndd-kendo-grid-header__actions > :nth-child(1)')
            .click()
        
        cy.get('.titlebar__main-title')
            .should('be.visible')
            .and('have.text', 'Criar Conexão de Entrada')

        cy.get('#name')
            .type('ENTRADA_TESTES_AUTOMATIZADOS')
            .should('have.value', 'ENTRADA_TESTES_AUTOMATIZADOS')

        cy.get('[ng-click="ctrl.showData = !ctrl.showData"] > .btn')
            .should('be.visible')
            .click()

        cy.get('.n-editor-group-label > :nth-child(1)')
            .should('be.visible')
            .and('contain.text', ' SQL Server')

        cy.get('.n-editor-group-label > :nth-child(2)')
            .should('be.visible')
            .and('contain.text', ' Oracle')

        cy.get('.n-editor-group-label > :nth-child(1) > .ng-pristine')
            .should('be.checked')
        
        cy.get('.n-editor-group-label > :nth-child(2) > .ng-pristine')
            .should('not.be.checked')
            .click()
            .should('be.checked')
        
        cy.get('.n-editor-group-label > :nth-child(1) > .ng-pristine')
            .should('not.be.checked')
            .click()
        
        for(let i = 2; i <= 5; i++){
            cy.get(':nth-child(' + i + ') > .ng-isolate-scope > .validateLabel')
                .should('be.visible')
        }        

        cy.get(':nth-child(2) > .form-control')
            .should('be.visible')
            .and('not.have.text')
            .type('192.168.202.135')
            .should('have.value', '192.168.202.135')
        
        cy.get(':nth-child(3) > .form-control')
            .should('be.visible')
            .and('not.have.text')
            .type('NDD_CONNECTOR_NFCe')
            .should('have.value', 'NDD_CONNECTOR_NFCe')
        
        cy.get('.cnConnectionStringData > :nth-child(4) > .form-control')
            .should('be.visible')
            .and('not.have.text')
            .type('sa')
            .should('have.value', 'sa')
        
        cy.get(':nth-child(5) > .form-control')
            .should('be.visible')
            .and('not.have.text')
            .type('ndd@2104')
            .should('have.value', 'ndd@2104')

        cy.get(':nth-child(6) > .form-control')
            .should('be.visible')
            .and('not.have.text')

        cy.get('[style="margin-top:10px;text-align:right"] > .btn')
            .should('be.visible')
            .click()
            .should('not.be.visible')

        cy.get('#tableName')
            .should('be.visible')
            .and('not.have.text')
            .type('TBDATABASEINPUTAUTO')

        
        cy.get('#generateTableButtonId > .btn')
            .should('be.visible')
            .and('have.text', 'Gerar Tabela')
            .click()

        
        cy.get('#ngdialog1-aria-labelledby')
            .should('be.visible')
            .and('have.text', 'Confirmação')

        
        cy.get('#ngdialog1-aria-describedby')
            .should('be.visible')
            .and('have.text', 'Tabela criada com sucesso!')

        cy.get('.footer-actions > .btn')
            .should('be.visible')
            .and('have.text', 'ok')
            .click()

        cy.get('#saveButtonId > .btn')
            .should('be.visible')
            .and('have.text', 'Gravar')
            .click()

        cy.get('#ngdialog2-aria-labelledby')
            .should('be.visible')
            .and('have.text', 'Confirmação')

        cy.get('#ngdialog2-aria-describedby')
            .should('be.visible')
            .and('have.text', 'Conexão de Entrada salva com sucesso!')

        cy.get('.btn')
            .should('be.visible')
            .and('have.text', 'ok')
            .click()

        cy.get('.ndd-filter__searchbar__input')
            .should('be.visible')
            .type('ENTRADA_TESTES_AUTOMATIZADOS')
            .should('have.value', 'ENTRADA_TESTES_AUTOMATIZADOS')

        cy.get('.ndd-filter__searchbar__input-icon > .fa')
            .should('be.visible')
            .click()

        cy.get('tbody > .ng-scope > :nth-child(2) > .ng-binding')
            .should('be.visible')
            .and('have.text', 'ENTRADA_TESTES_AUTOMATIZADOS')
            .click()

        cy.get('.ndd-kendo-grid-header__actions > :nth-child(3)')
            .should('be.visible')
            .and('have.text', '  Excluir ')
            .click()

        cy.get('#ngdialog3-aria-labelledby')
            .should('be.visible')
            .and('have.text', ' Confirmação ')

        
        cy.get('#ngdialog3-aria-describedby')
            .should('be.visible')
            .and('have.text', ' Deseja realmente excluir a Conexão de Entrada ENTRADA_TESTES_AUTOMATIZADOS? ')

        cy.get('#dialog-action-cancel')
            .should('be.visible')
            .and('have.text', ' Não ')
            .click()

        
            cy.get('.ndd-kendo-grid-header__actions > :nth-child(3)')
            .should('be.visible')
            .and('have.text', '  Excluir ')
            .click()

        cy.get('#ngdialog4-aria-labelledby')
            .should('be.visible')
            .and('have.text', ' Confirmação ')

        
        cy.get('#ngdialog4-aria-describedby')
            .should('be.visible')
            .and('have.text', ' Deseja realmente excluir a Conexão de Entrada ENTRADA_TESTES_AUTOMATIZADOS? ')


        cy.get('#dialog-action-confirm')
            .should('be.visible')
            .and('have.text', ' Sim ')
            .click()


        cy.get('.ndd-filter__searchbar__input')
            .should('be.visible')
            .and('have.value', 'ENTRADA_TESTES_AUTOMATIZADOS')

        cy.get('.k-grid-content')
            .should('not.have.text')

        cy.get('.ndd-filter__searchbar__input-icon > .fa')
            .should('be.visible')
            .click()



        // Criando Conexão Permanente

        cy.get('.ndd-kendo-grid-header__actions > :nth-child(1)')
            .click()
        
        cy.get('.titlebar__main-title')
            .should('be.visible')
            .and('have.text', 'Criar Conexão de Entrada')


        cy.get('#name')
        .type('ENTRADA_TESTES_AUTOMATIZADOS')
        .should('have.value', 'ENTRADA_TESTES_AUTOMATIZADOS')

        cy.get('[ng-click="ctrl.showData = !ctrl.showData"] > .btn')
            .should('be.visible')
            .click()

        cy.get('.n-editor-group-label > :nth-child(1)')
            .should('be.visible')
            .and('contain.text', ' SQL Server')

        cy.get('.n-editor-group-label > :nth-child(2)')
            .should('be.visible')
            .and('contain.text', ' Oracle')

        cy.get('.n-editor-group-label > :nth-child(1) > .ng-pristine')
            .should('be.checked')
        
        cy.get('.n-editor-group-label > :nth-child(2) > .ng-pristine')
            .should('not.be.checked')
            .click()
            .should('be.checked')
        
        cy.get('.n-editor-group-label > :nth-child(1) > .ng-pristine')
            .should('not.be.checked')
            .click()
        
        for(let i = 2; i <= 5; i++){
            cy.get(':nth-child(' + i + ') > .ng-isolate-scope > .validateLabel')
                .should('be.visible')
        }        

        cy.get(':nth-child(2) > .form-control')
            .should('be.visible')
            .and('not.have.text')
            .type('192.168.202.135')
            .should('have.value', '192.168.202.135')
        
        cy.get(':nth-child(3) > .form-control')
            .should('be.visible')
            .and('not.have.text')
            .type('NDD_CONNECTOR_NFCe')
            .should('have.value', 'NDD_CONNECTOR_NFCe')
        
        cy.get('.cnConnectionStringData > :nth-child(4) > .form-control')
            .should('be.visible')
            .and('not.have.text')
            .type('sa')
            .should('have.value', 'sa')
        
        cy.get(':nth-child(5) > .form-control')
            .should('be.visible')
            .and('not.have.text')
            .type('ndd@2104')
            .should('have.value', 'ndd@2104')

        cy.get(':nth-child(6) > .form-control')
            .should('be.visible')
            .and('not.have.text')

        cy.get('[style="margin-top:10px;text-align:right"] > .btn')
            .should('be.visible')
            .click()
            .should('not.be.visible')

        cy.get('#tableName')
            .should('be.visible')
            .and('not.have.text')
            .type('TBDATABASEINPUTAUTO2')

        
        cy.get('#generateTableButtonId > .btn')
            .should('be.visible')
            .and('have.text', 'Gerar Tabela')
            .click()

        
        cy.get('#ngdialog5-aria-labelledby')
            .should('be.visible')
            .and('have.text', 'Confirmação')

        
        cy.get('#ngdialog5-aria-describedby')
            .should('be.visible')
            .and('have.text', 'Tabela criada com sucesso!')

        cy.get('.footer-actions > .btn')
            .should('be.visible')
            .and('have.text', 'ok')
            .click()

        cy.get('#saveButtonId > .btn')
            .should('be.visible')
            .and('have.text', 'Gravar')
            .click()

        cy.get('#ngdialog6-aria-labelledby')
            .should('be.visible')
            .and('have.text', 'Confirmação')

        cy.get('#ngdialog6-aria-describedby')
            .should('be.visible')
            .and('have.text', 'Conexão de Entrada salva com sucesso!')

        cy.get('.btn')
            .should('be.visible')
            .and('have.text', 'ok')
            .click()

        cy.get('.ndd-filter__searchbar__input')
            .should('be.visible')
            .type('ENTRADA_TESTES_AUTOMATIZADOS')
            .should('have.value', 'ENTRADA_TESTES_AUTOMATIZADOS')

        cy.get('.ndd-filter__searchbar__input-icon > .fa')
            .should('be.visible')
            .click()

        cy.get('tbody > .ng-scope > :nth-child(2) > .ng-binding')
            .should('be.visible')
            .and('have.text', 'ENTRADA_TESTES_AUTOMATIZADOS')


        cy.get('.ndd-filter__searchbar__input')
            .should('be.visible')
            .and('have.value', 'ENTRADA_TESTES_AUTOMATIZADOS')

        cy.get('.ndd-filter__searchbar__input-icon > .fa')
            .should('be.visible')
            .click()
    })

    it.only('Output Connection', () => {
        cy.xpath('/html/body/ui-view/layout/sidebar/aside/nav[1]/div/ul/li[1]/div/div/span')
            .click()

        cy.get('[title="Saída"]')
            .click()
    })
})