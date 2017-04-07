'use strict';
/* eslint-disable new-cap */

const router = require('express').Router();
module.exports = router;

const Campus = require('../../db/models/campus');

router.param('campusId', function(req, res, next, id) {
  User.findById(id)
  .then(campus => {
    if (!campus) res.sendStatus(404);
    else {
      req.campus = campus;
      next();
    }
  })
  .catch(next);
});

router.get('/', function(req, res, next) {
  User.findAll()
  .then(data => res.json(data))
  .catch(next);
});

router.post('/', function(req, res, next) {
  User.create(req.body)
  .then(data => res.json(data))
  .catch(next);
});

router.get('/:campusId', function(req, res, next) {
  res.send(req.campus);
});

router.delete('/:campusId', function(req, res, next) {
  req.campus.destroy()
  .then(res.sendStatus(204).bind(res))
  .catch(next);
});

router.put('/:campusId', function(req, res, next) {
  req.campus.update(req.body)
  .then(updatedCampus => res.json(updatedCampus))
  .catch(next);
});

