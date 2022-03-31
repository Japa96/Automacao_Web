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
            .click()
        
    }

    it('Job', () => {

        cy.get('.titlebar__main-title', {timeout:30000})
            .should('be.visible')
            .and('have.text', 'Usuários')

        cy.xpath('/html/body/ui-view/layout/sidebar/aside/nav[1]/div/ul/li[7]/div/div/span')
            .should('be.visible')
            .and('have.text', 'Job NFC-e')
            .click()

        cy.get('.sidebar__submenu-title')
            .should('be.visible')
            .and('have.text', 'Job NFC-e')


        let jobArray = []
        jobArray[0] = '[title="Job"]'
        jobArray[1] = '[title="Executor Saída"]'
        jobArray[2] = '[title="Executor Eventos"]'
        jobArray[3] = '[title="Concentrador"]'

        let textJobArray = []
        textJobArray[0] = 'Job'
        textJobArray[1] = 'Executor Saída'
        textJobArray[2] = 'Executor Eventos'
        textJobArray[3] = 'Concentrador'

        for(let c = 0; c < jobArray.length; c++){
            cy.get(jobArray[c])
                .should('be.visible')
                .and('have.text', textJobArray[c])
        }

        cy.get('[title="Job"]').click()
        cy.get('.titlebar__main-title')
            .should('be.visible')
            .and('have.text', 'Job')

        cy.get('.ndd-kendo-grid-header__actions > :nth-child(1)')
            .should('be.visible')
            .and('have.text', '  Novo ')
            .click()


        cy.get('.titlebar__main-title')
            .should('be.visible')
            .and('have.text', 'Criar Job')

        cy.get('.active > .nav-link').should('be.visible').and('have.text', 'Geral')

        let textoAbas = []
        textoAbas[1] = 'Conexões'
        textoAbas[2] = 'Certificados'
        textoAbas[3] = 'Conversão'
        textoAbas[4] = 'B2B'
        textoAbas[5] = 'Reprocessamento'
        textoAbas[6] = 'Integração'

        for(let d =1; d <= 6; d++){
            cy.get('[index="' + d + '"] > .nav-link')
                .should('be.visible')
                .and('have.text', textoAbas[d])
        }


        let validaLabels = []
        validaLabels[0] = '.form-group-validation > label'
        validaLabels[1] = '#ddlIntegrationId > .ddlContent > .ng-binding'
        validaLabels[2] = ':nth-child(6) > label'
        validaLabels[3] = '#ddlCertificateId > .ddlContent > .ng-binding'

        let generalFields = []
        generalFields[0] = 'section.ng-scope > :nth-child(4) > .form-control'
        generalFields[1] = '#ddlIntegrationId > .ddlContent > .input-group'
        generalFields[2] = ':nth-child(6) > .form-control'
        generalFields[3] = '#ddlCertificateId > .ddlContent > .input-group'

        let textoLabels = []
        textoLabels[0] = 'Nome: '
        textoLabels[1] = 'Integração: '
        textoLabels[2] = 'DLL de integração: '
        textoLabels[3] = 'Certificado de comunicação: '

        for(let a = 0; a < validaLabels.length; a++){
            cy.get(validaLabels[a])
                .should('be.visible')
                .and('have.text', textoLabels[a])
            
            cy.get(generalFields[a])
                .should('be.visible')

                if(generalFields[a] == 0 & cy.get('section.ng-scope > :nth-child(4) > .form-control').should('have.value', '')){
                    cy.get('.form-group-validation > .ng-isolate-scope > .validateLabel')
                        .should('be.visible')
                }

                if(generalFields[a] == 3 & cy.get('#ddlCertificateId > .ddlContent > .input-group').should('have.value', '')){
                    cy.get('#ddlCertificateId > .ddlContent > .ng-isolate-scope > .validateLabel')
                        .should('be.visible')
                }
        }

        cy.get('section.ng-scope > :nth-child(4) > .form-control')
            .type('TESTES_AUTOMATIZADOS')
            .should('have.value', 'TESTES_AUTOMATIZADOS')

        cy.get('#ddlCertificateId > .ddlContent > .input-group > .input-group-btn > .btn')
            .should('be.visible')
            .click()


        cy.xpath('//*[@id="kendoGridSelectCertificate searchBar"]/div/input')
            .should('be.visible')
            .and('have.value', '')
            .type('COMPANHIA')
            .and('have.value', 'COMPANHIA')

        cy.xpath('//*[@id="kendoGridSelectCertificate searchBar"]/div/span[2]/i')
            .should('be.visible')
            .click()

        cy.get('tbody > .ng-scope > :nth-child(1) > .ng-binding')
            .should('be.visible')
            .and('have.text', 'COMPANHIA BRASILEIRA DE DISTRIBUICAO')
            .click()


        for(let c = 1; c <= 2; c++){
            cy.get('#kendoGridSelectCertificate > .ndd-kendo-grid-header > .ndd-kendo-grid-header__actions > :nth-child('+ c +')')
                .should('be.visible')
            
            if(c == 1){
                cy.get('#kendoGridSelectCertificate > .ndd-kendo-grid-header > .ndd-kendo-grid-header__actions > :nth-child(1)')
                    .should('have.text', '  Selecionar ')
            }else{
                cy.get('#kendoGridSelectCertificate > .ndd-kendo-grid-header > .ndd-kendo-grid-header__actions > :nth-child(2)')
                    .should('have.text', '  Cancelar ')
            }
        }

        cy.get('#kendoGridSelectCertificate > .ndd-kendo-grid-header > .ndd-kendo-grid-header__actions > :nth-child(1)').click()

        for(let y = 1; y <= 2; y++){
            cy.get('.active > section.ng-scope > .container > :nth-child('+ y +') > .k-checkbox-label')
                .should('be.visible')
                .and('not.be.checked')
                .click()
        }
        
    })
})