const path = require('path');

module.exports = Object.freeze({
	GENERATORS : Object.freeze({
        CONTROLLERS_PATH: path.join(__dirname, './../src/server/controllers/api'),
        MODELS_PATH: path.join(__dirname, './../src/server/models'),
        ROUTES_PATH: path.join(__dirname, './../src/server/routes/routers/apiRoutes'),
        API_ROUTER_PATH: path.join(__dirname, './../src/server/routes/routers/apiRouter.js'),
        PAGES_PATH: path.join(__dirname, './../src/client/components/pages'),
        ROUTES_SERVICE_PATH: path.join(__dirname, './../src/client/resources/services/routesService.js')
    })
});
