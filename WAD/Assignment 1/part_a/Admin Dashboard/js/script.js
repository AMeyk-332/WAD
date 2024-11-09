// Select all elements with class "chart"
const charts = document.querySelectorAll(".chart");

// Iterate through each chart element
charts.forEach(function (chart) {
  // Get the 2D rendering context of the canvas element
  var ctx = chart.getContext("2d");
  
  // Create a new Chart.js instance
  var myChart = new Chart(ctx, {
    // Define the chart type as "bar"
    type: "bar",
    
    // Define the data object
    data: {
      // Labels for the x-axis (categories)
      labels: ["TOC", "OS", "ML", "HCI", "ELE-1", "Seminar"],
      
      // Array of datasets to be displayed on the chart
      datasets: [
        {
          // Label for the first dataset
          label: "Unit Test 1",
          
          // Data values for the first dataset
          data: [29, 25, 8, 15, 2, 13],
          
          // Background color for the bars of the first dataset
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(255, 99, 132, 0.2)",
          ],
          
          // Border color for the bars of the first dataset
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(255, 99, 132, 1)",
          ],
          
          // Border width for the bars of the first dataset
          borderWidth: 1,
        },
        {
          // Label for the second dataset
          label: "Unit Test 2",
          
          // Data values for the second dataset
          data: [7, 29, 13, 5, 18, 13],
          
          // Background color for the bars of the second dataset
          backgroundColor : [
            "rgba(0, 100, 0, 1)", // A shade of green for the background
            "rgba(0, 100, 0, 1)", // Same shade for all bars
            "rgba(0, 100, 0, 1)",
            "rgba(0, 100, 0, 1)",
            "rgba(0, 100, 0, 1)",
            "rgba(0, 100, 0, 1)"
          ],
        // Modify the border color for the bars of the second dataset
          borderColor : [
            "rgba(0, 0, 0, 1)",
            "rgba(0, 0, 0, 1)",
            "rgba(0, 0, 0, 1)",
            "rgba(0, 0, 0, 1)",
            "rgba(0, 0, 0, 1)",
            "rgba(0, 0, 0, 1)",
        ],
          
          // Border width for the bars of the second dataset
          borderWidth: 1,
        }
      ]
    },
    
    // Define chart options
    options: {
      scales: {
        y: {
          beginAtZero: true, // Y-axis starts at zero
        }
      }
    }
  });
});

// jQuery code to initialize DataTables
$(document).ready(function () {
  // Iterate through each table with class "data-table"
  $(".data-table").each(function (_, table) {
    // Initialize DataTables for the current table
    $(table).DataTable();
  });
});
