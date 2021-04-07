function Log(Source, SourceFile, Level, BodyText) {
    tolog = "[" + Source + "][" + SourceFile + "][" + Date() + "]" + BodyText
    switch (Level) {
        case "Normal":
            localStorage.setItem("debugfile-log", localStorage.getItem("debugfile-log") + "\n{n}" + tolog)
            console.log(tolog)
            break
        case "Warning":
            localStorage.setItem("debugfile-log", localStorage.getItem("debugfile-log") + "\n{w}" + tolog)
            console.warn(tolog)
            break
        case "Error":
            localStorage.setItem("debugfile-log", localStorage.getItem("debugfile-log") + "\n{e}" + tolog)
            console.error(tolog)
            break
        default:
            localStorage.setItem("debugfile-log", localStorage.getItem("debugfile-log") + "\n{u}" + tolog)
            console.log(tolog)
            break
    }
}
function GetDebugPage(PageID) {
  Log("GetDebugPage(" + PageID + ")","/internal/runtime/debug.js", "Normal", "Loading Debug Page " + PageID + ".")
  try {
    document.location = "/internal/debug/HTMLDOC/" + PageID + ".HTM"
  } catch(err) {
    Log("GetDebugPage(" + PageID + ")","/internal/runtime/debug.js", "Error", "Could not find any debug page with a PageID of " + PageID + ".")
  }
}
function StartDebugGUI() {
  Log("StartDebugGUI()","/internal/runtime/debug.js", "Normal", "Starting debug GUI...")
  sessionStorage.setItem("debug.js-EntryPage", document.location.pathname)
  GetDebugPage("0000")
}
function ExitDebugGUI() {
  document.location = sessionStorage.getItem("debug.js-EntryPage")
}