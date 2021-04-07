function Store(Source,Location,Key,Value) {
  switch(Location){
    case "Local":
      localStorage.setItem(Source + "-" + Key, Value)
    case "Session":
      sessionStorage.setItem(Source + "-" + Key, Value)
  }
}
function Get(Source,Key)