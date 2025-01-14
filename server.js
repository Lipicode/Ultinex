const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.use('/proxy', createProxyMiddleware({
  changeOrigin: true,
  target: '',
  router: (req) => req.query.url,
  onProxyReq(proxyReq, req) {
    if (req.query.url) proxyReq.setHeader('Host', new URL(req.query.url).host);
  },
}));

app.listen(PORT, () => console.log(`Ultinex running at http://localhost:${PORT}`));
