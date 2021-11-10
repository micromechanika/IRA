function createCheckbox() {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("input");
  return checkbox;
}
function addListenerCheckbox() {
  const selectAllRef = document.querySelector(".selectAll");
  selectAllRef.addEventListener("click", (event) => {
    const allCheckboxes = document.querySelectorAll(".input");
    allCheckboxes.forEach((checkbox) => {
      checkbox.checked = event.target.checked;
    });
  });
}

export { createCheckbox, addListenerCheckbox };
