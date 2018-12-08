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
