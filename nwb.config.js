module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'materialui-pagination',
      externals: {
        react: 'React'
      }
    }
  }
}
