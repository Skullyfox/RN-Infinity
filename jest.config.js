require('dotenv').config({
    path: 'config/.env'
});

module.exports = {
    bail: true,
    clearMocks: true,
    rootDir: 'test'
};
