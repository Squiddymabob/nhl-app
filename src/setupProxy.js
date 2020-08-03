const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/site/api',
    createProxyMiddleware({
      target: 'https://records.nhl.com/',
      changeOrigin: true,
    }),
  );
};
