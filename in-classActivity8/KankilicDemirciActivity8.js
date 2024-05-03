var languages = [
    "Python",
    "Java",
    "C++",
    "JavaScript",
    "Ruby",
    "C#",
    "Swift",
    "Objective-C",
    "PHP",
    "Go",
    "Rust",
    "Kotlin",
    "TypeScript",
    "Scala",
    "Perl",
    "R",
];

$(document).ready(function(){
    $('#birthday').datepicker();
    $( "#langs" ).autocomplete({
        source: languages
        });
});

