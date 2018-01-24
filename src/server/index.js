'use strict';

const express = require('express');
const path = require('path');
const app = express();

let server = null;

app.use('/', express.static(path.resolve(__dirname, '../../dist')));

app.listen(4000);