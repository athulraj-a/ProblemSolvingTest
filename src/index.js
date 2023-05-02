import "./styles.css";

let l, n;

const photo_dimensions = (l, n) => {
  while (n--) {
    let w = parseInt(prompt("Enter width", "0"), 10);
    let h = parseInt(prompt("Enter height", "0"), 10);
    if (w === l && h === l) {
      document.write("Accepted");
      document.write("<br>");
    } else if ((w > l || w === l) && (h > l || h === l)) {
      document.write("Crop It");
      document.write("<br>");
    } else if (isNaN(w) || isNaN(h)) {
      document.write("Inavalid Input");
      document.write("<br>");
    } else {
      document.write("Upload Another");
      document.write("<br>");
    }
  }
};

const loadPrompts = () => {
  l = parseInt(prompt("Enter length", "0"), 10);
  if (!isNaN(l)) {
    n = parseInt(prompt("Enter no of photos", "0"), 10);
    if (isNaN(l) || l == null || isNaN(n) || n == null) {
      document.write("Invalid input");
    } else photo_dimensions(l, n);
  } else {
    document.write("PLEASE REFRESH");
  }
};

(async function init() {
  await loadPrompts();
})();
