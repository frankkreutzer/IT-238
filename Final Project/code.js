/* 
    Frank Kreutzer
    JS code for sports.html
    Read the project.txt for walk through of the program
*/

$(function () {
    // initialization code when DOM is ready

    //hides sections of the page
    $("#step2").hide();
    $("#summary").hide();

    //array of the auto completed sports
    var sportsComplete = ["archery", "badminton", "baseball", "softball", "football", "soccer", "volleyball", "basketball", "golf", "hockey", "swimming", "running", "track and field", "gymnastics", "dance", "rowing", "tennis", "wrestling", "weightlifting", "karate", "lacrosse", "cricket", "polo", "skating", "shooting", "handball", "fencing", "cycling", "boxing", "cheerleading", "surfing", "snowboarding", "dodgeball", "jujutso", "sumo", "taekwondo", "paintball", "pocket billiards", "pool", "fishing", "skiing", "sailing", "luge", "bobsleigh", "racquetball"];
    $("#sportName").autocomplete({
        source: function (request, response) {
            var matcher = new RegExp("^" + $.ui.autocomplete.escapeRegex(request.term), "i");
            response($.grep(sportsComplete, function (item) {
                return matcher.test(item);
            }));
        }
    });

    var sportClick = 0;
    var sportItem;
    $("#addSport").click(function () {
        sportClick++;
        var sport;
        sport = $("#sportName").val();
        sportItem = '<li>' + sport + '</li>';


        //takes the first sport and replaces the holding text
        if (sportClick === 1) {
            $("#sportList").html(sportItem);
            //$("#sportList").html(sport + '<br>');
        }
        //any other sports will be added to the first
        else {
            $("#sportList").append(sportItem);
            //$("#sportList").append(sport + '<br>');
        }

        //allows the sport items become draggable
        $("#sportList li").draggable({
            helper: "clone"
        }).css("cursor", "pointer");
    });


    $("#step2Btn").click(function () {
        $("#step2").show();
    });

    //allows the sport items to be dropped into the cart
    $("#cart").droppable({
        tolerance: "intersect",
        drop: function (evt, ui) {
            var obj;
            $("#cart").css("height", "auto");
            obj = ui.draggable;
            console.log("dropped!");
            $("#cart").append("<li>" + obj.html() +
                " (<a href='dummy.html' class='remove'>Remove</a>)" +
                "</li>");
        }
    });

    //ability to remove a sport item
    $("#cart").on("click", "a.remove", function () {
        console.log("Remove element!");
        $(this).parent().remove();
        return false;
    });

    //gets the items from the cart and displays them in a summary statement
    var cartItem, cartSport;
    var sportLst = [];
    getSports = function () {
        $("#summary").show();
        $("#cart li").each(function () {
            cartItem = $(this).text()
            cartSport = (cartItem.substring(0, cartItem.length - 9));
            console.log(cartSport);
            sportLst.push(cartSport);
        });
        $("#summaryTxt").html("These are the sports that you say you've played: " + "<strong>" + sportLst + "</strong>");
    }
});
