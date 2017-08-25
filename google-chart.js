
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
  newQuery = 'SELECT B,E WHERE E > 0';
  title = 'BDO CTarget' ;
} else{

  newQuery = 'SELECT B,D WHERE D > 0';
  title = 'BDO PTarget' ;

}


    var wrap = new google.visualization.ChartWrapper({
       'chartType':'ColumnChart',
       'dataSourceUrl':'https://docs.google.com/spreadsheets/d/1iAxLuHnkoBDEOjNfC9vbbsxltdcthQuJuGWee_jhO7U/edit?usp=sharing',
       'containerId':'visualization',
       'query': newQuery,
       'options': {'title':title, 'legend':'Q'}
       });
     wrap.draw();
  }
