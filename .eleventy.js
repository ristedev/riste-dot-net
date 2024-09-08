const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  
  eleventyConfig.addPlugin(eleventyNavigationPlugin);

  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addFilter("plus", function(value, amount) {
    return parseInt(value, 10) + parseInt(amount, 10);
  });

  eleventyConfig.addCollection("sortedNavigation", function(collection) {
    return collection.getAllSorted()
      .filter(function(item) {
        return item.data.eleventyNavigation; // Filter to include only items with eleventyNavigation
      })
      .sort(function(a, b) {
        return (a.data.eleventyNavigation.order || 0) - (b.data.eleventyNavigation.order || 0); // Sort by order
      });
  });

  // create a categories collection
  eleventyConfig.addCollection("categories", function(collectionApi) {
    var allPosts = collectionApi.getAll();
    var categories = {};

    allPosts.forEach(function(post) {
      if (post.data.category) {
        if (!categories[post.data.category]) {
          categories[post.data.category] = [];
        }
        categories[post.data.category].push(post);
      }
    });

    // return an array of category names
    return Object.keys(categories).map(function(category) {
      return {
        name: category,
        slug: category.toLowerCase().replace(/\s+/g, '-')
      };
    });
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