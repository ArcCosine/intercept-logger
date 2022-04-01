(async () => {
    "use strict";

    const puppeteer = require("puppeteer");

    const browser = await puppeteer.launch();

    const page = await browser.newPage();
    await page.setRequestInterception(true);

    page.on("request", async (interceptedRequest) => {
        const url = await interceptedRequest.url();
        console.log(url); //debug
        interceptedRequest.continue();
    });

    await page.goto("https://www.google.co.jp");
    await browser.close();
})();
