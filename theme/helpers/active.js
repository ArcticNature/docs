module.exports = function active(link_id) {
  var toc = this.toc || {};
  if (this["toc-active-page"]) {
    toc = this;
  }

  if (link_id && toc["toc-active-page"] === link_id) {
    return "active";
  }
};
