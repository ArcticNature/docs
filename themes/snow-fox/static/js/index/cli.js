var tocResolver = function tocResolver(toc_block) {
  var target_href = toc_block.find("h2 a").attr("href");

  // For each link in the toc update the href link.
  toc_block.find("nav a").each(function() {
    var link = $(this);
    var anchor = link.attr("href");
    link.attr("href", target_href + anchor);
  });
};


$(function() {
  // For each command line tool ...
  $("div.cli-binaries").each(function() {
    tocResolver($(this));
  });

  // For each remote TOC ...
  $("div.remote-toc").each(function() {
    tocResolver($(this));
  });
});
