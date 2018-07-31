/*   
 *   Frank Kreutzer - IT 238 Assingment 1: Currency Converter
 *
 *   JavaScript file where, when the convert button is hit,
 *   it will convert the given USD base amount to the selected
 *   conversion currency amount
 */

$(function () {
    $("#convertButton").click(function () {
        var baseAmount, convertCurr, convertAmount, message, currText;
        baseAmount = Number($("#baseAmount").val());
        convertCurr = $("#convertCurr").val();

        if (convertCurr === "cad") {
            convertAmount = baseAmount * 1.28685;
            currText = "CAD";
        } else if (convertCurr === "eur") {
            convertAmount = baseAmount * 0.80564;
            currText = "EUR";
        } else if (convertCurr === "gbp") {
            convertAmount = baseAmount * 0.70407;
            currText = "GBP";
        } else if (convertCurr === "mxn") {
            convertAmount = baseAmount * 18.4051;
            currText = "MXN";
        } else if (convertCurr === "rub") {
            convertAmount = baseAmount * 57.0933;
            currText = "RUB";
        } else {
            convertAmount = baseAmount * 373;
            currText = "ZWD";
        }

        message = "The amount of $" + baseAmount.toFixed(2) + " (USD)" + " is equal to " + convertAmount.toFixed(2) + " " + currText;

        $("#resultArea").html(message);
    });
});
