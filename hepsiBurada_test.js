const name ="" ;
const password = "";
Feature('');

Scenario('Bank Match Check', ({ I }) => {

        I.amOnPage('https://giris.hepsiburada.com/');
        I.wait(10);
        I.fillField('E-posta adresi veya telefon numarası', name);
        I.click({css: 'button#btnLogin'});
        I.see('Hoş geldiniz', 'h1');
        I.fillField('Şifre', password);
        I.click({css: 'button#btnEmailSelect'});
        I.wait(20);
        I.see('ARA')
        I.fillField('Ürün, kategori veya marka ara','kitap');
        I.click({css: 'div.SearchBoxOld-buttonContainer'});
        I.wait(15);
        I.seeInCurrentUrl('https://www.hepsiburada.com/ara?q=kitap');
        I.click({css: 'li#i0.productListContent-item'});
        I.wait(20);
        I.see('Sepete Ekle', 'button');
        I.click({css: 'button#addToCart'});
        I.wait(10);
        I.refreshPage;
        I.wait(10);
        I.openNewTab();
        I.amOnPage('https://checkout.hepsiburada.com/sepetim');
        I.wait(20);
        I.see('Alışverişi tamamla', 'button');
        I.click('Alışverişi tamamla');
        I.wait(20);
        I.seeInCurrentUrl('https://checkout.hepsiburada.com/teslimat');
        I.click({css: 'button#continue_step_btn'});
        I.wait(20);
        I.seeCurrentUrlEquals('https://checkout.hepsiburada.com/odeme');
        I.click('Anında Havale','h3');
        I.wait(20);
        I.click({css: 'input.sardesPaymentPage-MoneyTransfer-bank_name'}, 'Akbank');
        I.click('Devam Et');
        I.wait(10);

});
