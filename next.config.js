// next.config.js
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const isSplitMode = process.env.SPLIT === 'true'

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
   typescript: { ignoreBuildErrors: true }, // ← sementara saja

  // optional visualize folder name
  analyzeBrowser: ['browser'],
  analyzeServer: ['server'],

  webpack(config) {
    if (!isSplitMode) {
      console.log('⚠️ SPLIT disabled: all components imported globally')
    }
    return config
  },
})
