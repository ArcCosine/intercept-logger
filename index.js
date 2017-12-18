(() => {

    "use strict";

    const puppeteer = require("puppeteer");


    puppeteer.launch().then(async browser => {

        const page = await browser.newPage();
        await page.setRequestInterception(true);

        page.on("request", interceptedRequest => {
            console.log(interceptedRequest.url);//debug
            interceptedRequest.continue();
        });

        await page.goto("https://www.google.co.jp");
        await browser.close();

    });

})();
