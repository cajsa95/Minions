<<<<<<< HEAD
$("#translate-form").on("submit", function(e) {
            e.preventDefault();

            //hämtar texten som användaren skrivit in och sparar i en variabel
            var text = $("#text").val();

            //anrop - skickar användarens input för översättning
            $.ajax({
                url: "http://api.funtranslations.com/translate/minion.json",
                type: "GET",
                dataType: "JSON", //svar från API

            }).done(function(data) {
                console.log(data);

            }).fail(function(data) {
                    console.log("Funkade inte!");
                }


                //om användaren inte angivit någon text läggs följande klass för felmeddelande på
                if (text == "") {
                    $("#text").addClass("is-invalid");
                    return false;
                }
            });



        //när användaren börjar skriva i textfältet så ska felmeddelandet försvinna
        $("#text").on("keyup", function() {
            if ($(this).val() == "") {
                $("#text").addClass("is-invalid");
            } else {
                $("#text").removeClass("is-invalid");
            }
        });
=======
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

//när användaren börjar skriva i textfältet så ska felmeddelandet försvinna
$("#text").on("keyup", function(){
  if($(this).val() == ""){
    $("#text").addClass("is-invalid");
  } else{
    $("#text").removeClass("is-invalid");
  }
});

var translated = 'Banana I want a banana';

document.getElementById('play').addEventListener("click", function(){responsiveVoice.speak(translated, "Indonesian Female", {pitch: 1.7}, {volume: 1});}, false);
>>>>>>> master
