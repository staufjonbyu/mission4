﻿$("#response").click(function () {
    var assignGrade = $("#aGrade").val() * 0.5;
    var groupProjGrade = $("#gGrade").val() * .1;
    var quizGrade = $("#qGrade").val() * .1;
    var midtermGrade = $("#mGrade").val() * .1;
    var finalExamGrade = $("#fGrade").val() * .1;
    var intexGrade = $("#iGrade").val() * .1;


    var finalGrade = (assignGrade) + (groupProjGrade) + (quizGrade) +
        (midtermGrade) + (finalExamGrade) + (intexGrade);

    var gradeLetter = "f";

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
    $('#finalGrade').html("Wow you got a(n): " + gradeLetter + " in this class! Your final grade is: " + finalGrade.toFixed(2) + "%");

})