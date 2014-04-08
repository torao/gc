(function(){
  var screen = null;
  var screen_width = 400;
  var screen_height = 230;
  var heap_margin = 20;
  var heap_width = screen_width - heap_margin * 2;
  var heap_height = 16;
  var alloc_height = 10;

  // 初期状態の描画
  function initialize_screen(){
    screen.fillRect(heap_margin, heap_margin + alloc_height, heap_width, heap_height);
  }

  $(document).ready(function(){
    screen = document.getElementById("screen").getContext("2d");
    var s = $("#screen")
    s.css("border", "solid 1px black").css("background-color", "white");
    //.css("width", screen_width + "px").css("height", screen_height + "px");

    initialize_screen();
  });
})();
