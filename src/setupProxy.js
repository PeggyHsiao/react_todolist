const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app){
    app.use(
        '/repos', 
        createProxyMiddleware({ 
            target: 'https://api.github.com', 
            changeOrigin: true 
        }));
}


// https://api.github.com/repos/chimurai/http-proxy-middleware/pulls?per_page=1