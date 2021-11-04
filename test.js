
const headerColumn = document.querySelectorAll(".header-column");

headerColumn.forEach((th) => {
  th.addEventListener("click", (event) => {
    const accessor = event.currentTarget.dataset.accessor;
    const toggle = event.currentTarget.dataset.toggle;

    if (event.target) {
      let toggle = columns.find((c) => c.accessor === accessor).toggle;
      console.log(order)
    }
  })
})
