var packers = {
    "Packers" : [
        {
          "Name" : "John",
          "Station" : "Pack 1"
        },
        {
          "Name" : "Matt",
          "Station" : "Pack You"
        },
        {
          "Name" : "Conard",
          "Station" : "Pack It All"
        }]};

var conardStats = {
    "Name" : "Conard",
    "Data" : [
        {
            "Packed" : 10,
            "Time" : '2012-02-02 0800'
        },
        {
            "Packed" : 20,
            "Time" : '2012-02-02 0900'
        },
        {
            "Packed" : 13,
            "Time" : '2012-02-02 1000'
        },        
        {
            "Packed" : 23,
            "Time" : '2012-02-02 1100'
        },
        {
            "Packed" : 45,
            "Time" : '2012-02-02 1200'
        },
        {
            "Packed" : 1,
            "Time" : '2012-02-02 1300'
        },
    ]
};


var mattStats = {
    "Name" : "Matt",
    "Data" : [
        {
            "Packed" : 10,
            "Time" : '2012-02-02 0800'
        },
        {
            "Packed" : 20,
            "Time" : '2012-02-02 0900'
        },
        {
            "Packed" : 13,
            "Time" : '2012-02-02 1000'
        },        
        {
            "Packed" : 23,
            "Time" : '2012-02-02 1100'
        },
        {
            "Packed" : 45,
            "Time" : '2012-02-02 1200'
        },
        {
            "Packed" : 1,
            "Time" : '2012-02-02 1300'
        },
    ]
};


var johnStats = {
    "Name" : "John",
    "Data" : [
        {
            "Packed" : 10,
            "Time" : '2012-02-02 0800'
        },
        {
            "Packed" : 20,
            "Time" : '2012-02-02 0900'
        },
        {
            "Packed" : 13,
            "Time" : '2012-02-02 1000'
        },        
        {
            "Packed" : 23,
            "Time" : '2012-02-02 1100'
        },
        {
            "Packed" : 45,
            "Time" : '2012-02-02 1200'
        },
        {
            "Packed" : 1,
            "Time" : '2012-02-02 1300'
        },
    ]
};

exports.index = function(req, res){
  res.send(packers);
};

exports.new = function(req, res){
  console.log('new packer');
  res.statusCode = 501;
  res.end();
};

exports.create = function(req, res){
  console.log('create packer');
  res.statusCode = 501;
  res.end();
};

exports.show = function(req, res){
  console.log('show packer ' + req.params.packer);
  console.log('query url ' + req.query["id"]);
  switch(req.params.packer) {
    case 'John':
      res.send(johnStats.Data);
      break;
    case 'Conard':
      res.send(conardStats.Data);
      break;
    case 'Matt':
      res.send(mattStats.Data);
      break;
    default:
      res.statusCode = 501;
      res.send({ error : "Not happening"});
      break;
  }
  //res.send(stats.Data);
  
};

exports.edit = function(req, res){
  console.log('edit packer ' + req.params.packer);
  res.statusCode = 501;
  res.end();
};

exports.update = function(req, res){
  console.log('update packer ' + req.params.packer);
  res.statusCode = 501;
  res.end();
};

exports.destroy = function(req, res){
  console.log('destroy packer ' + req.params.packer);
  res.statusCode = 501;
  res.end();
};