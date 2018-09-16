const fs = require('fs');
const Bookshelf = require('./../services/database.js');
const toSlice = 'Model.js'.length;

let models = {};

class Model {
    constructor(model, modelName) {
        this._model = Bookshelf.model(modelName, model);
    }

    async findAll(filter, options) {
        return await this._model
            .forge()
            .where(Object.assign({}, filter))
            .fetchAll(options);
    }

    async findOne(query, options) {
        options = Object.assign({ require: true }, options);
        return await this._model.forge(query).fetch(options);
    }

    async findById(id, options) {
        return await this.findOne(
            { [this._model.prototype.idAttribute]: id },
            options
        );
    }

    async create(data, options) {
        const model = await this._model.forge(data);
        return await model.save(null, options);
    }

    async destroy(options) {
        options = Object.assign({ require: true }, options);
        return this._model
            .forge({ [this._model.prototype.idAttribute]: options.id })
            .destroy(options);
    }

    async update(data, options) {
        options = Object.assign({ patch: true, require: true }, options);
        return this_model
            .forge({ [this._model.prototype.idAttribute]: options.id })
            .fetch(options)
            .then(model => (model ? model.save(data, options) : undefined));
    }
}

fs.readdirSync(__dirname)
    .filter(file => {
        return file.indexOf('.') !== 0 && file !== 'index.js';
    })
    .forEach(file => {
        const name = file.slice(0, file.length - toSlice);
        const model = require(`./${file}`);
        models[name] = new Model(model, name);
    });

module.exports = models;
