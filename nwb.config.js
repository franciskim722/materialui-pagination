module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'materialui-pagination',
      externals: {
        // Don't bundle react or react-dom
        'react': 'React',
        'react-dom': 'ReactDOM',
      }
    }
  }
};
