/// <reference types="cypress"/>

import signup from '../pages/SignupPage';
import { Factory, PayloadRegister } from '../factories/SignupFactory';

describe('Signup', () => {
  beforeEach(() => {
    cy.homePageOnline();
  });

  it('Cadastro de entregador Moto', function () {
    var deliver = PayloadRegister.deliverMethod();

    deliver.delivery_method = 'Moto';

    signup.go();
    signup.fillForm(deliver);
    signup.submit();

    const expectedMessage =
      'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.';
    signup.modalContentShouldBe(expectedMessage);
  });

  it('Cadastro de entregador Bike Elétrica', function () {
    var deliver = PayloadRegister.deliverMethod();

    deliver.delivery_method = 'Bike Elétrica';

    signup.go();
    signup.fillForm(deliver);
    signup.submit();

    const expectedMessage =
      'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.';
    signup.modalContentShouldBe(expectedMessage);
  });

  it('Cadastro de entregador Van/Carro', function () {
    var deliver = PayloadRegister.deliverMethod();

    deliver.delivery_method = 'Van/Carro';

    signup.go();
    signup.fillForm(deliver);
    signup.submit();

    const expectedMessage =
      'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.';
    signup.modalContentShouldBe(expectedMessage);
  });

  it('Cadastro de entregador aleatorio', function () {
    var deliver = PayloadRegister.deliverMethodRandon();

    deliver.delivery_method = Factory.randonArrElement([
      'Moto',
      'Bike Elétrica',
      'Van/Carro',
    ]);

    signup.go();
    signup.fillForm(deliver);
    signup.submit();

    const expectedMessage =
      'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.';
    signup.modalContentShouldBe(expectedMessage);
  });

  it('CPF Invalido', function () {
    var deliver = PayloadRegister.deliverMethodRandon();

    deliver.cpf = '000001141DD';

    signup.go();
    signup.fillForm(deliver);
    signup.submit();
    signup.alertMessageShouldBe('Oops! CPF inválido');
  });

  it('Email invalido', function () {
    var deliver = PayloadRegister.deliverMethodRandon();

    deliver.email = 'emailinvalid.com.br';

    signup.go();
    signup.fillForm(deliver);
    signup.submit();
    signup.alertMessageShouldBe('Oops! Email com formato inválido.');
  });

  context('Campos Obrigatorios', function () {
    const mensagem = [
      { field: 'name', output: 'É necessário informar o nome' },
      { field: 'cpf', output: 'É necessário informar o CPF' },
      { field: 'email', output: 'É necessário informar o email' },
      { field: 'postalcode', output: 'É necessário informar o CEP' },
      { field: 'number', output: 'É necessário informar o número do endereço' },
      { field: 'delivery_method', output: 'Selecione o método de entrega' },
      { field: 'cnh', output: 'Adicione uma foto da sua CNH' },
    ];

    mensagem.forEach(function (msg) {
      it(`${msg.field} is requered`, function () {
        signup.go();
        signup.submit();
        signup.alertMessageShouldBe(msg.output);
      });
    });
  });
});
