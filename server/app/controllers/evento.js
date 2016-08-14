
const Evento = require('../models/evento');

//GET - Return all eventos in the DB

exports.findAllEvento = function(req, res) {
    Evento.find(function(err, eventos) {
    if(err) res.send(500, err.message);

    console.log('GET /eventos')
        res.status(200).json(eventos);
    });
}

//GET - Return a Evento with specified ID

exports.findById = function(req, res) {
    Evento.findById(req.params.id, function(err, evento) {
    if(err) return res.send(500, err.message);

    console.log('GET /evento/' + req.params.id);
        res.status(200).json(evento);
    });
}

//POST - Insert a new Evento in the DB

exports.addEvento = function(req, res) {
    console.log('POST');
    console.log(req.body);

    var evento = new Evento({
        name:    req.body.name,
        cuota:     req.body.cuota,
        lat:  req.body.lat,
        lng:   req.body.lng,
        descripcion:  req.body.descripcion

    });

    evento.save(function(err, evento) {
        if(err) return res.status(500).send( err.message);
    res.status(200).json(evento);
    });
}

//PUT - Update a register already exists

exports.updateEvento = function(req, res) {
    Evento.findById(req.params.id, function(err, evento) {
        evento.name   = req.body.name;
        evento.cuota    = req.body.cuota;
        evento.lat = req.body.lat;
        evento.lng  = req.body.lng;
        evento.descripcion = req.body.descripcion;
        evento.finish=req.body.finish;

        evento.save(function(err) {
            if(err) return res.status(500).send(err.message);
      res.status(200).json(evento);
        });
    });
}

//DELETE - Delete a Evento with specified ID

exports.deleteEvento = function(req, res) {
    Evento.findById(req.params.id, function(err, evento) {
        evento.remove(function(err) {
            if(err) return res.status(500).send(err.message);
      res.status(200).send();
        })
    });
}
