// from data.js
var tableData = data;

// console.log(tableData);


// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

tableData.forEach(function(ufoSights) {
    //console.log(ufoSights);
    var row = tbody.append("tr");
    Object.entries(ufoSights).forEach(function([key, value]) {
        //console.log(key, value);
        // Append a cell to the row for each value
        // in the weather report object
        var cell = row.append("td");
        cell.text(value);
});
});

//create date input field reference
var dateField = d3.select("#datetime");
console.log("date entered is : " +dateField);

//create reference to filter button
var button = d3.select("#filter-btn");



//create filter function 
function selectDate(date) {
    console.log("Your entered : " +date);
    var arr1 = tableData.filter(d => d.datetime == date);
    console.log("Filtered Array: " +arr1);
    return arr1; 
}

//when filter-btn is clicked on, populate the date variable and call the filter function




function populatetable(filtered)
    {
            // Get a reference to the table body
            var tbody = d3.select("tbody");

            //remove old data
            rows = tbody.selectAll("tr").remove();

            filtered.forEach(function(ufoSights) {
                //console.log(ufoSights);
                var row = tbody.append("tr");
                Object.entries(ufoSights).forEach(function([key, value]) {
                    //console.log(key, value);
                    // Append a cell to the row for each value
                    // in the weather report object
                    var cell = row.append("td");
                    cell.text(value);
    });
    });

    }
function handleClick()
{
    console.log("Clicked");
    event.preventDefault();
    //get input date from the date input field
    //var inputDate = d3.event.target.value;
    var inputDate = dateField.node().value;
    console.log(inputDate);
    //filtered is the array matching the date criteria we want
    var arr1 = tableData.filter(d => d.datetime == inputDate);
    populatetable(arr1);
}

button.on("click", handleClick);

//   // Input fields can trigger a change event when new text is entered.
//     dateField.on("change", function() {
//     var newText = d3.event.target.value;
//     console.log(newText);
//   });
// Create a custom filtering function


