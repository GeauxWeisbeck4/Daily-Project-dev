"use strict";

var _require = require("luxon"),
    DateTime = _require.DateTime;

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("https://unpkg.com/papercss@1.8.3/dist/paper.min.css");
  eleventyConfig.addPassthroughCopy('src/style.css');
  eleventyConfig.addPassthroughCopy('src/assets');
  eleventyConfig.addPassthroughCopy('src/admin');
  eleventyConfig.addFilter("postDate", function (dateObj) {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });
  return {
    dir: {
      input: "src",
      output: "_site"
    }
  };
};