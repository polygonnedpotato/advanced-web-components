import * as debug from 'debug.js'
function afterinstall(platform,browserversion,osplatform,osversion) {
    localStorage.setItem("BrowserName", platform)
    localStorage.setItem("BrowserVersion", browserversion)
    localStorage.setItem("OSPlatformName", osplatform)
    localStorage.setItem("OSVersion", osversion)
    localStorage.getItem("preloadedfile-parsedjsonfile-manifest.json")
}