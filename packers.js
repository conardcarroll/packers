var packers = {
    "packers" : [{
            "id" : 1,
            "name" : "John",
        }, {
            "id" : 2,
            "name" : "Matt",
        }, {
            "id" : 3,
            "name" : "Conard",
        }
    ]
};

var conardStats = {
    "name" : "Conard",
    "data" : [{
            "packed" : 10,
            "time" : '2012-02-02 0800'
        }, {
            "packed" : 20,
            "time" : '2012-02-02 0900'
        }, {
            "packed" : 13,
            "time" : '2012-02-02 1000'
        }, {
            "packed" : 23,
            "time" : '2012-02-02 1100'
        }, {
            "packed" : 45,
            "time" : '2012-02-02 1200'
        }, {
            "packed" : 1,
            "time" : '2012-02-02 1300'
        },
    ]
};

var mattStats = {
    "name" : "Matt",
    "data" : [{
            "packed" : 10,
            "time" : '2012-02-02 0800'
        }, {
            "packed" : 20,
            "time" : '2012-02-02 0900'
        }, {
            "packed" : 13,
            "time" : '2012-02-02 1000'
        }, {
            "packed" : 23,
            "time" : '2012-02-02 1100'
        }, {
            "packed" : 45,
            "time" : '2012-02-02 1200'
        }, {
            "packed" : 1,
            "time" : '2012-02-02 1300'
        },
    ]
};

var johnStats = {
    "name" : "John",
    "data" : [{
            "packed" : 10,
            "time" : '2012-02-02 0800'
        }, {
            "packed" : 20,
            "time" : '2012-02-02 0900'
        }, {
            "packed" : 13,
            "time" : '2012-02-02 1000'
        }, {
            "packed" : 23,
            "time" : '2012-02-02 1100'
        }, {
            "packed" : 45,
            "time" : '2012-02-02 1200'
        }, {
            "packed" : 1,
            "time" : '2012-02-02 1300'
        },
    ]
};

exports.index = function (req, res) {
    res.header('content-type', "application/json");
    res.render('packer', {
        site: 'http://localhost:3000/collection/tasks/',
        packer: packers.packers[0]
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
    res.statusCode = 501;
    res.end();
};

exports.destroy = function (req, res) {
    console.log('destroy packer ' + req.params.packer);
    res.statusCode = 501;
    res.end();
};
