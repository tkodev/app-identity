/** @type {import('next').NextConfig} */

const { name, dependencies } = require('./package.json')

// init
const namespace = name.match(/^(@[\w\d\-_]+\/).*/i)[1] || undefined
const transpilePackages = Object.keys(dependencies).filter((dependency) => dependency.includes(namespace))

// main
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages
}

// export
module.exports = nextConfig
