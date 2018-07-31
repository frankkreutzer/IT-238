/*   
 *   Frank Kreutzer - IT 238 Assingment 1: Currency Converter
 *
 *   
 */


$(function () {
    var dice = new DiceSet();
    var sideCount, diceCount, rollOutcome, setTotals, totalsAvg;
    $('#diceCount').prop('selectedIndex', 1);        
    $('#sideCount').prop('selectedIndex', 5);        

    $("#diceRoll").click(function () {
        rollOutcome = dice.roll();
        console.log(rollOutcome);
        setTotals = dice.history;
        totalsAvg = dice.getAverage();
        
        $("#outcomeArea").html("<b>Current Rolled Dice: </b>" + rollOutcome.toString());
        $("#totalsArea").html("<b>Roll Sets History: </b>" + setTotals.toString());
        $("#avgArea").html("<b>Rolls Average: </b>" + totalsAvg.toFixed(2));
    });
    
    $("#setDice").click(function () {
        sideCount = Number($("#sideCount").val());
        diceCount = Number($("#diceCount").val());
        dice.setNumSides(sideCount);
        dice.setDiceSetSize(diceCount);
    });
    
    $("#reset").click(function () {
        dice.reset();
        $("#outcomeArea").html("<b>Current Rolled Dice: </b>");
        $("#totalsArea").html("<b>Roll Sets History: </b>");
        $("#avgArea").html("<b>Rolls Average: </b>");
        
        $('#diceCount').prop('selectedIndex', 1);        
        $('#sideCount').prop('selectedIndex', 5); 
    });
});

