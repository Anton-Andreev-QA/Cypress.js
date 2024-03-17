describe('Автотесты на авторизацию', function () {
    
    it('Правильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/'); 
        cy.get('#mail').type('german@dolnikov.ru'); // ввел логин
        cy.get('#loginButton').should('be.disabled'); // кнопка некликабельна

        cy.get('#pass').type('iLoveqastudio1'); // ввел пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка кликабельная

        cy.get('#loginButton').click(); // нажимаю войти

        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю текст

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик

       })


    
    it('Нажать на кнопку забыл пароль', function () {
        cy.visit('https://login.qa.studio/'); 
        cy.get('#forgotEmailButton').click(); // нажал на кнопку "забыл пароль"

        cy.get('#mailForgot').type('german@dolnikov.ru'); // ввел логин
        cy.get('#restoreEmailButton').click(); // нажал кнопку "отправить код"

        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверяю текст

        })


    it('Правильный логин и неправильный пароль', function () {
        cy.visit('https://login.qa.studio/'); 
        cy.get('#mail').type('german@dolnikov.ru'); // ввел логин
        cy.get('#loginButton').should('be.disabled'); // кнопка некликабельна

        cy.get('#pass').type('iLoveqastudio12'); // ввел пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка кликабельная

        cy.get('#loginButton').click(); // нажимаю войти

        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю текст

         })

    it('Неправильный логин и правильный пароль', function () {
        cy.visit('https://login.qa.studio/'); 
        cy.get('#mail').type('german@dolnikovvv.ru'); // ввел логин
        cy.get('#loginButton').should('be.disabled'); // кнопка некликабельна

        cy.get('#pass').type('iLoveqastudio1'); // ввел пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка кликабельная

        cy.get('#loginButton').click(); // нажимаю войти

        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверяю текст

        })

    it('Ввести логин без @', function () {
        cy.visit('https://login.qa.studio/'); 
        cy.get('#mail').type('germandolnikov.ru'); // ввел логин
        cy.get('#loginButton').should('be.disabled'); // кнопка некликабельна

        cy.get('#pass').type('iLoveqastudio1'); // ввел пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка кликабельная

        cy.get('#loginButton').click(); // нажимаю войти

        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверяю текст

        })

    it('Ввод логина строчными буквами', function () {
        cy.visit('https://login.qa.studio/'); 
        cy.get('#mail').type(' GerMan@Dolnikov.ru'); // ввел логин
        cy.get('#loginButton').should('be.disabled'); // кнопка некликабельна

        cy.get('#pass').type('iLoveqastudio1'); // ввел пароль
        cy.get('#loginButton').should('be.enabled'); // кнопка кликабельная

        cy.get('#loginButton').click(); // нажимаю войти

        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверяю текст

        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик

        })







        























})
