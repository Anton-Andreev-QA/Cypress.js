describe('Автотест на покупку аватара', function () {
    
    it('Покупка аватара', function () {
        cy.visit('https://pokemonbattle.me/'); 

        cy.get(':nth-child(1) > .auth__input').type('anton_andreev18@vk.com'); // ввел почту
        cy.get('#password').type('1518Anton'); // ввел пароль

        cy.get('.auth__button').click(); // нажимаю войти

        cy.get('.header__btns > [href="/shop"]').click(); // нажимаю магазин

        cy.get(':nth-child(2) > .shop__button').click(); // нажимаю купить аватар

        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111 1111 1111 1111'); // Ввожу номер карты
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1224'); // ввожу срок действия
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // ввожу код 
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('Andreev Anton'); // ввожу имя
        cy.get('.pay-btn').click(); // нажимаю оплата 
        cy.get('#cardnumber').type('56456'); // ввожу код
        cy.get('.payment__submit-button').click(); // нажимаю отправить
        cy.get('.payment__adv').click();
        

        })

      
 })
