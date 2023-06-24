const eleventySass = require("@11tyrocks/eleventy-plugin-sass-lightningcss");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("./src/assets/fonts/");
  eleventyConfig.addPassthroughCopy({ "./src/assets/favicons": "/" });
  eleventyConfig.addPassthroughCopy("./src/assets/images/");
  eleventyConfig.addPlugin(eleventySass);
  eleventyConfig.addTransform("minify", require("./transforms/minify"));

  return {
    dir: {
      input: "src",
    },
  };
};
