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

$(".saveBtn").on("click", function() {
  let event= $(this).siblings(".textValue").val();
  console.table(event); 
  localStorage.setItem(event);
  JSON.stringify(event);
});
