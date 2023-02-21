// 크롤링 2 - 주식(삼성전자)

import puppeteer from 'puppeteer';

async function startCrawling() {
    const browser = await puppeteer.launch({ headless: false});
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 720 });  // 열린 브라우저 크기 설정
    await page.goto("https://finance.naver.com/item/sise.naver?code=005930");  // 해당 주소로 이동
    await page.waitForTimeout(1000);  // 페이지 전부 로딩될 때까지 기다림

    // frames들 중에서 찾아주는데, 저 주소를 가지고 있는 iframe을 가져옴
    const framePage = await page
      .frames()
      .find((el) => el.url().includes('/item/sise_day.naver?code=005930'))

    // 하나의 데이터가 아닌 여러 데이터를 가져올 수 있게 반복문 작성
    for (let i = 3; i <= 7; i++) {
      const date = await framePage.$eval(
        `body > table.type2 > tbody > tr:nth-child(${i}) > td:nth-child(1) > span`,
        (el) => el.textContent
      );
  
      const price = await framePage.$eval(
        `body > table.type2 > tbody > tr:nth-child(${i}) > td:nth-child(2) > span`,
        (el) => el.textContent
      );

      console.log(`날짜: ${date}, 가격: ${price}`);
    }

    // 크롤링 후 브라우저 종료
    await browser.close();
}

startCrawling();