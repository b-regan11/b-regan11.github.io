const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    publicPath: process.env.NODE_ENV === 'production'
      ? '/b-regan11.github.io/'
      : '/',
    transpileDependencies: true
})
