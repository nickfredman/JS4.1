    $(document).on('ready', function() {
    $('#button').click(function() {
        $('body').append("Hello World");
    });
    $('#button2').click(function() {
        $('body').append("<h1>Some text</h1>");
    });
    $('#button3').click(function() {
        $('body').append("<ul><li></li><li></li><li></li></ul>");
    });

    // Part 2 

    $('.part2 p').hover(
        function() {
        $(this).addClass("pink-text")
    },
    function() {
        $(this).removeClass("pink-text");
    });
    $('.heading').append("!");
    $('a').click(function(event) {
        var answer = confirm("Are you sure you want to go to this scary place?");
        if (answer === false) {
        event.preventDefault();
        $('a').remove();
        };
    });

    // Part 3

    $('.giant-button').click(function() {
        $('.giant-button').fadeOut(500);
        $('body').append('<div class="modal"><div class="fixed">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident sequi, mollitia doloribus, voluptas culpa adipisci illo pariatur labore id blanditiis laboriosam optio rem ratione ut tempora autem rerum eaque aspernatur.<a id="close" href="#">x</a></div></div>').hide().fadeIn(500);
        $('#close').click(function() {
            $('.fixed, .modal').remove();
            $('.giant-button').fadeIn(500);
        });
    });

    });