const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const fetch = require("node-fetch");

(async () => {
    const response = await fetch('https://finance.yahoo.com/quote/TSLA?p=TSLA&.tsrc=fin-srch');
    const text = await response.text();
    const dom = await new JSDOM(text);
    console.log("StockGrab");
    console.log(dom.window.document.querySelector("h1").textContent);
    console.log("Price: " +  (dom.window.document.querySelector("#quote-header-info > div.My\\(6px\\).Pos\\(r\\).smartphone_Mt\\(6px\\) > div.D\\(ib\\).Va\\(m\\).Maw\\(65\\%\\).Ov\\(h\\) > div > span.Trsdu\\(0\\.3s\\).Fw\\(b\\).Fz\\(36px\\).Mb\\(-4px\\).D\\(ib\\)").textContent));
    console.log("Volume: " + (dom.window.document.querySelector("#quote-summary > div.D\\(ib\\).W\\(1\\/2\\).Bxz\\(bb\\).Pend\\(12px\\).Va\\(t\\).ie-7_D\\(i\\).smartphone_D\\(b\\).smartphone_W\\(100\\%\\).smartphone_Pend\\(0px\\).smartphone_BdY.smartphone_Bdc\\(\\$seperatorColor\\) > table > tbody > tr:nth-child(7) > td.Ta\\(end\\).Fw\\(600\\).Lh\\(14px\\) > span")).textContent)
    console.log("PE Ratio: " + (dom.window.document.querySelector("#quote-summary > div.D\\(ib\\).W\\(1\\/2\\).Bxz\\(bb\\).Pstart\\(12px\\).Va\\(t\\).ie-7_D\\(i\\).ie-7_Pos\\(a\\).smartphone_D\\(b\\).smartphone_W\\(100\\%\\).smartphone_Pstart\\(0px\\).smartphone_BdB.smartphone_Bdc\\(\\$seperatorColor\\) > table > tbody > tr:nth-child(3) > td.Ta\\(end\\).Fw\\(600\\).Lh\\(14px\\) > span").textContent));

  })()

  console.log("Check")