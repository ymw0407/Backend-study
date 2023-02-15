import puppeteer from 'puppeteer';
import cheerio from 'cheerio' 
import { Starbucks } from './models/starbucks.js'
import mongoose from 'mongoose'

mongoose.set('strictQuery',true)
mongoose.connect("mongodb://127.0.0.1:27017/mydocker_mini_project")

async function startCrawling() {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 720 });
  await page.goto('https://www.starbucks.co.kr/menu/drink_list.do')
  const content = await page.content()
  const $ = cheerio.load(content)
  const lists = $('#container > div.content > div.product_result_wrap.product_result_wrap01 > div > dl > dd:nth-child(2) > div.product_list > dl ')
  for (var i = 0; i < 20; i++){
    const second_lists = $(lists).find(`dd:nth-child(${i}) > ul`)
    for (var k = 0; k < 20; k++){
        const name = $(second_lists).find(`li:nth-child(${k}) > dl > dt > a > img`)
        
        if (name['0']){
            const imageUrl = String(name['0'].attribs.src)
            const nameUrl = String(name['0'].attribs.alt) 
            //console.log(imageUrl, nameUrl)
            const starbucks = new Starbucks({
                img: imageUrl,
                name: nameUrl
            })
            await starbucks.save()
        }
    }
  }
  //#container > div.content > div.product_result_wrap.product_result_wrap01 > div > dl > dd:nth-child(2) > div.product_list > dl > dd:nth-child(6) > ul > li:nth-child(1) > dl > dt > a > img
  //#container > div.content > div.product_result_wrap.product_result_wrap01 > div > dl > dd:nth-child(2) > div.product_list > dl > dd:nth-child(2) > ul > li:nth-child(8) > dl > dt > a > img
  await browser.close()
}
startCrawling()