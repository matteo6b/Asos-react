const express = require('express');
const config = require('../../config/main');


const Asociacion = require('../models/asociacion');

//GET - Return all asociaciones in the DB

exports.findAllAsociacion = function(req, res) {
    Asociacion.find(function(err, asociaciones) {
    if(err) res.send(500, err.message);

    console.log('GET /asociaciones')
        res.status(200).json(asociaciones);
    });
}

//GET - Return a Asociacion with specified ID

exports.findById = function(req, res) {
    Asociacion.findById(req.params.id, function(err, asociacion) {
    if(err) return res.send(500, err.message);

    console.log('GET /asociacion/' + req.params.id);
        res.status(200).json(asociacion);
    });
}

//POST - Insert a new Asociacion in the DB

exports.addAsociacion = function(req, res) {
    console.log('POST');
    console.log(req.body);

    var asociacion = new Asociacion({
        name:    req.body.name,
        cuota:     req.body.cuota,
        lat:  req.body.lat,
        lng:   req.body.lng,
        descripcion:  req.body.descripcion

    });

    asociacion.save(function(err, asociacion) {
        if(err) return res.status(500).send( err.message);
    res.status(200).json(asociacion);
    });
}

//PUT - Update a register already exists

exports.updateAsociacion = function(req, res) {
    Asociacion.findById(req.params.id, function(err, asociacion) {
        asociacion.name   = req.body.name;
        asociacion.cuota    = req.body.cuota;
        asociacion.lat = req.body.lat;
        asociacion.lng  = req.body.lng;
        asociacion.descripcion = req.body.descripcion;


        asociacion.save(function(err) {
            if(err) return res.status(500).send(err.message);
      res.status(200).json(asociacion);
        });
    });
}

//DELETE - Delete a Asociacion with specified ID

exports.deleteAsociacion = function(req, res) {
    Asociacion.findById(req.params.id, function(err, asociacion) {
        asociacion.remove(function(err) {
            if(err) return res.status(500).send(err.message);
      res.status(200).send();
        })
    });
}
