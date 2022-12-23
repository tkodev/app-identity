/** @type {import('next').NextConfig} */

const composePlugins = require('next-compose-plugins');
const transpilePlugins = require('next-transpile-modules');

const packageJSON = require('./package.json');
const packages = Object
  .keys(packageJSON.dependencies)
  .filter((dependency) => dependency.includes('@tkodev/'));

const nextConfig = composePlugins([transpilePlugins(packages)], {
  reactStrictMode: true,
  swcMinify: true,
});

module.exports = nextConfig
