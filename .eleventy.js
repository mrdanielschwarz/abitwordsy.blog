var moment = require("moment-timezone");

module.exports = (function (eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy("image");
    
    eleventyConfig.addFilter("friendly", function (theDate) {
        return moment(theDate).tz("GMT").format("Do MMMM YYYY");
    });
    
    eleventyConfig.addFilter("starify", function (rating) {
        
        let output = [];
        
        for (var i = rating; i >= 1; i--) output.push('<i class="fas fa-star"></i>');
        
        if (i == .5) output.push('<i class="fas fa-star-half-alt"></i>');
        
        for (let i = (5 - rating); i >= 1; i--) output.push('<i class="far fa-star"</i>');
        
        return `${ rating } ${ output.join("") }`;
        
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