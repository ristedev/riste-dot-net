module.exports = function (eleventyConfig) {
  const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addFilter("plus", function(value, amount) {
    return parseInt(value, 10) + parseInt(amount, 10);
  });

  // Log all collections after the build process
  // eleventyConfig.on("afterBuild", function (collections) {
  //   console.log("Collections:", collections.post);
  // });

  return {
    templateFormats: ["liquid", "md", "html"],
    dir: {
      input: "src",
      output: "_site",
      // the following are relative to `input` above
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
    },
  };
};