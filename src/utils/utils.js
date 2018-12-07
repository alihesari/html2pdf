import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export const print = (filename = "file.pdf") => {
  let iframe = document.getElementById("previewIframe");

  let iframedoc = iframe.document;
  if (iframe.contentDocument) {
    iframedoc = iframe.contentDocument;
  } else if (iframe.contentWindow) {
    iframedoc = iframe.contentWindow.document;
  }

  const htmlElement = iframedoc.getElementsByTagName("body")[0];

  return html2canvas(htmlElement).then(canvas => {
    let pdf = new jsPDF("p", "mm", "a4");
    pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 211, 298);
    pdf.save(filename);
  });
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
