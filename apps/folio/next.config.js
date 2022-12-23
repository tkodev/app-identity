/** @type {import('next').NextConfig} */

const composePlugins = require('next-compose-plugins');
const transpilePlugins = require('next-transpile-modules');

const { dependencies } = require('./package.json');
const packages = Object.keys(dependencies).filter((dependency) => 
  dependency.includes('@tkodev/')
);

const nextConfig = composePlugins([transpilePlugins(packages)], {
  reactStrictMode: true,
  swcMinify: true,
});

module.exports = nextConfig
