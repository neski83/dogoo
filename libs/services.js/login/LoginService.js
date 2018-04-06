class LoginService {
    constructor() {
        this.serviceUrl = "./back/services/login/getLogin.php";
    }

    getLogin(){
        return $.getJSON( this.serviceUrl)   
    }
}