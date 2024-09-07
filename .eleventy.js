const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addFilter("plus", function(value, amount) {
    return parseInt(value, 10) + parseInt(amount, 10);
  });

  // create a categories collection
  eleventyConfig.addCollection("categories", function(collectionApi) {
    const allPosts = collectionApi.getAll();
    const categories = {};

    allPosts.forEach(post => {
      if (post.data.category) {
        if (!categories[post.data.category]) {
          categories[post.data.category] = [];
        }
        categories[post.data.category].push(post);
      }
    });

    // return an array of category names
    return Object.keys(categories).map(category => ({
      name: category,
      slug: category.toLowerCase().replace(/\s+/g, '-')
    }));
  });

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