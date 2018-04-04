class TransaccionService {
    constructor() {
        this.serviceUrl = "./back/services/transaccion/getTransaccion.php";
    }

    getTransacciones(){
        return $.getJSON( this.serviceUrl)   
    }
}

