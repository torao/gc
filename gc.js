(function(){
  // 定数いろいろ
  var screen = null;
  var screen_width = 400;
  var screen_height = 230;
  var heap_margin = 20;
  var heap_width = screen_width - heap_margin * 2;
  var heap_height = 18;
  var alloc_height = 10;

  // 初期状態の描画
  function initialize_screen(){
    screen.fillStyle = "#1D417A";
    screen.fillRect(heap_margin, heap_margin + alloc_height, heap_width, heap_height);
    screen.font = "12px 'Verdana'"
    screen.fillStyle = "#FFFFFF";
    screen.fillText("Eden", heap_margin + 5, heap_margin + alloc_height + heap_height - 3, heap_width);
  }

  $(document).ready(function(){
    screen = document.getElementById("screen").getContext("2d");
    var s = $("#screen").css("border", "solid 1px black").css("background-color", "white");
    //.css("width", screen_width + "px").css("height", screen_height + "px");

    initialize_screen();
  });
})();
