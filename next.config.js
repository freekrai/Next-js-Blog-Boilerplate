const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const baseUrl = '/demo/Nextjs-Blog-Boilerplate';

module.exports = withBundleAnalyzer({
  poweredByHeader: false,
  exportTrailingSlash: true,
  trailingSlash: true,
  basePath: baseUrl,
  env: {
    baseUrl: baseUrl,
  },
});
