module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["intense-reaches-44406.herokuapp.com"],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
