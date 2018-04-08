$(function() {
    //hacemos todas las precargas, llamando a una única función
    loadMain();

    function loadMain(){
        $sexSelect = $('#sexo');
        $razaSelect = $('#raza');
        $localidadSelect = $('#localidad');
        $departamentoSelect = $('#departamento');
        $transaccionSelect = $('#transaccion');
        loadSexSelect();
        cargarSelectDeRazas();    
        cargarSelectDeLocalidad();
        cargarSelectDeTransaccion();
    }

    /* 
    * precargamos el selector de sexos
    * llamando al servicio js que a su vez llama al back end y trae los sexos
    */
    function loadSexSelect(){
        var sexServices = new SexService();
        sexServices.getSexs().then(function(sexs) {
          sexs.forEach(function(sexo) {
            $sexSelect.append($('<option>').val(sexo.id_sexo).text(sexo.sexo));
          });
        });
    }    

    function cargarSelectDeRazas(){
        var razaServices = new RazaService();
        razaServices.getRazas().then(function(razas) {
            razas.forEach(function(raza) {
                $razaSelect.append($('<option>').val(raza.id_raza).text(raza.raza));
          });
        });
    }

    function cargarSelectDeLocalidad(){
        var provinciasServices = new ProvinciasService();
        provinciasServices.getUbicacion().then(function(localidades) {
            localidades.forEach(function(localidad) {
                $localidadSelect.append($('<option>').val(localidad.id_provincia).text(localidad.provincia));
          });
        });
    }

    function cargarSelectDeTransaccion(){
        var transaccionServices = new TransaccionService();
        transaccionServices.getTransacciones().then(function(transaccion) {
            transaccion.forEach(function(transaccion) {
                $transaccionSelect.append($('<option>').val(transaccion.id_tipoTransaccion).text(transaccion.tipoTransaccion));
          });
        });
    }

    $('#localidad').change(function(){
        var id_provincia = $localidadSelect.val();
        var departamentosService = new DepartamentosService();
        departamentosService.getDepartamentoDeProvincia(id_provincia).then(function(departamentos) {
            departamentos.forEach(function(departamento) {
                $departamentoSelect.append($('<option>').val(departamento.id_localidad).text(departamento.localidad));
          });
        });
    });
});