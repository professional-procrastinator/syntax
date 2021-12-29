module.exports = {
  reactStrictMode: true,
  env:{
    GOOGLE_CLIENT_ID:process.env.GOOGLE_CLIENT_ID,
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  }
}
