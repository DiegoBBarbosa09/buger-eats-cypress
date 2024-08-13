import { faker as FakerJs } from '@faker-js/faker';
var cpf = require('gerador-validador-cpf');

export class Factory {
  static randonArrElement(randonElemnt) {
    const randomArrElement = FakerJs.helpers.arrayElement(randonElemnt);
    return randomArrElement;
  }
}

export class PayloadRegister {
  static deliverMethod() {
    const deliver = {
      name: FakerJs.person.fullName(),
      cpf: cpf.generate(),
      email: FakerJs.internet.email(),
      whatsapp: FakerJs.phone.number(),
      address: {
        postalcode: '06462000',
        street: 'Rua Adoniram Barbosa',
        number: '365',
        details: 'casa 3',
        district: 'Parque Imperial',
        city_state: 'Barueri/SP',
      },
      delivery_method: 'Moto',
      cnh: 'cnh-digital.jpg',
    };
    return deliver;
  }

  static deliverMethodRandon() {
    const deliverRandon = {
      name: FakerJs.person.fullName(),
      cpf: cpf.generate(),
      email: FakerJs.internet.email(),
      whatsapp: FakerJs.phone.number(),
      address: {
        postalcode: '06462000',
        street: 'Rua Adoniram Barbosa',
        number: '365',
        details: 'casa 3',
        district: 'Parque Imperial',
        city_state: 'Barueri/SP',
      },
      delivery_method: 'Moto',
      cnh: 'cnh-digital.jpg',
    };
    return deliverRandon;
  }
}
