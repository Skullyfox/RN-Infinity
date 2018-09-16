/*
* The User routes.
*
*/
const router = require('express').Router();
const ctrl = require('./../../../controllers/api').withHandler;

router.get('/users', (req, res, next) =>
    ctrl.User('findAll', (req, res, next) => [req.query])(req, res, next)
);

router.get('/users/:id', (req, res, next) =>
    ctrl.User('findById', (req, res, next) => [req.params.id, req.query])(req, res, next)
);

router.post('/users', (req, res, next) =>
    ctrl.User('create', (req, res, next) => [req.body])(req, res, next)
);

router.delete('/users/:id', (req, res, next) =>
    ctrl.User('destroy', (req, res, next) => [req.params.id, req.query])(req, res, next)
);

router.put('/users/:id', (req, res, next) =>
    ctrl.User('update', (req, res, next) => [req.params.id, req.body])(req, res, next)
);

module.exports = router;