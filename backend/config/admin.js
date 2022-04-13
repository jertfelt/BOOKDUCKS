module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '68379a56ae891fdaebe50c3ab56178e8'),
  },
});
