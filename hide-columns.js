import { columns } from "./data.js";

function hideColumns(accessor) {
  const index = columns.findIndex((col) => col.accessor === accessor);
  const column = columns.find((col) => col.accessor === accessor);
  column.hidden = true;

  const headerRows = document.querySelectorAll(".header-row");
  headerRows.forEach((hr) => {
    hr.querySelectorAll(".headerBorder").forEach((hc, ind) => {
      if (ind === index) {
        hc.classList.add("hidden");
      }
    });
  });

  const trs = document.querySelectorAll(".table-row");

  trs.forEach((tr) => {
    tr.querySelectorAll(".table-column").forEach((tc, ind) => {
      if (ind === index) {
        tc.classList.add("hidden");
      }
    });
  });
}

export default hideColumns;
