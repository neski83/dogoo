$(function() {
    //hacemos todas las precargas, llamando a una única función
    loadMain();

    function loadMain(){
        $sexSelect = $('#sexo');
        $razaSelect = $('#raza');
        loadSexSelect();
        cargarSelectDeRazas();    
    }

    /* 
    * precargamos el selector de sexos
    * llamando al servicio js que a su vez llama al back end y trae los sexos
    */
    function loadSexSelect(){
        var sexServices = new SexService();
        sexServices.getSexs().then(function(sexs) {
          sexs.forEach(function(sex) {
            $sexSelect.append($('<option>').val(sex.id).text(sex.name));
          });
        });
    }    

    function cargarSelectDeRazas(){
        var razaServices = new RazaService();
        razaServices.getRazas().then(function(razas) {
            razas.forEach(function(raza) {
                $razaSelect.append($('<option>').val(raza.id).text(raza.raza));
          });
        });
    }
});