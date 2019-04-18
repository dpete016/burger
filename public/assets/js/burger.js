$(function() {
    
    $(".nomburger").on("click", function(event){
        event.preventDefault();

        var id = $(this).data("id");
        var devouredState = {
            devoured: 1
        };

        $ajax("/api/burgers" + id, {
            type: "PUT",
            data: devouredState
        }).then(
            function() {
                console.log("Burger nommed", devouredState);
                location.reload();
            }
        );
        
    });

    $(".create-form").on("submit", function(event) {

        event.preventDefault();

        var newburger = {
            burger_name: $("#newburger").val().trim(),
            devoured: 0,
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newburger
        }).then(
            function() {
                console.log("Made new burger");
                location.reload();
            }
        );

    });

    $(".delete-burger").on("click", function(event) {
        var id = $(this).data("id");

        $.ajax("/api/burgers/" + id, {
            type: "DELTE"
        }).then(
            function() {
                console.log("delete burger", id);

                location.reload();
            }
        );
    });
});