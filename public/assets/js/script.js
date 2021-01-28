$(document).ready(function() {
  $(".devour-form").on("submit", function(event) {
    event.preventDefault();

    $.ajax({
        method: "PUT",
        url: "/api/burgers/" + burger_id
    }).then(function(data) {
        location.reload();
    });
  });  
})