const fs = require('fs');
const path = require('path');
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
const syntaxHighlight = require('@11ty/eleventy-plugin-syntaxhighlight');
const rssPlugin = require('@11ty/eleventy-plugin-rss');

module.exports = function (eleventyConfig) {
  // plugins
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(rssPlugin);

  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addPassthroughCopy('robots.txt');

  eleventyConfig.addFilter('plus', function (value, amount) {
    return parseInt(value, 10) + parseInt(amount, 10);
  });

  // Shortcode for inline SVG
  eleventyConfig.addShortcode('icon', function (name) {
    const iconPath = path.join('assets', 'icons', `${name}.svg`);
    return fs.readFileSync(iconPath, 'utf8');
  });

  // sorted navigation collection
  eleventyConfig.addCollection('sortedNavigation', function (collection) {
    return collection
      .getAllSorted()
      .filter(function (item) {
        return item.data.eleventyNavigation; // Filter to include only items with eleventyNavigation
      })
      .sort(function (a, b) {
        return (
          (a.data.eleventyNavigation.order || 0) -
          (b.data.eleventyNavigation.order || 0)
        ); // Sort by order
      });
  });

  // sorted posts collection
  eleventyConfig.addCollection('sortedPosts', function (collectionApi) {
    return collectionApi
      .getAll()
      .filter((post) => post.data.tags && post.data.tags.includes('post'))
      .sort((a, b) => new Date(b.date) - new Date(a.date));
  });

  // categories collection
  eleventyConfig.addCollection('categories', (collectionApi) => {
    const allPosts = collectionApi.getAll();
    const categories = {};

    allPosts.forEach((post) => {
      if (post.data.category) {
        if (!categories[post.data.category]) {
          categories[post.data.category] = [];
        }
        categories[post.data.category].push(post);
      }
    });

    // return an array of category names
    return Object.keys(categories).map((category) => ({
      name: category,
      slug: category.toLowerCase().replace(/\s+/g, '-'),
    }));
  });

  return {
    templateFormats: ['liquid', 'md', 'html', 'txt'],
    dir: {
      input: 'src',
      output: '_site',
      // the following are relative to `input` above
      includes: '_includes',
      layouts: '_layouts',
      data: '_data',
    },
  };
};
