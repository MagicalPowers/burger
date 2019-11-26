//not quite sure what needs to be here. 

$(function () {
    $(".switch-devoured").on("click", function (event) {
        var id = $(this).data("id");
        var newDevoured = !$(this).data("newdevoured");
        var newDevouredState = {
            devoured: newDevoured
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                console.log("changed devoured to", newDevoured);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        var newBurger = {
            name: $("#burger").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new catburglar");
                location.reload();
            }
        );
    });
});
