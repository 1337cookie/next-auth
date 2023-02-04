/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['next-auth']);
module.exports = withTM({
  experimental: {
    appDir: true,
  }
});