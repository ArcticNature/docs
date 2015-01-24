var fs   = require("fs");
var path = require("path");

var libxmljs = require("libxmljs");


var attributesArrayToObject = function attributesArrayToObject(attrs) {
  var output = {};
  for (var idx = 0; idx < attrs.length; idx++) {
    output[attrs[idx][0]] = attrs[idx][3];
  }
  return output;
};


/*!
 * @class XmlParser
 * Parses XML files into JavaScript objects.
 */
var XmlParser = module.exports = function XmlParser() {
  this._content = "";
};

/*!
 * Opens the given file for parsing.
 * @param {!String} file The path to the XML file to parse.
 */
XmlParser.prototype.open = function open(var_args) {
  var file  = path.join.apply(path, arguments);
  var stats = fs.statSync(file);
  if (!stats && !stats.isFile()) {
    throw new Error("Invalid XML source: " + file + " is not a file.");
  }

  this._content = fs.readFileSync(file, { encoding: "utf8" });
};

/*! Parses the open XML file as a Doxygen manifest. */
XmlParser.prototype.parseAsManifest = function parseAsManifest() {
  var current_buffer  = "";
  var current_compund = {};
  var current_memeber = {};
  var current_mode    = "";
  var result = {};

  // Create the XML Parser & bind events.
  var parser = new libxmljs.SaxParser();
  parser.on("startElementNS", function(tag, attributes) {
    if (tag === "compound") {
      attributes      = attributesArrayToObject(attributes);
      current_mode    = "compound";
      current_compund = {
        id:      attributes.refid === "indexpage" ? "index" : attributes.refid,
        kind:    attributes.kind,
        members: []
      };

    } else if (tag === "member" && current_mode === "compound") {
      attributes      = attributesArrayToObject(attributes);
      current_mode    = "compound::member";
      current_memeber = {
        id:   attributes.refid,
        kind: attributes.kind
      };

    } else if (tag === "name") {
      current_buffer = "";
    }
  });

  parser.on("endElementNS", function(tag) {
    if (tag === "compound") {
      var kind = current_compund.kind;
      if (!(kind in result)) {
        result[kind] = [];
      };
      result[kind].push(current_compund);

    } else if (tag === "member") {
      current_compund.members.push(current_memeber);

    } else if (tag === "name" && current_mode === "compound") {
      current_compund.name = current_buffer;
      current_buffer = "";

    } else if (tag === "name" && current_mode === "compound::member") {
      current_memeber.name = current_buffer;
      current_buffer = "";
    }
  });

  parser.on("characters", function(characters) {
    current_buffer += characters;
  });

  // Start parsing.
  parser.parseString(this._content);
  return result;
};


/*! Parses the open XML file as a Doxygen page. */
XmlParser.prototype.parseAsPage = function parseAsPage() {
  var current_buffer = "";
  var stack  = [];
  var result = {
    description: []
  };

  var checkAndPushText = function checkAndPushText() {
    if (current_buffer.trim() !== "") {
      stack[stack.length - 1]["$elements"].push({
        "$tag": "text",
        "$text": current_buffer
      });
    }
    current_buffer = "";
  };

  // Set of tags to process in descriptions.
  var TAGS_TO_STACK = {
    "bold":         true,
    "listitem":     true,
    "itemizedlist": true,
    "heading":      true,
    "para":         true,
    "ref":          true,
    "verbatim":     true
  }

  // Create the XML Parser & bind events.
  var parser = new libxmljs.SaxParser();
  parser.on("startElementNS", function(tag, attributes) {
    if (tag === "compounddef") {
      attributes = attributesArrayToObject(attributes);
      result.id  = attributes.id;

    } else if (tag === "detaileddescription") {
      stack.push({ "$elements": [] });
      current_buffer = "";

    } else if (tag in TAGS_TO_STACK) {
      attributes = attributesArrayToObject(attributes);
      attributes["$elements"] = [];
      attributes["$tag"]      = tag;
      checkAndPushText();
      stack.push(attributes);

    } else if (tag === "compoundname" || tag === "title") {
      current_buffer = "";
    }
  });

  parser.on("endElementNS", function(tag) {
    if (tag === "compoundname") {
      result.name = current_buffer;
    } else if (tag === "title") {
      result.title = current_buffer;

    } else if (tag === "detaileddescription") {
      var element  = stack.pop();
      result.description = element["$elements"];

    } else if (tag in TAGS_TO_STACK) {
      checkAndPushText();
      var element = stack.pop();
      stack[stack.length - 1]["$elements"].push(element);
    }
  });

  parser.on("characters", function(characters) {
    current_buffer += characters;
  });

  // Start parsing.
  parser.parseString(this._content);
  return result;
};

