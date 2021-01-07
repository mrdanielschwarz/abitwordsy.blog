const moment = require("moment-timezone");

const markdownIt = require("markdown-it");

const markdownItResponsive = require("@gerhobbelt/markdown-it-responsive");


 
module.exports = (function (eleventyConfig) {
    
    

    eleventyConfig.setWatchJavaScriptDependencies(false);



    eleventyConfig.addShortcode("bmc", () => "abitwordsy");

    eleventyConfig.addShortcode("twitter", () => "abitwordsy");

    eleventyConfig.addShortcode("blog", () => "A Bit Wordsy");

    eleventyConfig.addShortcode("domain", () => "https://abitwordsy.blog");

    eleventyConfig.addShortcode("author", () => "Rebeka Schwarz");

    eleventyConfig.addShortcode("year", () => `${ new Date().getFullYear() }`);



    eleventyConfig.addFilter("friendly", function (theDate) {
        return moment(theDate).tz("GMT").format("Do MMMM YYYY");
    });

    eleventyConfig.addFilter("datetime", function (theDate) {
        return moment(theDate).tz("GMT").format("YYYY-MM-DDThh:mm:ssTZD");
    });

    eleventyConfig.addFilter("starify", function (rating) {

        let stars = [];

        for (var i = rating; i >= 1; i--) {
            stars.push(`<i class="fas fa-star"></i>`);
        }

        if (i == .5) {
            stars.push(`<i class="fas fa-star-half-alt"></i>`);
        }

        for (let i = (5 - rating); i >= 1; i--) {
            stars.push(`<i class="far fa-star"></i>`);
        }

        return `${ rating } ${ stars.join("") }`;

    });

    eleventyConfig.addFilter("responsify", function (img) {




    });
    
    

    eleventyConfig.setLibrary("md", markdownIt().use(markdownItResponsive, {
        responsive: {
            "sizes": {
                "*": ""
            },
            "srcset": {
                "*": [{
                    width: "",
                    rename: {
                        suffix: '-960w'
                    }
                }, {
                    width: " 2x",
                    rename: {
                        suffix: '-1920w'
                    }
                }]
            }
        }
    }));



    return {
        dir: {
            output: "docs",
            input: "markdown",
            includes: "includes"
        }
    };



});