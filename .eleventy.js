const {
    DateTime
} = require("luxon");

module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("https://unpkg.com/papercss@1.8.3/dist/paper.min.css")
    eleventyConfig.addPassthroughCopy('./src/style.css');
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/admin');


    eleventyConfig.addFilter("postDate", (dateObj) => {
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    })

    return {
        dir: {
            input: "src",
            output: "public"
        }
    };
}