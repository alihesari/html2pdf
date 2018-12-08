export const print = (filename = "file.pdf") => {
  document.getElementById("previewIframe").contentWindow.print();
};

export const injectHTML = htmlCode => {
  let iframe = document.getElementById("previewIframe");

  let iframedoc = iframe.document;
  if (iframe.contentDocument) {
    iframedoc = iframe.contentDocument;
  } else if (iframe.contentWindow) {
    iframedoc = iframe.contentWindow.document;
  }

  if (iframedoc) {
    iframedoc.open();
    iframedoc.writeln(htmlCode);
    iframedoc.close();
  }
};

export const readHTMLFile = file => {
  const content = new Promise((resolve, reject) => {
    let fileReader = new FileReader();
    fileReader.onloadend = e => {
      resolve(fileReader.result);
    };
    fileReader.readAsText(file);
  }).then(res => {
    injectHTML(res);
  });
};

export const setUrl = url => {
  console.log(url);
  
  document.getElementById("previewIframe").src = url;
};
