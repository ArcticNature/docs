var Handlebars = require("handlebars");

var TAG_HANDLERS = {
  itemizedlist: function(node) {
    return "<ul>" + formatDoxyTree(node["$elements"]) + "</ul>";
  },

  heading: function(node) {
    var tag    = "h" + node.level;
    var output = "<" + tag + ">" + formatDoxyTree(node["$elements"]);
    return output + "</" + tag + ">";
  },

  listitem: function(node) {
    // Optimise out paragraphs immediatelly under a list item.
    var elements = node["$elements"];
    if (elements.length === 1 && elements[0]["$tag"] === "para") {
      return "<li>" + formatDoxyTree(elements[0]["$elements"]) + "</li>";
    }
    return "<li>" + formatDoxyTree(elements) + "</li>";
  },

  para: function(node) {
    return "<p>" + formatDoxyTree(node["$elements"]) + "</p>";
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
