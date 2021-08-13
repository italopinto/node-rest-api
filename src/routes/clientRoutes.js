const controllers = require("../controllers/clientControllers");

module.exports = app => {
  app.get("/clients", controllers.getData);

  app.get("/clients/:id", controllers.getClient);

  app.post("/clients", controllers.saveClient);

  app.put("/clients/:id", controllers.updateClient);

  app.delete("/clients/:id", controllers.deleteClient);
};