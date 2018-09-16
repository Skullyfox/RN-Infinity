const logRequest = require('./../middlewares/logRequest.js');
const apiRouter = require('./routers/apiRouter.js');
const wwwRouter = require('./routers/wwwRouter.js');

module.exports = app => {
    app.use('/api', logRequest, apiRouter);
    app.use('/', wwwRouter);
};
