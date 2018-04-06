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
        function(data);
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
    $("#login").click(function(){
        var email = $("#email").val();
        var password = $("#password").val();
        if( email =='' || password ==''){
        $('input[type="text"],input[type="password"]').css("border","2px solid red");
        $('input[type="text"],input[type="password"]').css("box-shadow","0 0 3px red");
        alert("Please fill all fields...!!!!!!");
        }else {
        function(data) {
        if(data=='Invalid Email.......') {
        $('input[type="text"]').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
        $('input[type="password"]').css({"border":"2px solid #00F5FF","box-shadow":"0 0 5px #00F5FF"});
        alert(data);
        }else if(data=='Email or Password is wrong...!!!!'){
        $('input[type="text"],input[type="password"]').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
        alert(data);
        } else if(data=='Successfully Logged in...'){
        $("form")[0].reset();
        $('input[type="text"],input[type="password"]').css({"border":"2px solid #00F5FF","box-shadow":"0 0 5px #00F5FF"});
        alert(data);
        } else{
        alert(data);
        }
        });
        }
        });
});