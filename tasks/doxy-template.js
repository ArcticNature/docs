module.exports = function(grunt) {
  var path = require("path");

  var XmlParser = require("./xml-parser");


  /*!
   * Processes the manifest to parse pages.
   * @param {!String}    doxy_source Base path for doxygen files.
   * @param {!Object}    manifest    The parsed index.xml.
   * @param {!XmlParser} parser      The parser instance already created.
   * @param {!Function}  name        Build the output file name of a page.
   * @param {Object}     toc         Table of contents.
   */
  var parsePages = function parsePages(
      doxy_source, manifest, parser, name, toc
  ) {
    var destinations = [];
    var pages   = manifest["page"];
    var results = [];

    for (var idx = 0; idx < pages.length; idx++) {
      var file = pages[idx].id === "index" ? "indexpage" : pages[idx].id;
      parser.open(doxy_source, file + ".xml");
      var page = parser.parseAsPage();
      if (toc) {
        tocSetAttributeForId(toc.pages, pages[idx].id, "title", page.title);
        page.toc = shallowCopy(toc, { "toc-active-page": page.id });
      }

      results.push(page);
      destinations.push(name(pages[idx])); 
    }
    return {
      data: results,
      dest: destinations,
      type: "multi-raw"
    };
  };

  /*!
   * Creates a shallow (one level only) copy of an object
   * and optionally extends it this data from another object.
   * @param {!Object} source The object to copy.
   * @param {Object}  extend The object to use for extension.
   */
  var shallowCopy = function shallowCopy(source, extend) {
    var result = {};
    extend     = extend || {};

    // Copy the fist level of source in a new dictionary.
    for (var key in source) {
      if (!source.hasOwnProperty(key)) { conitnue; }
      result[key] = source[key];
    }

    // Override the given keys.
    for (var key in extend) {
      if (!extend.hasOwnProperty(key)) { conitnue; }
      result[key] = extend[key];
    }
    return result;
  };

  /*!
   * Produce a table of contents from a manifest.
   * @param {!Object} manifest The manifest to process.
   */
  var tocFromManifest = function tocFromManifest(manifest) {
    var toc = {};

    // Reformat pages.
    if ("page" in manifest) {
      var pages = manifest.page;
      toc.pages = [];
      for (var idx = 0; idx < pages.length; idx++) {
        var page = pages[idx];
        toc.pages.push({
          id:    page.id,
          title: page.title
        });

        if (page.id === "index") {
          toc.index = page.title;
        }
      }
    }

    return toc;
  };

  /*!
   * Post processes the table of content object.
   */
  var tocPostProcess = function tocPostProcess(toc) {
    toc.pages = toc.pages.sort(function(left, right) {
      if (left.title < right.title) {
        return -1;
      } else if (left.title == right.title) {
        return 0;
      } else {
        return 1;
      }
    });
    return toc;
  };

  /*!
   * Sets an attribute for the item matching the given id.
   */
  var tocSetAttributeForId = function tocSetAttributeForId(
      items, id, key, value
  ) {
    for (var idx=0; idx < items.length; idx++) {
      if (items[idx].id === id) {
        items[idx][key] = value;
        return;
      }
    }
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

    var doxy_dest   = this.files[0].dest;
    var doxy_source = this.files[0].src[0];
    var options     = this.options({
      toc: true
    });

    if (!grunt.file.isDir(doxy_source)) {
      grunt.fail.warn(
          "Doxylate task expects one source directory. " +
          "Tareget '" + this.target + "' was given '" + doxy_source +
          "', which is not a directory."
      );
    }

    var namer = function namer(item) {
      return path.join(doxy_dest, item.id + ".html");
    };

    // Read index.xml in memory.
    var data     = {};
    var manifest = {};
    var parser   = new XmlParser();
    var toc      = null;
    parser.open(doxy_source, "index.xml");
    manifest = parser.parseAsManifest();
    if (options.toc) {
      toc = tocFromManifest(manifest);
    }

    // Process manifest.
    data["page"] = parsePages(doxy_source, manifest, parser, namer, toc);

    if (options.toc) {
      toc = tocPostProcess(toc);
      data["toc-pages"] = {
        data: shallowCopy(toc, {
          title: "All pages | Table of Contents",
          "toc-active-page": "toc-pages"
        }),
        dest: path.join(doxy_dest, "toc-pages.html"),
        type: "raw"
      }
    }

    // Expand results.
    grunt.config("handlebars-expand.docs", data);
    grunt.task.run("handlebars-expand:docs");
  });
};

