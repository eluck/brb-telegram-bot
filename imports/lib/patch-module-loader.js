module.exports = (rootPath) => {
  const Module = require('module');
  const originalResolve = Module._resolveFilename;
  const matcher = /^\/imports\//;
  Module._resolveFilename = function() {
    const clonedArgs = Array.prototype.slice.call(arguments);
    if (clonedArgs[0].match(matcher)) clonedArgs[0] = rootPath + clonedArgs[0];
    return originalResolve.apply(Module, clonedArgs);
  };
};
