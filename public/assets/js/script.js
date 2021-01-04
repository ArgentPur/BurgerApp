$(document).ready(function() {
    event.preventDefault();

    $.ajax({
        method: "PUT",
        url: "/burgers/" + burger_id
    }).then(function(data) {
        location.reload();
    });
})