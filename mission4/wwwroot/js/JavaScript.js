$("#response").click(function () {
    //pull each form value and assign to a variable
    var assignGrade = $("#aGrade").val() * 0.5;
    var groupProjGrade = $("#gGrade").val() * .1;
    var quizGrade = $("#qGrade").val() * .1;
    var midtermGrade = $("#mgrade").val() * .1;
    var finalExamGrade = $("#fgrade").val().val() * .1;
    var intexGrade = $("#igrade").val().val() * .1;

    //get final grade for project
    var finalGrade = (assignGrade) + (groupProjGrade) + (quizGrade) +
        (midtermGrade) + (finalExamGrade) + (intexGrade);
    $('input[asp-for="FinalGrade"]').val(finalGrade.toFixed(2));
    //initate var gradeLetter
    var gradeLetter = "f";
    //if statement to update gradeletter to actual value
    if (finalGrade >= 94) {
        gradeLetter = "A";
    }
    else if (finalGrade >= 90) {
        gradeLetter = "A-";
    }
    else if (finalGrade >= 87) {
        gradeLetter = "B+";
    }
    else if (finalGrade >= 84) {
        gradeLetter = "B";
    }
    else if (finalGrade >= 80) {
        gradeLetter = "B-";
    }
    else if (fianlGrade >= 77) {
        gradeLetter = "C+";
    }
    else if (finalGrade >= 74) {
        gradeLetter = "C";
    }
    else if (finalGrade >= 70) {
        gradeLetter = "C-";
    }
    else if (finalGrade >= 67) {
        gradeLetter = "D+";
    }
    else if (finalGrade >= 64) {
        gradeLetter = "D";
    }
    else if (finalGrade >= 60) {
        gradeLetter = "D-";
    }
    else {
        gradeLetter = "E";
    };
    //print to html
    $alert(finalGrade)

})
