$(function() {
  var tmplt = $("#template").html();
  var append = function() {
    var $target = $("input[name=sel]:checked").parents("li").eq(0);
    var text =$("#line").val();
    var html = tmplt.replace("%s", text);
    $target.after(html);
    $target.next().find("input").prop("checked", true);
  };
  var nest = function() {
    var $target = $("input[name=sel]:checked").parents("li").eq(0);
    var text = $("#line").val();
    var html = "<ul>" + tmplt.replace("%s", text) + "</ul>";
    $target.append(html);
    $target.find("li input").prop("checked", true);
  };

  $("#btnAppend").click(append);
  $("#btnNest").click(nest);
});
