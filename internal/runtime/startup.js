function afterinstall(platform,browserversion,osplatform,osversion) {
    localStorage.setItem("BrowserName", platform)
    localStorage.setItem("BrowserVersion", browserversion)
    localStorage.setItem("OSPlatformName", osplatform)
    localStorage.setItem("OSVersion", osversion)
    sessionStorage.setItem("startup.js-parsedjsonfile-manifest.json", JSON.parse())
}