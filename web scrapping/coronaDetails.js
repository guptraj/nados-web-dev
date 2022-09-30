const request = require("request");
const cheerio = require("cheerio");

console.log("before");

request("https://www.worldometers.info/coronavirus/", cb);

function cb(error, response, html) {
  if (error) {
    console.error(error);
  } else {
    handleHtml(html);
  }
}

function handleHtml(html)
{
    
}

console.log("After");
