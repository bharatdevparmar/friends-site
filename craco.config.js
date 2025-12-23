module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      if (!webpackConfig.module || !webpackConfig.module.rules) return webpackConfig;
      webpackConfig.module.rules.forEach((rule) => {
        if (Array.isArray(rule.oneOf)) {
          rule.oneOf.forEach((one) => {
            if (one.use && Array.isArray(one.use)) {
              one.use.forEach((loader) => {
                if (loader && loader.loader && loader.loader.includes('css-loader')) {
                  loader.options = loader.options || {};
                  loader.options.url = (url, resourcePath) => {
                    if (resourcePath && resourcePath.indexOf('semantic-ui-css') !== -1) return false;
                    return true;
                  };
                }
              });
            }
          });
        }
      });
      return webpackConfig;
    }
  }
};
