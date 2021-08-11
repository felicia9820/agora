
//Javascript
document.getElementById("buttonClick").addEventListener('click', function() {
    var value = document.getElementById("password").value;
    console.log(value);
});

//jQuery
$("#buttonClick").on("click", function (event) {
    var newValue = $("#textId").val();
});

// var emailFormat = "/\S@\S+/";


// var someEmail = "feli@example.com";

// var validateEmail = emailFormat.match(someEmail) ? console.log('valid'):console.log('not valid');