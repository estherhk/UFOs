// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

//create self-contained table
function buildTable(dataArgument) {
    // First, clear out any existing data
    tbody.html("");
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    dataArgument.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");
    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
    );
    });
}

//replace old handleClick with new handleClick
function newhandleClick(){
    const filters = {
        datetime:d3.select("#datetime").property("value"),
        city:d3.select("#city").property("value"),
        state:d3.select("#state").property("value"),
        country:d3.select("#country").property("value"),
        shape:d3.select("#shape").property("value")
    };
    
    // filterTable()
    filterTable2(filters)
}


function filterTable2(filters) {
    let filteredData = tableData;
    // Check to see if a date was entered and filter the
    // data using that date.
    Object.entries (filters).forEach(([key,val])=> {
        if (val) {
            filteredData = filteredData.filter(row => row[key] === val);
        } 
    })
    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
}
// Attach an event to listen for the form button
d3.select("#filter-btn").on("click", newhandleClick);
d3.selectAll("input").on("change", newhandleClick);

// Build the table when the page loads
buildTable(tableData);



// //Create Filters
// var dateFilter = ""
// var cityFilter = ""
// var stateFilter = ""
// var countryFilter = ""
// var shapeFilter = ""

  // //create button with D3 .   THIS ACTUALLY WORKED. WHY MAKE MORE WORK.
// function handleClick() {
//     // Grab the datetime value from the filter
//     let date = d3.select("#datetime").property("value");
//     let city = d3.select("#city").property("value");
//     let state = d3.select("#state").property("value");
//     let country = d3.select("#country").property("value");
//     let shape = d3.select("#shape").property("value");
//     let filteredData = tableData;
//     // Check to see if a date was entered and filter the
//     // data using that date.
//     if (date) {
//       // Apply `filter` to the table data to only keep the
//       // rows where the `datetime` value matches the filter value
//       filteredData = filteredData.filter(row => row.datetime === date);    
//     }
//     if (city) {
//         filteredData = filteredData.filter(row => row.city === city);
//     }
//     if (state) {
//         filteredData = filteredData.filter(row => row.state === state);
//     } 
//     if (country) {
//         filteredData = filteredData.filter(row => row.country === country);
//     } 
//     if (shape) {
//         filteredData = filteredData.filter(row => row.shape === shape);
//     } 
//     // Rebuild the table using the filtered data
//     // @NOTE: If no date was entered, then filteredData will
//     // just be the original tableData.
//     buildTable(filteredData);
// }


    // //ternary operator check for filter
    // dateFilter = date.length > 0 ? date: ""
    // cityFilter = city.length > 0 ? city: ""
    // stateFilter = state.length > 0 ? state: ""
    // countryFilter = country.length > 0 ? country: ""
    // shapeFilter = shape.length > 0 ? shape: ""

//create Function filterTable
// function filterTable() {
//     let filteredData = tableData;
//     // Check to see if a date was entered and filter the
//     // data using that date.
//     if (dateFilter) {
//       // Apply `filter` to the table data to only keep the
//       // rows where the `datetime` value matches the filter value
//       filteredData = filteredData.filter(row => row.datetime === dateFilter);    
//     }
//     if (cityFilter) {
//         filteredData = filteredData.filter(row => row.city === cityFilter);
//     }
//     if (stateFilter) {
//         filteredData = filteredData.filter(row => row.state === stateFilter);
//     } 
//     if (countryFilter) {
//         filteredData = filteredData.filter(row => row.country === countryFilter);
//     } 
//     if (shapeFilter) {
//         filteredData = filteredData.filter(row => row.shape === shapeFilter);
//     } 
//     // Rebuild the table using the filtered data
//     // @NOTE: If no date was entered, then filteredData will
//     // just be the original tableData.
//     buildTable(filteredData);