module.exports = function(grunt) {
  var XmlParser = require("./xml-parser");


  /*!
   * Processes the manifest to parse pages.
   * @param {!String}    doxy_source Base path for doxygen files.
   * @param {!Object}    manifest    The parsed index.xml.
   * @param {!XmlParser} parser      The parser instance already created.
   */
  var parsePages = function parsePages(doxy_source, manifest, parser) {
    var pages   = manifest["page"];
    var results = [];

    for (var idx = 0; idx < pages.length; idx++) {
      parser.open(doxy_source, pages[idx].id + ".xml");
      results.push(parser.parseAsPage());
    }
    return results;
  };


  grunt.registerMultiTask(
      "doxylate",
      "Converts Doxygen XML output to JSON and passes it to " +
      "Handelbars Expander.",
      function() {
    if (this.files.length !== 1 || this.files[0].src.length !== 1) {
      var count = this.files.length;
      if (count === 1) {
        count = this.files[0].src.length;
      }
      grunt.fail.warn(
          "Doxylate task expects one source directory. " +
          "Tareget '" + this.target + "' received " + count + " sources."
      );
    }

    var doxy_source = this.files[0].src[0];
    var options     = this.options({
      //
    });

    if (!grunt.file.isDir(doxy_source)) {
      grunt.fail.warn(
          "Doxylate task expects one source directory. " +
          "Tareget '" + this.target + "' was given '" + doxy_source +
          "', which is not a directory."
      );
    }

    // Read index.xml in memory.
    var data     = {};
    var manifest = {};
    var parser   = new XmlParser();
    parser.open(doxy_source, "index.xml");
    manifest = parser.parseAsManifest();

    // Process manifest.
    data["page"] = parsePages(doxy_source, manifest, parser);

    // Expand results.
    console.log(JSON.stringify(data["page"], null, 2));
  });
};

