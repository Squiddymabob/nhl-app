const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api/v1',
    createProxyMiddleware({
      target: 'https://statsapi.web.nhl.com/',
      changeOrigin: true,
    }),
  );
  app.use(
    '/site/api',
    createProxyMiddleware({
      target: 'https://records.nhl.com/',
      changeOrigin: true,
    }),
  );
  // For images
  app.use(
    '/images',
    createProxyMiddleware({
      target: 'https://www-league.nhlstatic.com/',
      changeOrigin: true,
    }),
  );
};
