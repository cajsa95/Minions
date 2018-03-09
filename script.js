$("#translate-form").submit(function(e) {
    e.preventDefault();

    //hämtar texten som användaren skrivit in och sparar i en variabel
    var userInput = $("#user-text").val();

    console.log(userInput);

    //översättnings-api:
    $.ajax({
        url: "http://api.funtranslations.com/translate/minion.json?text=" + userInput + "&api_key=4teLe8_dp3MVa_Y7FnRtbQeF",
        type: "POST",
        dataType: "JSON"

    }).done(function(data) {
        console.log("Funkar");
        $("#translated-text").text(data.contents.translated);

        //console.log(data.contents.translated);

    }).fail(function(data) {
        console.log("Funkar INTE");
    });

    //om användaren inte angivit någon text läggs följande klass för felmeddelande på
    if (userInput == "") {
        $("#user-text").addClass("is-invalid");
        return false;
    };
});

//när användaren börjar skriva i textfältet så ska felmeddelandet försvinna
$("#user-text").on("keyup", function() {
    if ($(this).val() == "") {
        $("#user-text").addClass("is-invalid");
    } else {
        $("#user-text").removeClass("is-invalid");
    }
});

//sparar input i variabel
var translated = 'Banana I want a banana';

<<<<<<< HEAD
//väljer ut Id och vid klick körs speak-funktionen med valda parametrar
document.getElementById('play').addEventListener("click", function() { responsiveVoice.speak(translated, "Indonesian Female", { pitch: 1.7 }, { volume: 1 }); }, false);

//hämtar quotes i json-filen
$("#minion-quote").on("click", function(e){
  console.log("hej");

  $.ajax({
    url: "quotes.json",
    contentType: false,
    dataType: "JSON"
  }).done(function(data){
    console.log(data);
  }).fail(function(data){
    console.log("hejdå");
  })
=======
document.getElementById('play').addEventListener("click", function() { responsiveVoice.speak(translated, "Indonesian Female", { pitch: 1.7 }, { volume: 1 }); }, false);

//För att få fram ett random citat
$("#minion-quote").on("click", function() {
  var q = quotes.Quotes;

  //Denna tar ut ETT random citat ur
  var quote = q[Object.keys(q)[Math.floor(Math.random()*Object.keys(q).length)]];
  console.log(quote);

  /*
  //Denna loopar ut alla citaten från filen
  for( var i=0; i < q.length; i++){
    console.log(q[i].Quote);
  }*/

  //Tömmer diven för att sedan lägga till den nya citatet i en paragraf i diven
  $("#quote-output").html("");
  $("#quote-output").append("<p>" + quote.Quote + "<p>");

>>>>>>> master

});
