const routes = require("next-routes");

// Setup router.
module.exports = routes()
  .add("index", "/")
  .add("posts")
  .add("single", "/posts/:slug")
  .add("single-client", "/posts-on-client/:slug");
