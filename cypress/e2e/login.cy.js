describe('Автотесты на форму логина', function () {
   it('Вводим верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // посетили сайт
        cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
        cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
        cy.get('#loginButton').click(); // клик по кнопке войти
        cy.get('#messageHeader').should('be.visible') // проверка что текст виден
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверка что элемент содержит текст авторизация прошла успешно
        cy.get('#exitMessageButton > .exitIcon').click(); // клик по крестику
      })

      it('Восстановление пароля', function () {
         cy.visit('https://login.qa.studio/'); // посетили сайт
         cy.get('#forgotEmailButton').click(); // клик забыли пароль
         cy.get('#mailForgot').type('german@dolnikov.ru'); // ввели верный логин
         cy.get('#restoreEmailButton').click();// клик отправить код
         cy.get('#messageHeader').should('be.visible') // проверка что текст виден
         cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // проверка что элемент содержит текст успешно отправили пароль на e-mail
         cy.get('#exitMessageButton > .exitIcon').click(); // клик по крестику
       })

      it('Вводим верный логин и не верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // посетили сайт
         cy.get('#mail').type('german@dolnikov.ru'); // ввели верный логин
         cy.get('#pass').type('iLoveqastudio11'); // ввели не верный пароль
         cy.get('#loginButton').click(); // клик по кнопке войти
         cy.get('#messageHeader').should('be.visible') // проверка что текст виден
         cy.get('#messageHeader').contains('Такого логина или пароля нет'); // проверка что элемент содержит текст такого логина или пароля нет
         cy.get('#exitMessageButton > .exitIcon').click(); // клик по крестику
       })

       it('Вводим не верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // посетили сайт
         cy.get('#mail').type('german@dolnikov.r'); // ввели не верный логин
         cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
         cy.get('#loginButton').click(); // клик по кнопке войти
         cy.get('#messageHeader').should('be.visible') // проверка что текст виден
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверка что элемент содержит текст нужно исправить проблему валидации
         cy.get('#exitMessageButton > .exitIcon').click(); // клик по крестику
       })

       it('Вводим логин без @ и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // посетили сайт
         cy.get('#mail').type('germandolnikov.ru'); // ввели логин без @
         cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
         cy.get('#loginButton').click(); // клик по кнопке войти
         cy.get('#messageHeader').should('be.visible') // проверка что текст виден
         cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // проверка что элемент содержит текст нужно исправить проблему валидации
         cy.get('#exitMessageButton > .exitIcon').click(); // клик по крестику
       })

       it('Вводим верный логин с заглавными буквами и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // посетили сайт
         cy.get('#mail').type('GerMan@Dolnikov.ru'); // ввели верный логин с заглавными буквами
         cy.get('#pass').type('iLoveqastudio1'); // ввели верный пароль
         cy.get('#loginButton').click(); // клик по кнопке войти
         cy.get('#messageHeader').should('be.visible') // проверка что текст виден
         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // проверка что элемент содержит текст авторизация прошла успешно
         cy.get('#exitMessageButton > .exitIcon').click(); // клик по крестику
       })
   })