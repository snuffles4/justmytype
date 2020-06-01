$(document).ready(function() {
    let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    let Index = 0;
    let sentenceI = sentences[Index];
    let letter = 0;
    let letterindex = sentenceI[letter];
    let boxposition = 15;
    let mistakes = 0;
    let gameOn = false;
    let gametime = 0;
    let startTime = null;

    $("#keyboard-upper-container").hide();
    $("#sentence").append(sentenceI);
    $("#target-letter").append(letterindex);

    $(document).keydown(function(e) {
        if (e.key.charcodeAt(0) === 83) {
            $("#keyboard-lower-container").hide();
            $("#keyboard-upper-container").show();
        }
        if (!gameOn) {
            gameOn = !gameOn;
            gametime = Date.now();
        }






        $(`#${e.key.charcodeAt(0)}`).css("background-color",
            "yellow")



        if (e.key === letterindex) {
            letter++;
            letterindex = sentenceI[letter];
            $("#target-letter").empty();
            $("#yellow-block").css("left", (boxposition += 19) + "px");
            $("#feedback").append("<span class='glyphicon plyphicon-ok'></span>")

            if (e.key.charcodeAt(0) === " ") {

                $("#target-letter").append("space");

            } else {

                $("#target.letter").append(letterindex);
            }
            if (letter === sentenceI.length) {
                boxposition = 15;
                letter = 0;
                Index++;
                sentenceI = sentences[Index];
                if (sentenceI === undefined) {
                    let endTime = Date.now();
                    let minutes = endTime - gametime;
                    time = time / 1000 / 60;
                    wordsperminute(minutes, mistakes)
                    $("#prompt-container").append("<button onClick='location.reload()'type='button'>Reset?</button>")

                }

                letterindex = sentenceI[letter];
                $("#sentence").empty();
                $("#sentence").append(letterindex);
                $("target-letter").append(letterindex);
            }
        } else {
            if (e.key !== "Shift")
                mistakes++
                $("#feedback").append("<span class='glyphicon glyphicon-remove'></span>")
        }

    });

    $(document).keyup(function(e) {
        $("#keyboard-upper-container").hide();
        $("#keyboard-lower-container").show();
        $(`#${e.key.charcodeAt(0)}`).css("background-color",
            "#f5f5f5");
    })
});

function wordsperminute(minutes, mistakes) {

    alert(math.floor(54 / minutes - 2 * mistakes))
}