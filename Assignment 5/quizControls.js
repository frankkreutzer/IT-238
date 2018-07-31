/*
 * Quiz controls for the space quiz
 * Controls the hint buttons and a bit extra
*/
$(function () {
    //Hint 1 Text Hidden
    $(".hintText1").hide();
    $(".hintText2").hide();
    $(".hintText3").hide();
    $(".hintText4").hide();
    $(".hintText5").hide();

    //Hint 2 Buttons Hidden
    $("#hint2Btn1").hide();
    $("#hint2Btn2").hide();
    $("#hint2Btn3").hide();
    $("#hint2Btn4").hide();
    $("#hint2Btn5").hide();

    var attemptCount;
    attemptCount = 0;


    $("#submitButton").click(function () {
        attemptCount = attemptCount + 1;
        var points;
        points = 0;
        var q5Points = 8;

        // document.getElementById("results").value = "";
        $("#results").val("");

        // Question 1: check if Earth is checked
        if ($('#q1Earth').prop("checked")) {
            points += 1;
            $('#results').val(
                $('#results').val() + "Question one is correct!" + "\n"
            );
        } else {
            $('#results').val(
                $('#results').val() + "Question one is incorrect!" + "\n"
            );
        }

        // Question 2: check if 8 is checked
        if ($('#q2Eight').prop("checked")) {
            points += 1;
            $('#results').val(
                $('#results').val() + "Question two is correct!" + "\n"
            );
        } else {
            $('#results').val(
                $('#results').val() + "Question two is incorrect!" + "\n"
            );
        }

        // Question 3: check if True is checked
        if ($('#q3True').prop("checked")) {
            points += 1;
            $('#results').val(
                $('#results').val() + "Question three is correct!" + "\n"
            );
        } else {
            $('#results').val(
                $('#results').val() + "Question three is incorrect!" + "\n"
            );
        }

        // Question 4: check if ALL are checked
        if ($('#q4Jupiter').prop("checked") && $('#q4Saturn').prop("checked") && $('#q4Uranus').prop("checked") && $('#q4Neptune').prop("checked")) {
            points += 1;
            $('#results').val(
                $('#results').val() + "Question four is correct!" + "\n"
            );
        } else {
            $('#results').val(
                $('#results').val() + "Question three is incorrect!" + "\n"
            );
        }

        // Question 5: check if Mercury = 1
        if ($('#q5Mercury').val() === "1" && $('#q5Venus').val() === "2" && $('#q5Earth').val() === "3" && $('#q5Mars').val() === "4" && $('#q5Jupiter').val() === "5" && $('#q5Saturn').val() === "6" && $('#q5Uranus').val() === "7" && $('#q5Neptune').val() === "8") {
            points += 8;
            $('#results').val(
                $('#results').val() + "Question five is correct!" + "\n"
            );
            $('#results').val(
                $('#results').val() + "You earned  " + points + "/" + "12 points" + "\n"
            );

            $('#results').val(
                $('#results').val() + "Number of attempts: " + attemptCount + "\n"
            );
        } /*else if ($('#q5Mercury').val() != "1") {
            q5Points--;
        } else if ($('#q5Venus').val() != "2") {
            q5Points--;
        } else if ($('#q5Earth').val() != "3") {
            q5Points--;
        } else if ($('#q5Mars').val() != "4") {
            q5Points--;
        } else if ($('#q5Jupiter').val() != "5") {
            q5Points--;
        } else if ($('#q5Saturn').val() != "6") {
            q5Points--;
        } else if ($('#q5Uranus').val() != "7") {
            q5Points--;
        } else if ($('#q5Neptune').val() != "8") {
            q5Points--;
        }*/
        else {
            //var totalPoints = points + q5Points;
            $('#results').val(
                $('#results').val() + "Question five is incorrect!" + "\n"
            );

            $('#results').val(
                $('#results').val() + "You earned  " + points + "/" + "12 points" + "\n"
            );

            $('#results').val(
                $('#results').val() + "Number of attempts: " + attemptCount + "\n"
            );
        }
    });

    /* Question 1 Hint Controls */
    //Hint 1
    $("#hintBtn1").click(function () {
        $(".hintText1").show();
        $("#hint2Btn1").show();
    });
    //Hint 2
    $("#hint2Btn1").click(function () {
        $("#q1Hidden").hide();
    });

    /* Question 2 Hint Controls */
    //Hint 1
    $("#hintBtn2").click(function () {
        $(".hintText2").show();
        $("#hint2Btn2").show();
    });
    //Hint 2
    $("#hint2Btn2").click(function () {
        $("#q2Hidden").hide();
    });

    /* Question 3 Hint Controls */
    $("#hintBtn3").click(function () {
        $(".hintText3").show();
    });

    /* Question 4 Hint Controls */
    $("#hintBtn4").click(function () {
        $(".hintText4").show();
    });

    /* Question 5t Hint Controls */
    $("#hintBtn5").click(function () {
        $(".hintText5").show();
    });
});
