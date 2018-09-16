module.exports = log => {
    const header = require('gradient-string')('tomato', 'magenta', 'cyan')(
        `POWERED BY RN-INFINITY`
    );
    return log(`=============================================================================
                      ${header}
      ============================================================================
      server started on port ${process.env.PORT}
      API available at http://localhost/${process.env.port}/api
      App available at http://localhost/${process.env.port}
      =============================================================================`);
};
