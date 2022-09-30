const cheerio = require('cheerio')
const request = require('request')

let url =
  "https://www.espn.in/cricket/series/20932/commentary/1327506/india-vs-south-africa-1st-t20i-south-africa-in-india-2022-23";

request(url,cb)  

function cb (error,response,html)
{
    if(error)
    {
        console.error(error)
    }
    else {
        handleHtml(html)
    }
}

function handleHtml(html)
{
    let selTool = cheerio.load(html)
    let eleArr = selTool('.item-wrapper .description')
    let lbc =selTool(eleArr[0]).text()
    console.log(lbc)

}