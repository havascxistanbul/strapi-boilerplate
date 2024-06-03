export default ({ env }) => ({
  host: env('HOST', process.env.HOST),
  port: env.int('PORT', process.env.PORT),
  /*   url: process.env.NODE_ENV !== "production" ? "/" : process.env.PROD_URL, */
  app: {
    keys: env.array('APP_KEYS')
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false)
  }
});
