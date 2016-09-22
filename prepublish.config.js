const pkg = require('./package.json')

export default {
  entry: 'src/index.js',
  external: Object.keys(pkg.dependencies)
}
