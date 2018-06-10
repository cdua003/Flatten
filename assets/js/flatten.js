(function ($) {
    //To hide error message box and output box while user changed input
    $('#inputArray').bind('input', function () {
        $("#errorMsg").hide();
        $("#output").hide();
    });

    //To start flatten
    $("#flattenBtn").click(function () {
        var inputTxt = $("#inputArray").val();
        //return if input is empty
        if (!inputTxt || inputTxt === "") {
            return;
        }
        //convert string to array object
        var value = convertToArray(inputTxt);
        //return with incorrect input format
        if (!value) {
            $("#errorMsg").show();
            $("#output").hide();
            return;
        }
        //flatten and show the output
        $("#output").show();
        $("#output-result").text("Output: " + JSON.stringify(flatten(value, $('input[name=sortingOption]:checked', '#mainForm').val())));
    });

})(jQuery);