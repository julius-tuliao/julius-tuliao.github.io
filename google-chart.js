
 google.charts.load('current', {'packages' : ['table']});
    google.charts.setOnLoadCallback(init);

    var dataSourceUrl = 'https://docs.google.com/spreadsheets/d/1iAxLuHnkoBDEOjNfC9vbbsxltdcthQuJuGWee_jhO7U/edit?usp=sharing';
    var query, options, container;

    function init() {
      query = new google.visualization.Query(dataSourceUrl);
      container = document.getElementById("table");
      options = {'pageSize': 5};
      sendAndDraw();
    }

    function sendAndDraw() {
      query.abort();
      var tableQueryWrapper = new TableQueryWrapper(query, container, options);
      tableQueryWrapper.sendAndDraw();
    }


    function setOption(prop, value) {
      options[prop] = value;
      sendAndDraw();
    }




//GRAPH



// google.charts.load('current');
//   google.charts.setOnLoadCallback(drawVisualization);
//   // google.charts.setOnLoadCallback(drawVisualization2);

//   function drawVisualization() {


// var sel = document.getElementById("choose");
// var text= sel.options[sel.selectedIndex].value;
// var newQuery,title;

//   if (text === 'visualization'){
//   newQuery = 'SELECT B,E,F WHERE E > 0';
//   title = 'BDO CTarget' ;
// } else{

//   newQuery = 'SELECT B,D,F WHERE D > 0';
//   title = 'BDO PTarget' ;

// }


//     var wrap = new google.visualization.ChartWrapper({
//        'chartType':'ComboChart',
//        'dataSourceUrl':'https://docs.google.com/spreadsheets/d/1iAxLuHnkoBDEOjNfC9vbbsxltdcthQuJuGWee_jhO7U/edit?usp=sharing',
//        'containerId':'visualization',
//        'query': newQuery,
//        options: {
//     'title': ' Processed 2005-10',
//     'hAxis': {title: 'Month', titleTextStyle: {color: 'black'}},
//     'vAxis': {title: 'Tonnes', titleTextStyle: {color: 'black'}},
//     'seriesType': 'bars',
//     'series': {1: {type: 'line', color: 'brown'}}, // "5" specifies the column of data used to chart the line
//     'hasLabelsColumn': 'True'}
//        });
//      wrap.draw();
//   }



//    google.load("visualization", "1", {packages:["corechart"]});

// function initialize() {
//         var opts = {sendMethod: 'auto'};
//         // Replace the data source URL on next line with your data source URL.
//         var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1iAxLuHnkoBDEOjNfC9vbbsxltdcthQuJuGWee_jhO7U/edit?usp=sharing', opts);         
//         -
//         // Optional request to return only column C and the sum of column B, grouped by C members.
//         query.setQuery('SELECT B,D,C WHERE D > 0');

//         // Send the query with a callback function.
//         query.send(handleQueryResponse);
// }

// function handleQueryResponse(response) {
//       if (response.isError()) {
//         alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
//         return;
//       }

//     var data = response.getDataTable();

//   var options = {
//   title: 'Leads',
//           hAxis: {showTextEvery: 1},
//           vAxes: {0: {viewWindowMode:'explicit',
//                       viewWindow:{
//                                   max:10013510,
//                                   min:82
//                                   },
//                       gridlines: {color: 'transparent'},
//                       },
//                   1: {gridlines: {color: 'transparent'},
//                       format:"#"},
//                   },
//            seriesType: 'bars',        
//           series: {0: {targetAxisIndex:0},
//                    1:{targetAxisIndex:1, type: 'line'},
//                    // 2:{targetAxisIndex:1},
//                   },
//           colors: ["lightBlue", "green", "orange"],
//           chartArea:{left:100,top:100, width:500, height:150},
//   };

//   var chart = new google.visualization.ComboChart(document.getElementById('chart_div'));
//   chart.draw(data, options);
// }

//       google.setOnLoadCallback(initialize);

   