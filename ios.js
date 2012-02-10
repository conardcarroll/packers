
var points = [
{
    "id": 1,
    "name": "Point One",
    "type": "digitalIn",
    "state": "on"
},
{
    "id": 2,
    "name": "Point Two",
    "type": "digitalOut",
    "state": "forcedOff"
},
{
    "id": 3,
    "name": "Point One",
    "type": "analogIn",
    "state": "foreced",
    "forceValue": 8000
}
];

var contentType = "application/json";

exports.index = function (req, res) {
    res.header('content-type', contentType);
    res.render('ios', {
        site : 'http://localhost:8004/ios/',
        points : points
    });
};

exports.new = function (req, res) {
    console.log('new packer');
    res.statusCode = 501;
    res.end();
};

exports.create = function (req, res) {
    console.log('create packer');
    res.statusCode = 501;
    res.end();
};

exports.show = function (req, res) {
    console.log('show packer ' + req.params.packer);
    console.log('query url ' + req.query["id"]);
    switch (req.params.packer) {
    case 'John':
        res.send(johnStats.data);
        break;
    case 'Conard':
        res.send(conardStats.data);
        break;
    case 'Matt':
        res.send(mattStats.data);
        break;
    default:
        res.statusCode = 501;
        res.send({
            error : "Not happening"
        });
        break;
    }
    //res.send(stats.Data);
    
};

exports.edit = function (req, res) {
    console.log('edit packer ' + req.params.packer);
    res.statusCode = 501;
    res.end();
};

exports.update = function (req, res) {
    console.log('update packer ' + req.params.packer);
	var idx = (req.params.i || '');
    var state,
    i,
    x;

    // get data array
    data = req.body.template.data;

    // pull out values we want
    for (i = 0, x = data.length; i < x; i++) {
        switch (data[i].name) {
        case 'state':
            state = data[i].value;
            break;
        }
    }

	for (i = 0; i < points.length; i++) {
		if(points[i].id == idx) {
			points[i].state = state;
	        res.redirect('/collection/tasks/' + idx, 302);
		}
	}
	
    res.statusCode = 501;
    res.end();
};

exports.destroy = function (req, res) {
    console.log('destroy packer ' + req.params.packer);
    res.statusCode = 501;
    res.end();
};
