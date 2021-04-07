function Log(Source, SourceFile, Level, BodyText) {
    tolog = "[" + Source + "][" + SourceFile + "][" + Date() + "]" + BodyText
    switch (Level) {
        case 'Normal':
            localStorage.setItem("debugfile-log", localStorage.getItem("debugfile-log") + "\n{n}" + tolog)
            console.log(tolog)
        case 'Warning':
            localStorage.setItem("debugfile-log", localStorage.getItem("debugfile-log") + "\n{w}" + tolog)
            console.warn(tolog)
        case 'Error':
            localStorage.setItem("debugfile-log", localStorage.getItem("debugfile-log") + "\n{e}" + tolog)
            console.err(tolog)
        default:
            localStorage.setItem("debugfile-log", localStorage.getItem("debugfile-log") + "\n{u}" + tolog)
            console.log(tolog)
    }
}
function GetDebugPage(PageID) {

}