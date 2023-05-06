export default {
  plugins: [
    {
      configureServer(vite) {
        vite.middlewares.use((req, res, next) => {
          console.log(req.url);
          next();
        });
      }
    }
  ]
};
