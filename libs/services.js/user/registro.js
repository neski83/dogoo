class RegistroService {
    constructor() {
        this.serviceUrl = "./back/services/user/getRegistro.php";
    }

    getRegistro(){
        return $.getJSON( this.serviceUrl)   
    }
}