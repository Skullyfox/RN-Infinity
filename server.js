/**
 * Server entry point.
 *
 */
require('dotenv').config({
    path: 'config/.env'
});

const logger = require('./src/server/logger/logger.js');
const handleListen = require('./src/server/handleListen.js');
const webpack = require('./src/server/middlewares/webpack.js');

logger.info(`=============================================
      Building App...STARTED
      =============================================`);

webpack()
    .then(() => {
        const http = require('./src/server/app.js');
        logger.info(`=============================================
      Building App...DONE`);
        http.listen(process.env.PORT, handleListen(logger.info));
    })
    .catch(err => logger.error(err.stack));
