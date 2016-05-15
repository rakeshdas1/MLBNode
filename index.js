const MLBBoxScores = require('mlbboxscores');
var http = require ('http');
//this is a test
var boxScoresData;
var options = {
  path: 'year_2016/month_05/day_13/'
};
var mlbboxscores = new MLBBoxScores(options);
mlbboxscores.get((err, boxscores) => {
  boxScoresData = boxscores;
  console.log(typeof boxScoresData.toString());
});
var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end("<html>HELLO WORLD!" + "<p>" + JSON.stringify(boxScoresData) + "</p></html>");
  res.end();
});
server.listen(8000);
