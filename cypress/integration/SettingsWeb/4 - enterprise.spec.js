/// <reference types="cypress"/>

describe('Settings Web - Enterprise', () => {
    
    before(() => {
        cy.visit('http://192.168.202.135/eForms_NFCeSettingsWeb/#/login')
    })

   
    beforeEach(() => {
        login()
        Cypress.Cookies.preserveOnce('session_id', 'remember_token');
        cy.viewport(1350, 1080)
    })

    const login = () => {
        cy.visit('http://192.168.202.135/eForms_NFCeSettingsWeb/#/login')
        cy.get(':nth-child(1) > .login__input')
            .type('ndd');
        
        cy.get(':nth-child(2) > .login__input')
            .type('ndd');
        
        cy.get('.btn')
            .click()
        
    }

    it('Enterprise', () => {

        cy.xpath('/html/body/ui-view/layout/sidebar/aside/nav[1]/div/ul/li[3]/div/div/span')
            .should('have.text', 'Cadastros')
            .click()


        cy.get('[title="Empresas"]')
            .should('have.text', 'Empresas')
            .and('be.visible')
            .click()

        cy.get('.titlebar__main-title')
            .should('be.visible')
            .and('have.text', 'Empresas')

        cy.get('.ndd-kendo-grid-header__actions > :nth-child(1)')
            .should('be.visible')
            .and('have.text', '  Novo ')
            .click()

        cy.get('.titlebar__main-title')
            .should('be.visible')
            .and('have.text', 'Criar Empresa')

        cy.get('.active > .nav-link')
            .should('be.visible')
            .and('have.text', 'Geral')

        var buttons = new Array();
        buttons[1] = "CNPJs"
        buttons[2] = "Impressão"
        buttons[5] = "Integração"
        buttons[6] = "Conversão"
        buttons[7] = "Automatização"
        buttons[8] = "Alertas de e-mail"
        buttons[9] = "Controle de logs dos agentes"
        buttons[10] = "Monitoramento do Agente"
        
        for(let c = 1; c <= 2; c++){
            cy.get('[index="' + c + '"] > .nav-link')
                .should('be.visible')
                .and('have.text', buttons[c])
        }

        for(let d = 5; d <= 10; d++){
            cy.get('[index="' + d + '"] > .nav-link')
                .should('be.visible')
                .and('have.text', buttons[d])
        }


        var layoutEnterprise = new Array();
        layoutEnterprise[0] = ".active > .n-tab-section-full > :nth-child(1) > label"
        layoutEnterprise[1] = ".n-tab-section-full > .form-group.ng-scope > label"
        layoutEnterprise[2] = ".n-tab-section-full > :nth-child(3) > label"
        layoutEnterprise[3] = ".n-tab-section-full > :nth-child(5) > label"
        layoutEnterprise[4] = ".n-tab-section-full > :nth-child(6) > label"
        layoutEnterprise[5] = ":nth-child(7) > label"

        var inputFields = new Array();
        inputFields[0] = "#name"
        inputFields[1] = ".n-tab-section-full > :nth-child(3) > .form-control"
        inputFields[2] = "#storeName"
        inputFields[3] = "#storeRule"
        inputFields[4] = ":nth-child(7) > .event__panel__input"
        inputFields[5] = ":nth-child(8) > .event__panel__input"

        var typeFields = new Array();
        typeFields[0] = "AUTOMACAO_NFCE"
        typeFields[1] = "12345"
        typeFields[2] = "AUTOMACAO"
        typeFields[3] = "00-05"
        typeFields[4] = "2.00"
        typeFields[5] = "Hora/Data (padrão)"

        
        for(let a = 0; a < layoutEnterprise.length; a++){
            cy.get(layoutEnterprise[a])
                .should('be.visible')

            if(a <= 3){
                cy.get(inputFields[a])
                    .type(typeFields[a])
                    .should('have.value', typeFields[a])
            }else{
               cy.get(inputFields[a])
                    .select(typeFields[a])
            }
        }

        for(let e = 1; e <= 6; e++){
            cy.get('.active > .n-tab-section-full > .col-md-12 > :nth-child(' + e + ') > .k-checkbox-label')
                .click()
        }

        for(let f = 1; f <= 6; f++){
            cy.get('.active > .n-tab-section-full > .col-md-12 > :nth-child(' + f + ') > .k-checkbox-label')
                .click()
        }

        cy.get('.n-editor-content')
            .scrollTo('top', {ensureScrollable: false})


        cy.get('[index="1"] > .nav-link')
            .click()


        if(cy.get('#ilEnterpriseIdinputItemList').should('be.empty').and('be.visible')){
            cy.get('.insert-list > :nth-child(2) > .ng-binding')
                .should('be.visible')
                .and('have.text', 'Lista de CNPJ:')

            cy.get('.insert-list > :nth-child(2) > .ng-isolate-scope > .validateLabel')
                .should('be.visible')
        }

        cy.get('#ilEnterpriseIdinputItemList')
            .type('47.508.411/0225-59')
            .should('have.value', '47.508.411/0225-59')

        cy.get('.input-group > :nth-child(2) > .btn')
            .should('be.visible')
            .and('have.text', 'Inserir')
            .click()


        cy.get('.insert-list > :nth-child(1) > .input-group > :nth-child(3) > .btn')
            .should('be.visible')
            .and('have.text', 'Remover')


        if(cy.get('.n-grid-header-hide > .ndd-kendo-grid > #grid > .k-grid-content').should('not.be.empty')){
            cy.get('.insert-list > :nth-child(2) > .ng-isolate-scope > .validateLabel')
                .should('not.be.visible')
        }

        cy.get('#saveButtonId > .btn')
            .should('be.visible')
            .and('have.text', 'Gravar')
            .click()

        cy.get('#ngdialog1-aria-describedby')
            .should('be.visible')
            .and('have.text', 'Empresa salva com sucesso!')

        cy.get('.btn')
            .should('be.visible')
            .and('have.text', 'ok')
            .click()

        cy.get('.ndd-filter__searchbar__input')
            .should('be.visible')
            .and('be.empty')
            .type('AUTOMACAO_NFCE')
            .should('have.value', 'AUTOMACAO_NFCE')

        cy.get('.ndd-filter__searchbar__input-icon > .fa')
            .should('be.visible')
            .click()

        cy.get('tbody > .ng-scope > :nth-child(2)')
            .should('be.visible')
            .and('have.text', 'AUTOMACAO_NFCE')

        cy.get('.ndd-filter__searchbar__input-icon > .fa')
            .should('be.visible')
            .click()        
    })
})