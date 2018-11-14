const withImages = require('next-images')
const withFonts = require('next-fonts')
const withCSS = require('@zeit/next-css')
module.exports = withImages(
  withFonts(
    withCSS({
      cssModules: true
    })
  )
)
