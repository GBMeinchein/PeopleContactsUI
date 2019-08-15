const proxy = [
  {
    context: '/api',
    target: 'http://localhost:52253',
    pathRewrite: {'^/api' : ''}
  }
];
module.exports = proxy;