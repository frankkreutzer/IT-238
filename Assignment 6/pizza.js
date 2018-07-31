//Controls for the pizza-checkout.html form
$(function () {
    $("#paymentMethod").hide();
    $("#driverTip").hide();

    $("#credit").click(function () {
        $("#paymentMethod").slideDown();
    });

    $("#cash").click(function () {
        $("#paymentMethod").slideUp();
    });

    $("#delivery").click(function () {
        if ($('#cash').prop('checked')) {
            $("#driverTip").slideDown();
        }
        else if ($('#pick-up').prop('checked')) {
            $("#driverTip").slideUp();
        }
    });

    $("form").submit(function () {
        // alert("Hey!");
        if ($("#address").val().length === 0) {
            alert("An address is required!");
            $("#addressPanel").append("*An address is required").css("color", "red").css("font-weight", "bold");
            return false;
        }

    });

    $("#user").blur(function () {
        console.log("Demo of the blur event");
    });

});
