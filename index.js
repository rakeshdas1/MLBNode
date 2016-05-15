const MLBBoxScores = require('mlbboxscores');
var http = require ('http');
var prettify = "https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js";
//this is a test
var boxScoresData;
var options = {
  path: 'year_2016/month_05/day_14/'
};
var mlbboxscores = new MLBBoxScores(options);
mlbboxscores.get((err, boxscores) => {
  boxScoresData = boxscores;
  // JSON.parse(boxscores);
  console.log(boxscores);
});
var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end("<html><script src=" + prettify + "\"></script>" + "<pe class=\"prettyprint\">" + JSON.stringify(boxScoresData) + "</p></html>");
  res.end();
});
server.listen(8100);
