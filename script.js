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
        console.log("Översättning funkar");
        $("#translated-text").text(data.contents.translated);
        //sparar användarens input i varaiabeln
        var translated = data.contents.translated;
        console.log(translated);
        //läser upp användarens input
        document.getElementById('play').addEventListener("click", function() { responsiveVoice.speak(translated, "Indonesian Female", { pitch: 1.7 }, { volume: 1 }); }, false);



    }).fail(function(data) {
        console.log("Översättning funkar INTE");
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


//För att få fram ett random citat
$("#minion-quote").on("click", function() {
    var q = quotes.Quotes;

    //Denna tar ut ETT random citat ur
    var quote = q[Object.keys(q)[Math.floor(Math.random() * Object.keys(q).length)]];
    console.log(quote);

    /*
    //Denna loopar ut alla citaten från filen
    for( var i=0; i < q.length; i++){
      console.log(q[i].Quote);
    }*/

    //Tömmer diven för att sedan lägga till den nya citatet i en paragraf i diven
    $("#quote-output").html("");
    $("#quote-output").append("<p>" + quote.Quote + "<p>");

});