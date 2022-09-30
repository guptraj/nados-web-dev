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
    let selTool = cheerio.load(html)
    let contentArr = selTool(".maincounter-number span");
  
    // for (let i = 0; i < contentArr.length;i++)
    // {
    //     console.log(selTool(contentArr[i]).text())
    // }

    let totalCases = selTool(contentArr[0]).text()
    let totaldeaths = selTool(contentArr[1]).text()
    let totalrecovered = selTool(contentArr[2]).text()

    console.log('total cases : ' + totalCases)
    console.log('total deaths : ' + totaldeaths)
    console.log('recovered cases : ' + totalrecovered)
}

console.log("After");
