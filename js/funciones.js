$("#guardar").click(function(){
  alert("hola")
})
//funcion florencia
var opcion_1 = new Array("YAD", "YHI", "SCLD", "SCLI", "FD", "FI");
var opcion_2 = new Array("MSD", "MSI");
var opcion_3 = new Array("MSD", "MSI", "FD", "FI");

function seleccionar() {
var acceso;
acceso = document.RegistroPacientes.acceso[document.RegistroPacientes.acceso.selectedIndex].value;
if (acceso != 0) {
  mis_opts = eval("opcion_" + acceso);
  num_opciones = mis_opts.length;
  document.RegistroPacientes.opciones.length = num_opciones;
  for (i = 0; i < num_opciones; i++) {
    document.RegistroPacientes.opciones.options[i].value = mis_opts[i];
    document.RegistroPacientes.opciones.options[i].text = mis_opts[i];
  }
} else {
  document.RegistroPacientes.opciones.length = 0;
  document.RegistroPacientes.opciones.value.options[0].value = "-"
  document.RegistroPacientes.opciones.value.options[0].text = "-"

}
document.RegistroPacientes.opciones.options[0].selected = true;
}
//textarea



//jquery para la diferencia
$("#sale")
.keyup(function() {
  //var value = $( this ).val();
  // var value=$('#in').val()-$('#out').val()
  $("#dif").val($('#entra').val() - $('#sale').val());
})
.keyup();


$("#entra")
.keyup(function() {
  //var value = $( this ).val();
  // var value=$('#in').val()-$('#out').val()
  $("#dif").val($('#entra').val() - $('#sale').val());
})
.keyup();
function setTwoNumberDecimal() {
  this.value = parseFloat(this.value).toFixed(3);
}
