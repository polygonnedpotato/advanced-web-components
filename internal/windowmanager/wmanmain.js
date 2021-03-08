function newWindow(url, inorout) {
    if (inorout == "in") {
      //notavaliableyet
    } else if (inorout == "out") {
      open(url, 'External Window', `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,width=600,height=200,left=-1000,top=-1000`);
    }
  }