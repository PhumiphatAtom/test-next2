/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/Statistic",
        permanent: true,
      },
    ];
  },
  env: {},
};
