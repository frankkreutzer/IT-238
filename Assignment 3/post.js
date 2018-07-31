// posted the the results from the search, and applies the conditions for what information is
// to be displayed based on the user preferences


// This function is called when the response has returned
postResult = function (list) {
    var nameList, i;
    if (list.length > 0 && $('#department').is(':checked') && $('#position').is(':checked') && $('#salary').is(':checked')) {
        if (list[0].salary === null) {
            list[0].salary = "NO SALARY";
        }
        $("#result").html(list[0].name + "<br />" + list[0].department + ": " + list[0].title + "<br />" + list[0].salary);
    }
    else if (list.length > 0 && $('#department').is(':checked') && $('#position').is(':checked')) {
        $("#result").html(list[0].name + "<br />" + list[0].department + ": " + list[0].title);
    }
    else if (list.length > 0 && $('#department').is(':checked') && $('#salary').is(':checked')) {
        $("#result").html(list[0].name + "<br />" + list[0].department + "<br />" + list[0].salary);
    }
    else if (list.length > 0 && $('#position').is(':checked') && $('#salary').is(':checked')) {
        $("#result").html(list[0].name + "<br />" + list[0].title + "<br />" + list[0].salary);
    }
    else if (list.length > 0 && $('#department').is(':checked')) {
        $("#result").html(list[0].name + "<br />" + list[0].department);
    }
    else if (list.length > 0 && $('#position').is(':checked')) {
        $("#result").html(list[0].name + "<br />" + list[0].title);
    }
    else if (list.length > 0 && $('#salary').is(':checked')) {
        $("#result").html(list[0].name + "<br />" + list[0].salary);
    }
    else if (list.length > 0) {
        $("#result").html(list[0].name);
    }
    else {
        $("#result").html("No matches found");
    }

    nameList = "";
    for (i = 0; i < list.length; i += 1) {
        if (list[i].salary === null) {
            list[i].salary = "NO SALARY";
        }
        /*nameList += list[i].name;
        
        if ($('#department').is(':checked')) {
            nameList += ", " + list[i].department;
        }
        if ($('#position').is(':checked')) {
            nameList += ": " + list[i].title;
        }
        if ($('#salary').is(':checked')) {
            nameList += ", " + list[i].salary + "<br>";
        }*/
        
        
        if ($('#department').is(':checked') && $('#position').is(':checked') && $('#salary').is(':checked')) {
            nameList += "<li>" + list[i].name + ", " + list[i].department + ": " + list[i].title + ", " + list[i].salary + "</li>" + "<br />";
        } 
        else if ($('#department').is(':checked') && $('#position').is(':checked')) {
            nameList += "<li>" + list[i].name + ", " + list[i].department + ": " + list[i].title + "</li>" + "<br />";
        } 
        else if ($('#department').is(':checked') && $('#salary').is(':checked')) {
            nameList += "<li>" + list[i].name + ", " + list[i].department + ", " + list[i].salary + "</li>" + "<br />";
        } 
        else if ($('#position').is(':checked') && $('#salary').is(':checked')) {
            nameList += "<li>" + list[i].name + ", " + list[i].title + ", " + list[i].salary + "</li>" + "<br />";
        } 
        else if ($('#department').is(':checked')) {
            nameList += "<li>" + list[i].name + ", " + list[i].department + "</li>" + "<br />";
        } 
        else if ($('#position').is(':checked')) {
            nameList += "<li>" + list[i].name + ", " + list[i].title + "</li>" + "<br />";
        } 
        else if ($('#salary').is(':checked')) {
            nameList += "<li>" + list[i].name + ", " + list[i].salary + "</li>" + "<br />";
        } 
        else if (list.length > 0) {
            nameList += "<li>" + list[i].name + "</li>" + "<br />";   
        }
        else {
            nameList += "No matches found";
        }
    }
    $("#names").html(nameList);
};

submit = function () {
    //var searchWord = document.getElementById("key-word").value;
    var searchWord = $("#key-word").val();
    query = new ChicagoEmployeesQuery(searchWord);
    $("#result").html("searching...");
    query.getList(postResult);
};

$(function () {
    //check the checkboxes by default
    $("#department").prop('checked', true);
    $("#position").prop('checked', true);
    $("#salary").prop('checked', true);

    $("#start").click(submit);
});
