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
});