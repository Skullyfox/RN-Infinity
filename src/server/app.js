/**
 * Main app file.
 *
 * @author Daria <lo.pennequin@gmail.com>
 */

/*  =============================================================================
    Globals
    ============================================================================= */
global.fetch = require('node-fetch');

/*  =============================================================================
    Dependencies
    ============================================================================= */
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');

/*  =============================================================================
    Init Express App
    ============================================================================= */
const app = express();
const http = require('http').Server(app);

/*  =============================================================================
    Socket.io Config
    ============================================================================= */
require('./socketIo').init(http);

/*  =============================================================================
    App Config
    ============================================================================= */

app.disable('x-powered-by');
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));
app.use(favicon('./public/favicon.ico'));

/*  =============================================================================
    Routes config
    ============================================================================= */
require('./routes')(app);

module.exports = http;
