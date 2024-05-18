import { createRequire } from 'module'
import { NextConfig } from 'next'

const require = createRequire(import.meta.url)
const pkg = require('./package.json')

const namespace = pkg.name.match(/^(@[\w\d\-_]+\/).*/i)?.[1] || undefined
const dependencies = [...Object.keys(pkg.dependencies), ...Object.keys(pkg.devDependencies)]
const transpilePackages = namespace ? dependencies.filter((dependency) => dependency.includes(namespace)) : undefined

const config: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages
}

export default config
