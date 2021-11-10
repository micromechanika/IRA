import { columns } from "./data.js";

export function showColumns(accessor) {
  const index = columns.findIndex((col) => col.accessor === accessor);
  const column = columns.find((col) => col.accessor === accessor);
  column.hidden = false;

  const headerRows = document.querySelectorAll(".header-row");
  headerRows.forEach((hr) => {
    hr.querySelectorAll(".headerBorder").forEach((hc) => {
      hc.classList.remove("hidden");
    });
  });
  const trs = document.querySelectorAll(".table-row");

  trs.forEach((tr) => {
    tr.querySelectorAll(".table-column").forEach((tc) => {
      tc.classList.remove("hidden");
    });
  });
}
