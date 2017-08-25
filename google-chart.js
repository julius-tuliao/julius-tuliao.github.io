
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



google.charts.load('current');
  google.charts.setOnLoadCallback(drawVisualization);
  // google.charts.setOnLoadCallback(drawVisualization2);

  function drawVisualization() {


var sel = document.getElementById("choose");
var text= sel.options[sel.selectedIndex].value;
var newQuery,title;

  if (text === 'visualization'){
  newQuery = 'SELECT B,E,F WHERE E > 0';
  title = 'BDO CTarget' ;
} else{

  newQuery = 'SELECT B,D,F WHERE D > 0';
  title = 'BDO PTarget' ;

}


    var wrap = new google.visualization.ChartWrapper({
       'chartType':'ComboChart',
       'dataSourceUrl':'https://docs.google.com/spreadsheets/d/1iAxLuHnkoBDEOjNfC9vbbsxltdcthQuJuGWee_jhO7U/edit?usp=sharing',
       'containerId':'visualization',
       'query': newQuery,
       options: {
    'title': ' Processed 2005-10',
    'hAxis': {title: 'Month', titleTextStyle: {color: 'black'}},
    'vAxis': {title: 'Tonnes', titleTextStyle: {color: 'black'}},
    'seriesType': 'bars',
    'series': {1: {type: 'line', color: 'brown'}}, // "5" specifies the column of data used to chart the line
    'hasLabelsColumn': 'True'}
       });
     wrap.draw();
  }





// google.setOnLoadCallback(drawVisualization);
// function drawVisualization() {
//   var wrapper = new google.visualization.ChartWrapper({ 
//     chartType: 'ComboChart',
//     RefreshInterval: 1, 
//     dataSourceUrl: 'https://docs.google.com/spreadsheets/d/1iAxLuHnkoBDEOjNfC9vbbsxltdcthQuJuGWee_jhO7U/edit?usp=sharing',
//     options: {
//     'title': 'Fish Processed 2005-10',
//     'hAxis': {title: 'Year', titleTextStyle: {color: 'black'}},
//     'vAxis': {title: 'Tonnes', titleTextStyle: {color: 'black'}},
//     'seriesType': 'bars',
//     'series': {5: {type: 'line', color: 'brown'}}, // "5" specifies the column of data used to chart the line
//     'hasLabelsColumn': 'True'},
//   containerId: 'visualizationNew'

//   'query': 'SELECT B,C,D,E,F,G,H WHERE D > 0'
//   });
//   wrapper.draw()
// } 
