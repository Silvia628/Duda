const axios = require( 'axios' );
var body = {
    "documents": [

        {
            "id" : "1",
            "language" : "es",
            "text" : "En una carretera iban muchos coches y también motocicletas"
        }
    ]
}
var dirección= "https://docs.microsoft.com/es-mx/azure/cognitive-services/text-analytics/how-tos/text-analytics-how-to-entity-linking?tabs=version-3-preview";
axios.post( direccion, body, {
    headers: {
        "Ocp-Apim-Subscription-Key" : "8b4c7829af844bc699425c01e131246a",
        "Content-Type" : "application/json"
    }
})
.then( respuesta=> { console.log( respuesta.data ) })
.catch( error => { console.log( error.response.data ) } );