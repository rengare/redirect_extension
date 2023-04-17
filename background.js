chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    const redditUrl = new URL(details.url);
    const redirectToUrl = `http://192.168.8.201:8081${redditUrl.pathname}${redditUrl.search}`;
    return { redirectUrl: redirectToUrl };
  },
  { urls: ["*://*.reddit.com/*"] },
  ["blocking"]
);
