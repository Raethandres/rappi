'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

const fs = require('fs');

const routes = (0, _express.Router)();

/**
 * GET home page
 */

const generate = (Ini, End) => {

  let M = Array();

  let s = Object.assign({}, Ini);
  let e = Object.assign({}, End);
  let sa = Object.assign({}, s);

  while (true) {
    M.push({ x: sa.x, y: sa.y, z: sa.z });
    if (sa.z < e.z) {
      sa.z += 1;
    } else if (sa.y < e.y) {
      sa = Object.assign(sa, { z: s.z });
      sa.y += 1;
    } else if (sa.x < e.x) {
      sa = Object.assign(sa, { z: s.z });
      sa = Object.assign(sa, { y: s.y });
      sa.x += 1;
    } else {

      break;
    }
  }
  return M;
};

routes.get('/', (req, res) => {
  res.render('index', { title });
});

routes.get('/generate', (req, res) => {
  const Cub = generate({ x: 1, y: 1, z: 1 }, { x: req.x, y: req.y, z: req.z });
  res.render('index', { title });
});

routes.post('/update', (req, res) => {
  let r = Cub.findIndex(element => {
    if (element.x == req.x && element.y == req.y && element.z == req.z) {
      return element;
    }
  });
  Cub[r] = Object.assign({}, { v: req.v });
  res.render('index', { title });
});

routes.get('/querry', (req, res) => {
  const subCub = generate({ x: req.xi, y: req.yi, z: req.zi }, { x: req.xe, y: req.ye, z: req.ze });
  let r = Cub.findIndex(element => {
    if (element.x == req.x && element.y == req.y && element.z == req.z) {
      return element;
    }
  });
  res.render('index', { title });
});

exports.default = routes;
//# sourceMappingURL=routes.js.map