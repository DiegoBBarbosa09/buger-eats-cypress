var cpf = require('gerador-validador-cpf')

export default {

    deliver: function () {

        

        var data = {
            name: 'Diego Brito',
            cpf: cpf.generate(),
            email: 'diegobrito@gmail.com',
            whatsapp: "11987459874",
            address: {
                postalcode: "06462000",
                street: "Rua Adoniram Barbosa",
                number: "365",
                details: "casa 3",
                district: "Parque Imperial",
                city_state: "Barueri/SP"
            },
            delivery_method: "Moto",
            cnh: "cnh-digital.jpg"

        }
        return data
    }
}