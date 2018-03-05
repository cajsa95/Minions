$("#translate-form").on("submit", function(e){
  e.preventDefault();

  //hämtar texten som användaren skrivit in och sparar i en variabel
  var text = $("#text").val();

  //om användaren inte angivit någon text läggs följande klass för felmeddelande på
  if (text == ""){
    $("#text").addClass("is-invalid");
    return false;
  }


});


$("#text").on("keyup", function(){
  if($(this).val() == ""){
    $("#text").addClass("is-invalid");
  } else{
    $("#text").removeClass("is-invalid");
  }
});
