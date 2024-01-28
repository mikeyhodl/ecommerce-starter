/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "cdn-profiles.tunein.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/photos/**",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ia.media-imdb.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images-na.ssl-images-amazon.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "viusasa-image-assets.angani.info",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "viusasa-cms-files.s3.amazonaws.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "viusasa.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  env: {
    API_URL_VIUSASA: "https://api.viusasa.com/api/v4",
    API_URL_SIMPS: "https://api.sampleapis.com/simpsons/episodes",
    API_URL_FUTAA: "https://futaa.backend.radiofront.hackhub.cc/api/game",
    BEARER_TOKEN:
      "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiM2Q0ODM1ODc1NTBkY2RlMjk2NjYzZDI3MGU2MjdmYTZkZjI4M2JkNGVhZThkNjU1NmIxNmEzODJlMGYxYTY2ZDM4MjVhM2IwOTFjOTI5YzYiLCJpYXQiOjE3MDYwMDkxOTQsIm5iZiI6MTcwNjAwOTE5NCwiZXhwIjoxNzIxNzMzOTkwLCJzdWIiOiIzNDQ1NjE3Iiwic2NvcGVzIjpbXX0.b1886YoK8ebQ-RCxiyOqbzp4lUH6Ec7vEkX0TXxScDhWiGva5p3v64JIjPlDgT-Z-LjkHx8gx1X_kZkx1Q-1fJ7lFsVU1UzcMP1gMXaH3-leedEZZMD6jt0gIzZjRdQfrd0DMeQSPMe1KysaapuhTAj19USqd_RmxaefgPa8rk85o2iK9qTj7kDwK828bE-JFK8Qwy5QOhjxqzV84m-SwPvglsEn-45M7ldVegF5hJybU8rnOJuDOpbVSa-vPwv1XHETAxjo9fl-_4GvYoycBdh6GP_tSL3QM3ifZdOOnWrk1nYQrxrmu5VlN4oxJ34NXv-dPccUKBF2D1mMtW8Zi2gq00e5PrST9IxgjHxit9P9JEhJjAn2d7ubkA0jEfakrKbMdgiKTZuQooiLtLPOXVFgUS7J7IfetJW9_O5M-T5WUoBf7-mJk66Wk_btWIGZwxbmI9njmOHyke793q33wfYLcxOI_h0j_BbgcyhZTPlJuyfTrAJa2PMHVwUHCqEN5FB50Bfa5veK-mf2jp_TmuxWyaCCCnYEIwHZZE_1yiMGlTk57Jz84NiPPtTrUdrI57Khcry1sluWDOP7K9332OyA1LxJSySAOipcmm4svpbr0wDa3Dmb97_vS3NA5VnV1czvF9PWPj9U1Pwf5bCMuFphPOowv_2WHT0V8koR-c4",
  },
};
