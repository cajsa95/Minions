$("#translate-form").on("submit", function(e) {
    e.preventDefault();

    //hämtar texten som användaren skrivit in och sparar i en variabel
    var text = $("#text").val();

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

//sparar input i variabel
var translated = 'Banana I want a banana';

//väljer ut Id och vid klick körs speak-funktionen med valda parametrar
document.getElementById('play').addEventListener("click", function() { responsiveVoice.speak(translated, "Indonesian Female", { pitch: 1.7 }, { volume: 1 }); }, false);

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

});
