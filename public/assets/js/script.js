$(document).ready(function() {
    event.preventDefault();

    $.ajax({
        method: "PUT",
        url: "/burgers/"
    })
})