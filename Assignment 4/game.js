// Code for the Archaeology game
//
// Loaded by game.html
// Uses GameBoard object defined in board.js

$(function () {
    var digCount = 0;
    var successCount = 0;
    var ruinCount = 0;
    var digLocation;
    var playerLevel;

    board = new GameBoard();
    board.setBoard();

    tryDig = function (targetCell) {
        var targetObj = board.dig(targetCell);

        if (targetObj) {
            //alert('Success finding the ' + targetObj.name);
            $("#digAlert").html("Success finding the " + targetObj.name);

            if (targetObj.name === "Palace") {
                $("#cell" + targetCell).html('<img src="images/palace.png">');
                if (targetObj.successes === 5) {
                    ruinCount += 1;
                    alert("You completly excavated the Palace!")
                }
            } else if (targetObj.name === "Temple") {
                $("#cell" + targetCell).html('<img src="images/temple.png">');
                if (targetObj.successes === 4) {
                    ruinCount += 1;
                    alert("You completly excavated the Temple!")
                }
            } else if (targetObj.name === "Forum") {
                $("#cell" + targetCell).html('<img src="images/forum.png">');
                if (targetObj.successes === 4) {
                    ruinCount += 1;
                    alert("You completly excavated the Forum!")
                }
            } else if (targetObj.name === "House") {
                $("#cell" + targetCell).html('<img src="images/house.png">');
                if (targetObj.successes === 3) {
                    ruinCount += 1;
                    alert("You completly excavated the House!")
                }
            } else if (targetObj.name === "Hut") {
                $("#cell" + targetCell).html('<img src="images/hut.png">');
                if (targetObj.successes === 2) {
                    ruinCount += 1;
                    alert("You completly excavated the Hut!")
                }
            }
            successCount += 1;
            $("#successCount").html(successCount);
            $("#ruinCount").html(ruinCount);

        } else {
            //alert('Failure!');
            $("#digAlert").html("Fail - You just found more sand...");
            $("#cell" + targetCell).html('<img src="images/sand.png">');
        }
        
        if (digCount >= 50) {
            playerLevel = "rookie";
        }
        else if (digCount <= 30) {
            playerLevel = "professional";
        }
        else {
            playerLevel = "amateur";
        }
        
        if (ruinCount === 5) {
            alert("Congradulations, you won! It took you " + digCount + " attempts to excavate all the ruins! Based on your overall performace, you're a " + playerLevel + " archaeologist!");
        }
    }

    //code for the text input play style
    /*$("#digBtn").click(function () {
        digLocation = $("#digLoc").val();
        //console.log(digLocation);
        tryDig(digLocation);
        if (digLocation != "") {
            digCount += 1;
            $("#digCount").html(digCount);
        }
    });*/
    
    $(".square").click(function() {
        //console.log(this);
        console.log(tryDig(this.id.substring(4, 6)));
        digCount += 1;
        $("#digCount").html(digCount);
    });
});
