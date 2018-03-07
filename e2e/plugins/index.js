const { CheckerPlugin } = require('awesome-typescript-loader')
const wp = require('@cypress/webpack-preprocessor')

module.exports = (on) => {
  const options = {
    webpackOptions: {

      // Currently we need to add '.ts' to the resolve.extensions array.
      resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
      },
    
      // Source maps support ('inline-source-map' also works)
      devtool: 'source-map',
    
      // Add the loader for .ts files.
      module: {
        loaders: [
          {
            test: /\.ts?$/,
            loader: 'awesome-typescript-loader',
            options: {
              configFileName: 'e2e/tsconfig.json'
            }
          }
        ]
      },
      plugins: [
          new CheckerPlugin()
      ]
    },
  }
  on('file:preprocessor', wp(options))
}
