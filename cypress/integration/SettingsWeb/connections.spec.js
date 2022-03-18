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

    it('Output Connection', () => {
        cy.xpath('/html/body/ui-view/layout/sidebar/aside/nav[1]/div/ul/li[1]/div/div/span')
            .click()

        cy.get('[title="Saída"]')
            .click()
            .should('have.text', 'Saída')

        cy.get('.titlebar__main-title')
            .should('be.visible')
            .and('have.text', 'Conexão de Saída')

        cy.get('.ndd-kendo-grid-header__actions > :nth-child(1)')
            .should('be.visible')
            .and('have.text', '  Novo ')
            .click()

        cy.get('.titlebar__main-title')
            .should('be.visible')
            .and('have.text', 'Criar Conexão de Saída')

        cy.get('.active > section.ng-scope > :nth-child(1) > label')
            .should('have.text', 'Nome:')

        cy.get('.active > section.ng-scope > :nth-child(1) > .ng-isolate-scope > .validateLabel')
            .should('be.visible')
            
        cy.get('#name')
            .type('SEFAZ Goias Homologação')

        cy.get('.active > section.ng-scope > :nth-child(1) > .ng-isolate-scope > .validateLabel')
            .should('not.be.visible')

        cy.get('.n-editor-group-label > :nth-child(1) > .ng-pristine')
            .should('be.checked')
        
        cy.get('.n-editor-group-label > :nth-child(2) > .ng-pristine')
            .should('not.be.checked')
            .click()
            .and('be.checked')
        
        cy.get('.n-editor-group-label > :nth-child(1) > .ng-pristine')
            .should('not.be.checked')

        cy.get('.active > section.ng-scope > :nth-child(3) > label')
            .should('have.text', 'Estado:')

        if(cy.get('.event__panel__input').should('not.be.selected')){
            cy.get('.active > section.ng-scope > :nth-child(3) > .ng-isolate-scope > .validateLabel').should('be.visible')
        }

        cy.get('.event__panel__input')
            .select('Goiás')
            .should('have.value', 'number:52')
        
        if(cy.get('.event__panel__input').should('have.value', 'number:52')){
            cy.get('.active > section.ng-scope > :nth-child(3) > .ng-isolate-scope > .validateLabel').should('not.be.visible')
        }

        for(let i = 1; i <= 5; i++){
            cy.get(':nth-child(' + i + ') > .k-checkbox-label')
                .click()

                if(i == 5){
                    cy.xpath('//*[@id="timeLimitCanc"]')
                        .should('have.value', '1440')
                        .clear()

                        cy.get('.container > .ng-isolate-scope > .validateLabel')
                            .should('be.visible')

                        cy.xpath('//*[@id="timeLimitCanc"]')
                            .should('be.empty')
                            .type('1441')
                            .should('have.value', '1441')

                        cy.get('.container > .ng-isolate-scope > .validateLabel')
                            .should('not.be.visible')
                }

            if(i == 5){
                for(let j = 1; j <= 5; j++){
                    cy.get(':nth-child(' + j + ') > .k-checkbox-label')
                        .click()

                    if(i == 5){
                        cy.xpath('//*[@id="timeLimitCanc"]')
                            .should('have.value', '1441')
                    }

                }
            }

        }

        cy.xpath('//*[@id="timeLimitCanc"]')
            .should('be.disabled')
            .and('have.value', '1441')

        
        cy.get('[index="1"] > .nav-link')
            .should('have.text', 'Conexões')
            .click()

        cy.get('.panel-title')
            .should('be.visible')
            .and('have.text', 'Serviços de conexão com a SEFAZ')

        for(let c = 1; c <= 6; c++){
            cy.get('.panel-body > :nth-child(' + c +') > .ng-isolate-scope > .validateLabel')
                .should('be.visible')
        }

        for(let c = 8; c <= 13; c++){
            cy.get('.panel-body > :nth-child(' + c + ') > .ng-isolate-scope > .validateLabel')
                .should('be.visible')
        }

        var fields = new Array();
        fields[0] = "#receipt"
        fields[1] = "#receiptVersion"
        fields[2] = "#regress"
        fields[3] = "#regressVersion"
        fields[4] = "#event"
        fields[5] = "#eventVersion"
        fields[6] = "#consultation"
        fields[7] = "#consultationVersion"
        fields[8] = "#nullify"
        fields[9] = "#nullifyVersion"
        fields[10] = "#status"
        fields[11] = "#statusVersion"

        var WSinformation = new Array();
        [WSinformation0] = "https://homolog.sefaz.go.gov.br/nfe/services/NFeAutorizacao4?wsdl"
        WSinformation[1] = "4.00"
        WSinformation[2] = "https://homolog.sefaz.go.gov.br/nfe/services/NFeRetAutorizacao4?wsdl"
        WSinformation[3] = "4.00"
        WSinformation[4] = "https://homolog.sefaz.go.gov.br/nfe/services/NFeRecepcaoEvento4?wsdl"
        WSinformation[5] = "1.00"
        WSinformation[6] = "https://homolog.sefaz.go.gov.br/nfe/services/NFeConsultaProtocolo4?wsdl"
        WSinformation[7] = "4.00"
        WSinformation[8] = "https://homolog.sefaz.go.gov.br/nfe/services/NFeInutilizacao4?wsdl"
        WSinformation[9] = "4.00"
        WSinformation[10] = "https://homolog.sefaz.go.gov.br/nfe/services/NFeStatusServico4?wsdl"
        WSinformation[11] = "4.00"

        for(var z = 0; z < fields.length; z++){
            cy.get(fields[z])
                .should('be.visible')
                .and('be.empty')
                .type(WSinformation[z])
                .should('have.value', WSinformation[z])
        }

        cy.get('.n-editor-content')
            .scrollTo('top', {ensureScrollable: true})

        cy.get('[index="2"] > .nav-link')
            .should('be.visible')
            .and('have.text', 'QRCode')
            .click()

        cy.get('label.ng-binding')
            .should('be.visible')
            .and('have.text', 'QRCode: ')

        cy.get('.panel-body > validation-tooltip.ng-isolate-scope > .validateLabel')
            .should('be.visible')

        cy.get('.ndd-kendo-grid-header__actions > :nth-child(1)')
            .should('be.visible')
            .and('have.text', '  Novo ')
            .click()

        cy.xpath('//*[@id="form-dialog-editor"]/div/header/h4')
            .should('be.visible')
            .and('have.text', 'QRCode')

        
        for(let b = 1; b <= 2; b++){
            cy.get('.dialog-content > :nth-child(' + b + ') > .ng-isolate-scope > .validateLabel')
                .should('be.visible')
            cy.get('.dialog-content > :nth-child(' + b + ') > .ng-isolate-scope > .validateLabel')
                .should('be.visible')
                .and('be.empty')          


            if(b == 1){
                cy.get('.dialog-content > :nth-child(' + b + ') > label')
                    .should('be.visible')
                    .and('have.text', 'URL do Qrcode:')

                cy.get('.dialog-content > :nth-child(' + b + ') > .form-control')
                    .should('be.empty')
                    .type('http://homolog.sefaz.go.gov.br/nfeweb/sites/nfce/danfeNFCe?p=')
                    .and('have.value', 'http://homolog.sefaz.go.gov.br/nfeweb/sites/nfce/danfeNFCe?p=')
            }else{
                cy.get('.dialog-content > :nth-child(' + b + ') > label')
                    .should('be.visible')
                    .and('have.text', 'Consulta do Consumidor:')
                
                cy.get('.dialog-content > :nth-child(' + b + ') > .form-control')
                    .should('be.empty')
                    .type('http://www.nfce.go.gov.br/post/ver/214413/consulta-nfc-e-homologacao')
                    .and('have.value', 'http://www.nfce.go.gov.br/post/ver/214413/consulta-nfc-e-homologacao')
            }            

        }

        cy.get('.col-md-6 > label')
            .should('be.visible')
            .and('have.text', 'Versão do QRCode:')

        cy.get('.col-md-6 > .event__panel__input')
            .select('2.00')
            .and('have.value', 'number:2')

        
        cy.get('[ng-click="closeThisDialog()"]')
            .should('be.visible')
            .and('have.text', 'Cancelar')


        cy.get('[ng-click="confirm(qrcodeconnectionsModel)"]')
            .should('be.visible')
            .and('have.text', 'Gravar')
            .click()

        cy.get('[index="3"] > .nav-link')
            .should('be.visible')
            .and('have.text', 'Contingência')
            .click()

        cy.get('.active > section.ng-scope > :nth-child(1) > label')
            .should('be.visible')
            .and('have.text', 'Condições para aplicação remover o status de contingência de uma SEFAZ')

        cy.get('.active > section.ng-scope > :nth-child(2) > label')
            .should('be.visible')
            .and('have.text', 'Quantidade de notas com retornos válidos da SEFAZ: ')

        cy.get('.active > section.ng-scope > :nth-child(2) > .form-control')
            .should('be.visible')
            .and('have.value', '3')
            .clear()

            if(cy.get('.active > section.ng-scope > :nth-child(2) > .form-control').should('be.empty')){
                cy.get('.active > section.ng-scope > :nth-child(2) > .ng-isolate-scope > .validateLabel')
                .should('be.visible')
            }
            cy.get('.active > section.ng-scope > :nth-child(2) > .form-control')
                .type('4')
                .and('have.value', '4')

        
        cy.get('.active > section.ng-scope > :nth-child(3) > label')
            .should('be.visible')
            .and('have.text', 'Total do tempo em segundos necessários para a saída de contingência: ')

        
        cy.get('.active > section.ng-scope > :nth-child(3) > .form-control')
            .should('be.visible')
            .and('have.value', '120')
            .clear()

            if(cy.get('.active > section.ng-scope > :nth-child(3) > .form-control').should('be.empty')){
                cy.get('.active > section.ng-scope > :nth-child(3) > .ng-isolate-scope > .validateLabel')
                .should('be.visible')
            }
            cy.get('.active > section.ng-scope > :nth-child(3) > .form-control')
                .type('121')
                .and('have.value', '121')


        cy.get('[index="4"] > .nav-link')
            .should('have.text', 'Lote')
            .click()


        var Titlelots = new Array();
        Titlelots[0] = ".active > section.ng-scope > :nth-child(1) > label"
        Titlelots[1] = ".active > section.ng-scope > :nth-child(2) > label"
        Titlelots[2] = ".active > section.ng-scope > :nth-child(3) > label"
        Titlelots[3] = ".form-group-validation > label"
        Titlelots[4] = ".active > section.ng-scope > :nth-child(5) > label"
        //Titlelots[5] = "section.ng-scope > :nth-child(6) > label"
        //Titlelots[6] = ":nth-child(7) > label"

        var signalLots = new Array();
        signalLots[0] = ".active > section.ng-scope > :nth-child(2) > .ng-isolate-scope > .validateLabel"
        signalLots[1] = ".active > section.ng-scope > :nth-child(3) > .ng-isolate-scope > .validateLabel"
        signalLots[2] = ".form-group-validation > .ng-isolate-scope > .validateLabel"
        signalLots[3] = "section.ng-scope > :nth-child(6) > .ng-isolate-scope > .validateLabel"
        signalLots[4] = ":nth-child(7) > .ng-isolate-scope > .validateLabel"
        //signalLots[5] = ".ng-scope > :nth-child(8) > .ng-isolate-scope > .validateLabel"
        //signalLots[6] = "section.ng-scope > :nth-child(8) > .form-control"

        var checkFields = new Array();
        checkFields[0] = ".active > section.ng-scope > :nth-child(2) > .form-control"
        checkFields[1] = ".active > section.ng-scope > :nth-child(3) > .form-control"
        checkFields[2] = ".active > section.ng-scope > :nth-child(4) > .form-control"
        checkFields[3] = "section.ng-scope > :nth-child(6) > .form-control"
        checkFields[4] = ":nth-child(7) > .form-control"
        //checkFields[5] = "section.ng-scope > :nth-child(8) > .form-control"
        //checkFields[6] = "section.ng-scope > :nth-child(8) > .form-control"

        var insertField = new Array();
        insertField[0] = "1"
        insertField[1] = "500"
        insertField[2] = "30"
        insertField[3] = "1"
        insertField[4] = "500"
        //insertField[5] = "30"
        //insertField[6] = "30"

        for(let f = 0; f < Titlelots.length; f++){
            cy.get(Titlelots[f])
                .should('be.visible')
            cy.get('.n-editor-content')
                .scrollTo('bottom', {ensureScrollable: true})
            cy.get(signalLots[f])
                .should('be.visible')
            cy.get(checkFields[f])
                .should('be.visible')
                .and('be.empty')
                .type(insertField[f])
                .and('have.value', insertField[f])
        }

        cy.get('.btn-default')
            .should('be.visible')
            .and('have.text', 'Cancelar')

        cy.get('#saveButtonId > .btn')
            .should('be.visible')
            .and('have.text', 'Gravar')
            .click()

        cy.get('#ngdialog2-aria-labelledby')
            .should('be.visible')
            .and('have.text', 'Confirmação')

        cy.get('#ngdialog2-aria-describedby')
            .should('be.visible')
            .and('have.text', 'Conexão de Saída salva com sucesso!')

        cy.get('.btn')
            .should('be.visible')
            .and('have.text', 'ok')
            .click()

        cy.get('.ndd-filter__searchbar__input')
            .should('be.visible')
            .and('be.empty')
            .type('SEFAZ Goias Homologação')

        cy.get('.ndd-filter__searchbar__input-icon > .fa')
            .should('be.visible')
            .click()

        cy.get('.k-grid-content')
            .should('not.be.empty')

        cy.get('.ndd-filter__searchbar__input-icon > .fa')
            .should('be.visible')
            .click()

    })

    it('Cold connection', () => {

        cy.xpath('/html/body/ui-view/layout/sidebar/aside/nav[1]/div/ul/li[1]/div/div/span')
            .should('have.text', 'Conexões')
            .and('be.visible')
            .click()
        
        cy.get('[title="Cold"]')
            .should('be.visible')
            .and('have.text', 'Cold')
            .click()

        cy.get('.titlebar__main-title')
            .should('be.visible')
            .and('have.text', 'Conexão Cold')

        
        cy.get('.ndd-kendo-grid-header__actions > :nth-child(1)')
            .should('be.visible')
            .and('have.text', '  Novo ')
            .click()

        cy.get('.titlebar__main-title')
            .should('be.visible')
            .and('have.text', 'Criar Conexão Cold')

        cy.get('.active > .nav-link')
            .should('be.visible')
            .and('have.text', 'Geral')

        cy.get('.active > section.ng-scope > .form-group.col-md-8 > label')
            .should('be.visible')
            .and('have.text', 'Nome: ')

        if(cy.get('#name').should('be.empty')){
            cy.get('section.ng-scope > .form-group.col-md-8 > .ng-isolate-scope > .validateLabel')
                .should('be.visible')
        }

        cy.get('#name')
            .should('be.empty')
            .type('AUTOMACAO_COLD')
            .and('have.value', 'AUTOMACAO_COLD')


        if(cy.get('#name').should('have.value', 'AUTOMACAO_COLD')){
            cy.get('section.ng-scope > .form-group.col-md-8 > .ng-isolate-scope > .validateLabel')
                .should('not.be.visible')
        }

        cy.get('.panel-title')
            .should('be.visible')
            .and('have.text', 'Dados')

        if(cy.get('.input-group').should('not.have.text')){
            cy.get('[target="connectionColdIdshowConnection"] > .validateLabel').should('be.visible')
        }

        cy.get('[ng-click="ctrl.showData = !ctrl.showData"] > .btn > .fa')
            .should('be.visible')
            .click()

        if(cy.get(':nth-child(1) > .n-editor-group-label > :nth-child(1) > .ng-pristine').should('be.checked')){
            cy.get(':nth-child(1) > .n-editor-group-label > :nth-child(2) > .ng-pristine').should('not.be.checked')
                .click()
            
            cy.get(':nth-child(1) > .n-editor-group-label > :nth-child(1) > .ng-pristine')
                .should('not.be.checked')
                .click()
        }

        var dataBaseFields = new Array();

        dataBaseFields[0] = ".cnConnectionStringData > :nth-child(2) > .form-control"
        dataBaseFields[1] = ":nth-child(3) > .form-control"
        dataBaseFields[2] = ".cnConnectionStringData > :nth-child(4) > .form-control"
        dataBaseFields[3] = ":nth-child(5) > .form-control"
        dataBaseFields[4] = ":nth-child(6) > .form-control"

        var dataBaseAlerts = new Array();

        dataBaseAlerts[0] = ".cnConnectionStringData > :nth-child(2) > .ng-isolate-scope > .validateLabel"
        dataBaseAlerts[1] = ":nth-child(3) > .ng-isolate-scope > .validateLabel"
        dataBaseAlerts[2] = ":nth-child(4) > .ng-isolate-scope > .validateLabel"
        dataBaseAlerts[3] = ":nth-child(5) > .ng-isolate-scope > .validateLabel"
        dataBaseAlerts[4] = ":nth-child(6) > .form-control"

        var insertDataBaseFields = new Array();

        insertDataBaseFields[0] = "192.168.202.135"
        insertDataBaseFields[1] = "NDD_COLD_EXPORT_NFCe"
        insertDataBaseFields[2] = "sa"
        insertDataBaseFields[3] = "ndd@2104"
        insertDataBaseFields[4] = "CYPRESS"

        for(let c = 0; c < dataBaseFields.length; c++){
            cy.get(dataBaseFields[c])
                .should('be.visible')
                .and('be.empty')

            cy.get(dataBaseAlerts[c])
                .should('be.visible')

            cy.get(dataBaseFields[c])
                .type(insertDataBaseFields[c])
                .should('have.value', insertDataBaseFields[c])
        }

        cy.get(':nth-child(6) > .form-control').clear()

        cy.get('[style="margin-top:10px;text-align:right"] > .btn')
            .should('have.text', ' Criar')
            .click()

        if(cy.get('#tableName').should('be.empty')){
            cy.get('.panel-body > div.form-group > .ng-isolate-scope > .validateLabel').should('be.visible')
        }

        cy.get('#tableName')
            .type('TBCOLDAUTOMACAO')
            .should('have.value', 'TBCOLDAUTOMACAO')

        cy.get('.panel-body > div.form-group > .ng-isolate-scope > .validateLabel')
            .should('not.be.visible')

        cy.get('#validatingButtonId > .btn')
            .should('have.text', 'Validar Conexão')
            .and('be.visible')
            .click()


        cy.get('#ngdialog1-aria-labelledby')
            .should('be.visible')
            .and('have.text', 'Confirmação')

        cy.get('#ngdialog1-aria-describedby')
            .should('be.visible')
            .and('have.text', 'Conexão com o banco válida!')

        cy.get('.footer-actions > .btn')
            .should('be.visible')
            .and('have.text', 'ok')
            .click()

        cy.get('[index="1"] > .nav-link')
            .should('be.visible')
            .and('have.text', 'Metadata')
            .click()

         
        if(cy.get('#metadataName').should('be.visible').and('be.empty')){
            cy.get('fieldset > :nth-child(1) > .ng-isolate-scope > .validateLabel').should('be.visible')
        }

        cy.get('#metadataName')
            .type('AUTOMACAO_CYPRESS')
            .and('have.value', 'AUTOMACAO_CYPRESS')

        if(cy.get('.n-editor-group-label > :nth-child(1) > .ng-pristine').should('be.checked')){
            cy.get(':nth-child(2) > .ng-pristine').should('not.be.checked')
                .click()
            
            cy.get('.n-editor-group-label > :nth-child(1) > .ng-pristine').should('not.be.checked')
                .click()
        }

        cy.xpath('//*[@id="metadataGrid"]/div[2]/table/tbody/tr[4]/td[1]/span')
            .should('be.visible')
            .and('have.text', 'EMIT_CNPJ')
            .dblclick()

        
        cy.get('fieldset > :nth-child(4) > .form-control')
            .should('be.visible')
            .and('have.value', 'EMIT_CNPJ')

        cy.get('.dialog-content')
            .scrollTo('bottom', {ensureScrollable: false})

        cy.get('[ng-hide="isEditMode"]')
            .should('be.visible')
            .and('have.text','Gravar')
            .click()

        cy.get('#compileButtonId > .btn')
            .should('be.visible')
            .and('have.text', 'Gravar/Compilar')
            .click()

        cy.get('#ngdialog3-aria-describedby')
            .should('be.visible')
            .and('have.text', 'Conexão Cold compilada e salva com sucesso!')
        
        cy.get('.btn')
            .should('be.visible')
            .and('have.text', 'ok')
            .click()

        cy.get('.ndd-filter__searchbar__input')
            .should('be.visible')
            .and('be.empty')
            .type('AUTOMACAO_COLD')

        cy.get('.ndd-filter__searchbar__input-icon > .fa')
            .should('be.visible')
            .click()

        
     })
})