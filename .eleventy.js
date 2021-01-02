var moment = require("moment-timezone");

module.exports = (function (eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy("image");
    
    eleventyConfig.addFilter("friendly", function (theDate) {
        return moment(theDate).tz("GMT").format("Do MMMM YYYY");
    });
    
    eleventyConfig.setTemplateFormats(["html", "md", "jpg", "jpeg", "liquid"]);
    
    return {
        dir: {
            output: "docs",
            input: "markdown",
            includes: "includes"
        }
    };
    
});