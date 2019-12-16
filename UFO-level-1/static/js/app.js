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

//The possible fields:
// 1.date
// 2. `city`
// 3. `state`
// 4. `country`
// 5. `shape`

//INPUT #1
//create date input field reference
var dateField = d3.select("#datetime");

//INPUT #2
//create city input field reference
var cityField = d3.select("#city");

//INPUT #3
//create state input field reference
var stateField = d3.select("#state");

//INPUT #4
//create country input field reference
var countryField = d3.select("#country");

//INPUT #5
//create shape input field reference
var shapeField = d3.select("#shape");






console.log("date entered is : " +dateField);

//create reference to filter button
var button = d3.select("#filter-btn");







function populatetable(filtered)
    {
            // Get a reference to the table body
            var tbody = d3.select("tbody");

            //remove old data
            rows = tbody.selectAll("tr").remove();

            //itereate through filtered data
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

    //BEGIN OLD METHOD for DATE ONLY________
        //get input date from the date input field
        // var inputDate = dateField.node().value;
        // console.log(inputDate);

        // //arr1 is the array matching the date criteria we want
        // var arr1 = tableData.filter(d => d.datetime == inputDate);
    //END OLD METHOD for DATE ONLY________

    //new METHOD, iterate through array of fields and array of the JSON keys, retrieving the field's value and calling filter for each value, unless no input

    field_arr = [dateField, cityField, stateField, countryField, shapeField];
    json_arr = ["datetime", "city", "state", "country", "shape"];

    //create new variable filtered that will be iteratively narrowed down based on the filters that are filled by the user
    var arr1 = tableData; 
    for (var i =0; i<5; i++)
    {
        //retrieve string from input and save it as a variable
        var inputField = field_arr[i].node().value; 
        //if the string has data inputted, i.e lenght is not zero, run the filter function, otherwise nothing happens
        if (inputField.length !=0)
        {
            var arr1 = arr1.filter(d => d[json_arr[i]] == inputField);
        }
        
    }
    populatetable(arr1);
}

button.on("click", handleClick);

//   // Input fields can trigger a change event when new text is entered.
//     dateField.on("change", function() {
//     var newText = d3.event.target.value;
//     console.log(newText);
//   });
// Create a custom filtering function


