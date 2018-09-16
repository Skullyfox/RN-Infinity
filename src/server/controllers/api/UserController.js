/*
* User controller.
*
*/
const models = require('./../../models');

class UserController {
    async findAll(queryParams) {
        return {
            data: {
                users: (await models.User.findAll(queryParams)).toJSON()
            }
        };
    }

    async findbyId(id, queryParams) {
        return {
            data: {
                users: (await models.User.findOne(id, queryParams)).toJSON()
            }
        };
    }

    async create(data) {
        return {
            data: {
                user: (await models.User.create(data)).toJSON()
            }
        };
    }

    async destroy(id, queryParams) {
        return {
            data: {
                user: (await models.User.destroy(id, queryParams)).toJSON()
            }
        };
    }

    async update(id, data) {
        return {
            data: {
                user: (await models.User.update(id, {}, data)).toJSON()
            }
        };
    }
}

module.exports = new UserController();