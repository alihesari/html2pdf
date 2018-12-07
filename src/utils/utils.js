import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default (print = (filename = "file.pdf") => {
  html2canvas(document.querySelector("body")).then(canvas => {
    let pdf = new jsPDF("p", "mm", "a4");
    pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 211, 298);
    pdf.save(filename);
  });
});
