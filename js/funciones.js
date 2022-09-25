// var opcion_1 = new Array("YAD", "YHI", "SCLD", "SCLI", "FD", "FI");
// var opcion_2 = new Array("MSD", "MSI");
// var opcion_3 = new Array("MSD", "MSI", "FD", "FI");

$(document).ready(function () {
  $("#sale").keyup(function() {
  //console.log("hola")
  // var value = $( this ).val();
  // var value=$('#in').val()-$('#out').val()
  $("#dif").val($('#sale').val()-$('#entra').val());
})

$("#entra").keyup(function() {
    //var value = $( this ).val();
    // var value=$('#in').val()-$('#out').val()
    $("#dif").val(  );
  })

  $("#acceso").change(function () { 
    var acceso=$(this).val()
    console.log(acceso)
    if(acceso==0){
      $("#op").html("<option value='0' style='background-color:red;'>Seleccione tipo de acceso!</option>")
    }else if(acceso==1){
      $("#op").html("<option value='1'>YAD</option><option value='2'>YHI</option><option value='3'>SCLD</option><option value='4'>SCLI</option><option value='5'>FD</option><option value='6'>FI</option>")
    }else if(acceso==2){
      $("#op").html("<option value='7'>MSD</option><option value='8'>MS</option>")
    }else{
      $("#op").html("<option value='7'>MSD</option><option value='8'>MS</option><option value='5'>FD</option><option value='6'>FI</option>")
    }
  });
  //$("#size").html("<option value='test'>item1: test 1</option><option value='test2'>item1: test 2</option>");
});
function setTwoNumberDecimal() {
  this.value = parseFloat(this.value).toFixed(3);
}