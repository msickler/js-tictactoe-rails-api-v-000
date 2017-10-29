function onSave() {
  $(function () {
    $("save").on("click", function() {
      var nextId = parseInt($(".js-next").attr("data-id")) + 1;
      $.get("/products/" + nextId + ".json", function(data) {
        $(".productName").text(data["name"]);
        $(".productPrice").text(data["price"]);
        $(".productDescription").text(data["description"]);
        $(".productInventory").text(data["inventory"]);
        // re-set the id to current on the link
        $(".js-next").attr("data-id", data["id"]);
      });
    });
  });
}

function onPrevious() {
  $(function () {
    $("#previous").on("click", function() {
      var prevId = parseInt($(".js-prev").attr("data-id")) - 1;
      $.get("/games/" + prevId + ".json", function(data) {
        $(".gameStatus").text(data["status"]);
        // re-set the id to current on the link
        $(".js-prev").attr("data-id", data["id"]);
      });
    });
  });
}

function onSubmit() {
  $(function () {
    $('form').submit(function(event) {
      //prevent form from submitting the default way
      event.preventDefault();
      var values = $(this).serialize();
      var posting = $.post('/games', values);
      posting.done(function(data) {
        var game = data;
        $("#postStatus").text(post["status"]);
        });
    });
  });
}
