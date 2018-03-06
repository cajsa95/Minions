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

var translated = 'Banana I want a banana';

document.getElementById('play').addEventListener("click", function() { responsiveVoice.speak(translated, "Indonesian Female", { pitch: 1.7 }, { volume: 1 }); }, false);