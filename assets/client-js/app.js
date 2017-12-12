$( "#contact-toggle" ).change(function() {

    $('.extended-details').hide();

    $('.phone').toggle();
    $('.email').toggle();
});

$('.table > tbody > tr').click(function() {
    $('.extended-details').hide();

    $(this).closest("tr")
        .find(".extended-details")
        .toggle();
});
