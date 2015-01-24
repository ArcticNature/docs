var Handlebars = require("handlebars");

var convertToTag = function convertToTag(tag, optimise) {
  // Optimise out paragraphs immediatelly under a list item.
  var elements  = node["$elements"];
  var tag_close = "</" + tag + ">";
  var tag_open  = "<" + tag + ">";
  if (optimise && elements.length === 1 && elements[0]["$tag"] === "para") {
    return tag_open + formatDoxyTree(elements[0]["$elements"]) + tag_close;
  }
  return tag_open + formatDoxyTree(elements) + tag_close;
};

var TAG_HANDLERS = {
  bold:         convertToTag("b", true),
  itemizedlist: convertToTag("ul"),
  listitem:     convertToTag("li", true),
  para:         convertToTag("p"),
  verbatim:     convertToTag("pre"),

  heading: function(node) {
    var tag    = "h" + node.level;
    var output = "<" + tag + ">" + formatDoxyTree(node["$elements"]);
    return output + "</" + tag + ">";
  },

  ref: function(node) {
    var uri    = node.refid + ".html";
    var output = "<a href='" + uri + "'>";
    return output + formatDoxyTree(node["$elements"]) + "</a>";
  }
};

var formatDoxyTree = module.exports = function formatDoxyTree(tree) {
  var output = "";

  for (var idx=0; idx < tree.length; idx++) {
    var node = tree[idx];
    var tag  = node["$tag"];

    if (tag === "text") {
      output += node["$text"];

    } else if (tag in TAG_HANDLERS) {
      output += TAG_HANDLERS[tag].call(this, node);

    } else {
      console.error("Encountered unknown tag '" + tag + "'");
    }
  }

  return new Handlebars.SafeString(output);
};
