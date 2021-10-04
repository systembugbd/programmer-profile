module.exports = {
  images: {
    loader: "imgix",
    path: "https://mir-s3-cdn-cf.behance.net",
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH,
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
};
