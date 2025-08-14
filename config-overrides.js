/* eslint-disable no-param-reassign */
module.exports = function override(config, env) {
  if (env !== 'production') {
    return config
  }

  // Get rid of hash for js files
  config.output.filename = 'images/static/js/[name].js'
  config.output.chunkFilename = 'images/static/js/[name].chunk.js'

  // Get rid of hash for css files
  const miniCssExtractPlugin = config.plugins.find(
    (element) => element.constructor.name === 'MiniCssExtractPlugin'
  )
  miniCssExtractPlugin.options.filename = 'images/static/css/[name].css'
  miniCssExtractPlugin.options.chunkFilename = 'images/static/css/[name].css'

  config.output.assetModuleFilename = 'images/static/media/[name][ext]'

  // Get rid of hash for media files
  config.module.rules[1].oneOf.forEach((oneOf) => {
    if (
      !oneOf.options ||
      (oneOf.options.name !== 'static/media/[name].[hash:8].[ext]' &&
        oneOf.options.name !== 'static/media/[name].[hash].[ext]')
    ) {
      return
    }

    oneOf.options.name = 'images/static/media/[name][ext]'
  })

  config.module.rules[1].oneOf.forEach((oneOf) => {
    if (!oneOf.use) {
      return
    }

    oneOf.use.forEach((use) => {
      if (
        !use.options ||
        (use.options.name !== 'static/media/[name].[hash:8].[ext]' &&
          use.options.name !== 'static/media/[name].[hash][ext]')
      ) {
        return
      }

      use.options.name = 'images/static/media/[name][ext]'
    })
  })

  // Change any public path in the use.options object from ../../ to ../../../
  config.module.rules[1].oneOf.forEach((oneOf) => {
    if (!oneOf.use) {
      return
    }

    oneOf.use.forEach((use) => {
      if (!use.options || !use.options.publicPath) {
        return
      }

      use.options.publicPath = use.options.publicPath.replace(
        '../../',
        '../../../'
      )
    })
  })

  console.dir(config, { depth: null })

  // config.module.rules.push({
  //   test: /pdfjs-dist\/build\/pdf\.worker\.js$/,
  //   type: 'asset/resource',
  //   generator: {
  //     filename: 'images/static/js/[name][ext]',
  //   },
  // })

  return config
}
