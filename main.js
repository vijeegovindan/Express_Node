const express = require('express');
const app = express();

var loremIpsum = require('lorem-ipsum')
  , output     = loremIpsum({
    units: 'sentences',
    sentenceLowerBound: 40,
    sentenceUpperBound: 60,
    paragraphLowerBound: 10,
    paragraphUpperBound: 20,
    format: 'plain',
    random: Math.random
  });

//Code to display the first three paragraphs
app.get('/lorem',function(req, res){
  res.sendFile('index.html', {root:__dirname});
  output = "<h1>Lorem Ipsum</h1><p>" + output + "</p><hr><p>" + output + "</p><hr><p>" + output + "</p>";
  res.send(output);
});

//Hard mode : Code to display the number of paragraghs sent
app.get('/lorem/:int_para',function(req, res){
  //checking for integer
  let int_number_para = req.params.int_para;
  let output_para = "<h1>Lorem Ipsum</h1><hr>";
  for(let i=0;i< int_number_para; i++)
  {
    output_para += "<p>" + output + "</p><hr>";
  }
  res.sendFile('index.html', {root:__dirname});
  res.send(output_para);
});

app.listen(3000, function(){
console.log("On Duty");
});
