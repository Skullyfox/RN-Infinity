const socketio = require('socket.io');
const logger = require('./../logger/logger.js');
module.exports.init = server => {
    const io = socketio.listen(server);

    io.on('connection', socket => {
        logger.info(`socket connected, socketId : ${socket.id}`);
        logger.info('=============================================');

        socket.on('disconnect', () => {
            logger.info(`socket disconnected, socketId : ${socket.id}`);
            logger.info('=============================================');
        });
    });
    return io;
};
