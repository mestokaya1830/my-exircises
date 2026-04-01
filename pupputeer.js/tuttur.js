import puppeteer from "puppeteer"
import fs from 'fs'
import http from 'http'
import https from 'https'
import { URL } from 'url'

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1280,
    height: 800,
    isMobile: false,
  });

  //login section------------------------------------------
  await page.goto("https://uefaclubs.com/html/D.html");
  const result = await scrollPage(page, 10)
  result.forEach(item => {
    if(item !== null){
      pipeStream(item, () => {
        console.log('Download complete!')
      })
    }
  })
})()

function pipeStream(url, state) {
  const userUrl = new URL(url)
  const urlType = userUrl.protocol === 'http:' ? http : https

  const filename = 'media/tuttur/' + url.split('.').pop()
  console.log(filename)
  const req = urlType.get(url, function (res) {
    const fileStream = fs.createWriteStream(filename)

    res.pipe(fileStream)

    fileStream.on('error', function(error){
      console.log(error)
    })

    fileStream.on('close', function(error){
      state(filename)
    })

    fileStream.on('finished', function(error){
      fileStream.close()
    })
    
  })
  req.on('error',function(error) {
    console.log(error)
  })
}

//page scroll function need lazy-loding-data
const scrollPage = async(page, itemCount) => {
  let list = []
  try {
    let previousHeight
    while (itemCount > list.length) {
      console.clear()
      console.log('Wait please...')
      previousHeight = await page.evaluate('document.body.scrollHeight')
      await page.evaluate('window.scrollTo(0, document.body.scrollHeight)')
      await page.waitForFunction(`document.body.scrollHeight > ${previousHeight}`)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      
      await page.waitForSelector('img')
      const imgUrls = await page.$$eval('img', item => item.map(item => item.src))
    }
  } catch(e) { 
    console.log(e)
  }
  return list
}