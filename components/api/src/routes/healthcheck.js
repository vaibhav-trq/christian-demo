module.exports = (app) => {
  app.get(
    '/healthcheck',
    async (req, res, next) => {
      try {
        await app.get('db').query('SELECT 1');

        return res.json({ message: 'API is healthy' });
      } catch (error) {
        return next(error);
      }
    },
  );

  app.get(
    '/data',
    async (req, res, next) => {
      try {
        const query = await app.get('db').query('SELECT * FROM recipes');

        return res.json(query.rows);
      } catch (error) {
        return next(error);
      }
    },
  );

  app.post(
    '/data',
    async (req, res, next) => {
      try {
        const q = `INSERT INTO recipes(recipe_id, recipe_name) VALUES (${req.body.id},'${req.body.name}')`;

        const query = await app.get('db').query(q);

        return res.json(query.rowCount);
      } catch (error) {
        return next(error);
      }
    },
  );
};
