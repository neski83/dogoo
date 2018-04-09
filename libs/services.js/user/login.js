class LoginService {
    constructor() {
        this.serviceUrl = "./back/services/user/getLogin.php";
    }

    getLogin(){
        return $.getJSON( this.serviceUrl)   
    }
}