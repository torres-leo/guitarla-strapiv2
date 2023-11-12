const credentials = require('../guitarla-strapi-404900-be014c5d5080.json');

module.exports = ({ env }) => ({
  upload: {
    config: {
      provider: '@strapi-community/strapi-provider-upload-google-cloud-storage',
      providerOptions: {
        serviceAccount: credentials,
        bucketName: env('GOOGLE_CLOUD_STORAGE_BUCKET'),
        publicFiles: true,
        uniform: true,
        basePath: '',
      },
    },
  },
})
