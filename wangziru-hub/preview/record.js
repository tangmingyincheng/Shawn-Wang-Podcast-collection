const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    recordVideo: { dir: 'C:/Users/tangmingyincheng/OneDrive/桌面/王自如/wangziru-hub/preview', size: { width: 1440, height: 900 } }
  });
  const page = await context.newPage();
  
  const url = 'file:///C:/Users/tangmingyincheng/OneDrive/桌面/王自如/wangziru-hub/index.html';
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);

  // Smooth scroll down
  await page.evaluate(async () => {
    const delay = ms => new Promise(r => setTimeout(r, ms));
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const steps = 120;
    for (let i = 0; i <= steps; i++) {
      window.scrollTo(0, (i / steps) * totalHeight);
      await delay(80);
    }
    await delay(1500);
    // Scroll back up
    for (let i = 0; i <= steps; i++) {
      window.scrollTo(0, totalHeight - (i / steps) * totalHeight);
      await delay(40);
    }
    await delay(1000);
  });

  await context.close();
  await browser.close();
  console.log('Video recorded to preview/ directory');
})();
