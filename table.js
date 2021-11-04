const countries = [
    {
        id: 2,
        name: "Aland Islands",
        iso3: "ALA",
        phone_code: "+358-18",
        capital: "Mariehamn",
        currency: "EUR"
    },
    {
        id: 1,
        name: "Afghanistan",
        iso3: "AFG",
        phone_code: "93",
        capital: "Kabul",
        currency: "AFN"
    },
    {
        id: 3,
        name: "Albania",
        iso3: "ALB",
        phone_code: "355",
        capital: "Tirana",
        currency: "ALL"
    },
    {
        id: 4,
        name: "Algeria",
        iso3: "DZA",
        phone_code: "213",
        capital: "Algiers",
        currency: "DZD"
    },

    {
        id: 6,
        name: "Andorra",
        iso3: "AND",
        phone_code: "376",
        capital: "Andorra la Vella",
        currency: "EUR"
    },
    {
        id: 7,
        name: "Angola",
        iso3: "AGO",
        phone_code: "244",
        capital: "Luanda",
        currency: "AOA"
    },
    {
        id: 5,
        name: "American Samoa",
        iso3: "ASM",
        phone_code: "+1-684",
        capital: "Pago Pago",
        currency: "USD"
    },
    {
        id: 8,
        name: "Anguilla",
        iso3: "AIA",
        phone_code: "+1-264",
        capital: "The Valley",
        currency: "AOA"
    },
    {
        id: 9,
        name: "Antarctica",
        iso3: "ATA",
        phone_code: "672",
        capital: "",
        currency: "AAD"
    },
    {
        id: 10,
        name: "Antigua And Barbuda",
        iso3: "ATG",
        phone_code: "+1-268",
        capital: "St. John's",
        currency: "XCD"
    },
    {
        id: 11,
        name: "Argentina",
        iso3: "ARG",
        phone_code: "54",
        capital: "Buenos Aires",
        currency: "ARS"
    },
    {
        id: 12,
        name: "Armenia",
        iso3: "ARM",
        phone_code: "374",
        capital: "Yerevan",
        currency: "AMD"
    },
    {
        id: 13,
        name: "Aruba",
        iso3: "ABW",
        phone_code: "297",
        capital: "Oranjestad",
        currency: "AWG"
    },
    {
        id: 14,
        name: "Australia",
        iso3: "AUS",
        phone_code: "61",
        capital: "Canberra",
        currency: "AUD"
    },
    {
        id: 15,
        name: "Austria",
        iso3: "AUT",
        phone_code: "43",
        capital: "Vienna",
        currency: "EUR"
    },
    {
        id: 16,
        name: "Azerbaijan",
        iso3: "AZE",
        phone_code: "994",
        capital: "Baku",
        currency: "AZN"
    },
    {
        id: 17,
        name: "Bahamas The",
        iso3: "BHS",
        phone_code: "+1-242",
        capital: "Nassau",
        currency: "BSD"
    },
    {
        id: 18,
        name: "Bahrain",
        iso3: "BHR",
        phone_code: "973",
        capital: "Manama",
        currency: "BHD"
    },
    {
        id: 19,
        name: "Bangladesh",
        iso3: "BGD",
        phone_code: "880",
        capital: "Dhaka",
        currency: "BDT"
    },
    {
        id: 20,
        name: "Barbados",
        iso3: "BRB",
        phone_code: "+1-246",
        capital: "Bridgetown",
        currency: "BBD"
    }
];

const columns = [
    {
        label: "Id",
        accessor: "id",
        order: "asc",
        sortingType: "number",
        hidden: false,
        toggle: true
    },
    {
        label: "Name",
        accessor: "name",
        order: "asc",
        sortingType: "string",
        hidden: false,
        toggle: true
    },
    {
        label: "Iso",
        accessor: "iso3",
        order: "asc",
        sortingType: "string",
        hidden: false,
        toggle: true
    },
    {
        label: "Capital",
        accessor: "capital",
        order: "asc",
        sortingType: "string",
        hidden: false,
        toggle: true
    },
    {
        label: "Currency",
        accessor: "currency",
        order: "asc",
        sortingType: "string",
        hidden: false,
        toggle: true
    },
    {
        label: "Phone-code",
        accessor: "phone_code",
        order: "asc",
        sortingType: "number",
        hidden: false,
        toggle: true
    }
];

const refs = {
    wrapper: document.querySelector("#wrapper")
    //headerCheckbox: document.querySelectorAll(".selectAll"),
};

//function which is creating the header of table
function createHeaders(columns) {
    //row of headers
    const headersRow = document.createElement("div");
    headersRow.classList.add("header-row");

    //checkbox for header
    const headerCheckbox = createCheckbox();
    headersRow.append(headerCheckbox);
    headerCheckbox.classList.add("selectAll");
    const headerCells = columns.map((column) => createHeaderCell(column));
    //add all cells to header

    headersRow.append(...headerCells);

    return headersRow;
}

function createHeaderCell(column) {
    const headerBorder = document.createElement("div");
    headerBorder.classList.add("headerBorder");
    if (column.hidden) {
        headerBorder.classList.add("table-column-hidden");
    }
    const headerCell = document.createElement("div");
    headerCell.classList.add("header-column");

    headerCell.setAttribute("data-accessor", column.accessor);
    headerCell.setAttribute("data-sorting", column.sortingType);
    headerCell.setAttribute("data-hidden", column.hidden);
    headerCell.setAttribute('data-toggle', column.toggle);
    headerCell.textContent = column.label;
    headerBorder.append(headerCell);
    //button add

    const arrow = "fas fa-arrow-up";
    const more = "fas fa-ellipsis-v";
    const btnArrow = "btn-arrow";
    const btnMore = "btn-more";
    const iconArrow = createButton(arrow, btnArrow);

    const iconMore = createButton(more, btnMore);
    ;
    const buttonWrapper = document.createElement("div");
    buttonWrapper.classList.add("button-wrapper");
    buttonWrapper.append(iconArrow, iconMore);
    headerCell.append(buttonWrapper);

    return headerBorder;
}

//the function that creates body of table it takes array of columns and countries
function createCells(columns, countries) {
    // row in body table

    const rows = countries.map((country) => {
        const row = document.createElement("div");
        row.classList.add("table-row");

        // create checkboxes for the bodyRows
        const bodyCheckbox = createCheckbox();
        row.append(bodyCheckbox);
        //created cells in the body table

        const cells = columns.map((column) => createTableCells(country, column));

        row.append(...cells);

        return row;
    });

    return rows;
}

function createTableCells(country, column) {
    const cell = document.createElement("div");
    cell.classList.add("table-column");
    if (column.hidden) {
        cell.classList.add("table-column-hidden");
    }

    cell.textContent = country[column.accessor];

    return cell;
}

// main function for the table
function createTable(columns, countries) {
    const table = document.createElement("table");
    table.classList.add("table");
    const thead = document.createElement("div");

    const tbody = document.createElement("div");
    tbody.classList.add("tbody");
    const headerRow = createHeaders(columns);

    const filterInput = createFilterRow();

    const rows = createCells(columns, countries);

    refs.wrapper.append(table);
    table.append(thead);
    table.append(tbody);
    thead.append(headerRow, filterInput);

    tbody.append(...rows);
    // buttons

    //listeners
    // addListenersHideColumns();
}

createTable(columns, countries);

function createButton(fontAwesomeIcon, buttonClass) {
    const button = document.createElement("button");
    button.classList.add(buttonClass);
    const icon = document.createElement("i");
    const iconarr = fontAwesomeIcon.split(" ");
    iconarr.map((cl) => {
        return icon.classList.add(cl);
    });
    button.appendChild(icon);

    return button;
}

function createCheckbox() {
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("input");
    return checkbox;
}

const selectAllRef = document.querySelector(".selectAll");
selectAllRef.addEventListener("click", (event) => {
    const allCheckboxes = document.querySelectorAll(".input");
    allCheckboxes.forEach((checkbox) => {
        checkbox.checked = event.target.checked;
    });
});

function bubbleSort(countries, accessor, sortingType, order = "asc") {
    const newArr = [...countries];

    for (let i = 0; i < newArr.length - 1; i++) {
        for (let j = 0; j < newArr.length - 1 - i; j++) {
            if (sortingType === "number") {
                if (newArr[j][accessor] > newArr[j + 1][accessor]) {
                    [newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]];
                }
            } else if (sortingType === "string") {
                if (newArr[j][accessor].localeCompare(newArr[j + 1][accessor]) > 0) {
                    [newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]];
                }
            }
        }
    }

    if (order === "desc") {
        const ascSort = [...newArr].reverse();
        console.log(ascSort);
        return ascSort;
    }
    return newArr;
}

function makeSort() {
    const headerColumn = document.querySelectorAll(".header-column");
    //const arrow = document.querySelector(".fa-arrow-up");
    headerColumn.forEach((th) => {
        th.addEventListener("click", (event) => {
            const accessor = event.currentTarget.dataset.accessor;
            const sortingType = event.currentTarget.dataset.sorting;

            if (event.target.closest("button.btn-arrow")) {
                let order = columns.find((c) => c.accessor === accessor).order;
                console.log(order);

                const sortingData = bubbleSort(countries, accessor, sortingType, order);
                const newOrder = order === "asc" ? "desc" : "asc";

                columns.forEach((column) => {
                    if (column.accessor === accessor) {
                        column.order = newOrder;
                        //arrow.style.transform = "rotate(180deg)";
                    } else {
                        column.order = "asc";
                    }
                });
                const tableRow = document.querySelector(".tbody");
                tableRow.innerHTML = "";
                const rows = createCells(columns, sortingData);
                tableRow.append(...rows);
            }
        });
    });
}

makeSort();

function createFilterRow() {
    const filterRow = document.createElement("div");
    filterRow.classList.add("filter-row");
    const labelName = document.createElement("label");
    labelName.classList.add("filter-label");
    labelName.innerHTML = "Country name";
    const filterInput = document.createElement("input");
    filterInput.type = "text";
    filterInput.placeholder = "Enter country name";
    filterInput.classList.add("filter-input");
    labelName.append(filterInput);
    filterRow.append(labelName);
    return filterRow;
}


const input = document.querySelector(".filter-input");
const tableRow = document.querySelector(".tbody");
input.addEventListener("input", (event) => {
    filterTableByName(event, columns);
});

function filterTableByName(event, columns) {
    tableRow.innerHTML = "";

    const name = columns.find((c) => c.accessor === "name");
    if (!name) {
        return;
    }
    const filteredItems = countries.filter((country) =>
        country.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    const filter = createCells(columns, filteredItems);
    tableRow.append(...filter);
}


function addListenersHideColumns() {
    const headerColumnsToHide = document.querySelectorAll(".header-column");
    headerColumnsToHide.forEach((th) => {
        th.addEventListener("click", (event) => {
            if (event.target.closest("button.btn-more")) {
                const accessor = event.currentTarget.dataset.accessor;
                hideColumns(accessor)
            }
        });
    });
}

// function hideColumns (accessor){
//   const index = columns.findIndex((col) => col.accessor === accessor);
//   const column = columns.find((col) => col.accessor === accessor);
//   column.hidden = true;

//   columns.splice(index, 1, column);

//   refs.wrapper.innerHTML = "";
//   createTable(columns, countries);
// }


function CreateDropDownList() {
    const buttonsMore = document.querySelectorAll(".btn-more");
    buttonsMore.forEach(button => {

        const select = `
    <ul class='select active'>
          <li class="list asc"><button class= "button-list btn-asc">Sort by ASC</button></li>
          <li class="list desc"><button class="button-list btn-desc">Sort by DESC</button></li>
          <li class="list hide-column"><button class="button-list btn-hide">HIDE</button></li>
          <li class="list desc"><button class="button-list btn-show">SHOW ALL</button></li>
    </ul>`;

        return button.innerHTML += select;

    })

}

CreateDropDownList()


function toggleMenu() {
    const tr = document.querySelectorAll(".header-column");
    tr.forEach(th => {
        th.addEventListener("click", (event) => {
            const target = event.target
            const accessor = event.currentTarget.dataset.accessor;
            if (target.tagName === 'BUTTON') {
                const isMore = target.classList.contains("btn-more")
                if (isMore) {
                    showDropDown(target, accessor)
                }
            }
        })
    })

}

toggleMenu()


function showDropDown(target, accessor) {
    const ul = target.querySelector('.select');
    const column = columns.find(col => col.accessor === accessor)
    if (column.toggle) {
        column.toggle = false;
        ul.classList.remove('active')
    } else {
        column.toggle = true;
        ul.classList.add('active')
    }
}

