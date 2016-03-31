$(function() {
  // For each command line tool ...
  $("div.cli-binaries").each(function() {
    var toc_block = $(this);
    var target_href = toc_block.find("h2 a").attr("href");

    // For each link in the toc ...
    toc_block.find("nav a").each(function() {
      var link = $(this);
      var anchor = link.attr("href");
      link.attr("href", target_href + anchor);
    });
  });
});
