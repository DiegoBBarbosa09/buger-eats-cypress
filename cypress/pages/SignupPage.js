class SignupPage {
  go() {
    cy.get('a[href="/deliver"]').click();
    cy.get('#page-deliver form h1').should(
      'have.text',
      'Cadastre-se para  fazer entregas'
    );
  }

  fillForm(deliver) {
    /*************Dados Pessoais*************/
    cy.get('input[name="fullName"]').type(deliver.name);
    cy.get('input[name="cpf"]').type(deliver.cpf);
    cy.get('input[name="email"]').type(deliver.email);
    cy.get('input[name="whatsapp"]').type(deliver.whatsapp);
    /*************Endereço*************/
    cy.get('input[name="postalcode"]').type(deliver.address.postalcode);
    cy.get('input[type="button"][value="Buscar CEP"]').click();
    cy.get('input[name="address-number"]').type(deliver.address.number);
    cy.get('input[name="address-details"]').type(deliver.address.details);
    /*************Validação de campos de prenchimento automatico*************/
    cy.get('input[name="address"]').should(
      'have.value',
      deliver.address.street
    );
    cy.get('input[name="district"]').should(
      'have.value',
      deliver.address.district
    );
    cy.get('input[name="city-uf"]').should(
      'have.value',
      deliver.address.city_state
    );
    /*************Metodo de entrega*************/
    cy.contains('.delivery-method li', deliver.delivery_method).click();
    /*************Anexar CNH*************/
    cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh);
  }

  submit() {
    /*************Cadastra Usuario Moto*************/
    cy.get('button[type="submit"]').click();
  }

  modalContentShouldBe(expectedMessage) {
    cy.get('div[id="swal2-html-container"]').should(
      'have.text',
      expectedMessage
    );
  }
  alertMessageShouldBe(expectedMessage) {
    cy.contains('.alert-error', expectedMessage).should('be.visible');
  }
}

export default new SignupPage();
