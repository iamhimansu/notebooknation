$(".input").on("focusin", function(i) {
    $(this).children(".input-caption").addClass("caption-title")
}), $(".input").on("click", function(i) {
    $(this).children(".input-caption").addClass("caption-title"), $(this).children("input").focus()
}), $(".input").on("focusout", function(i) {
    var t = $(this).children("input").val();
    0 < $.trim(t).length ? $(this).children(".input-caption").addClass("caption-title") : $(this).children(".input-caption").removeClass("caption-title")
});