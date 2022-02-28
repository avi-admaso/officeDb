const officeRouter =  require("express").Router() ;
const workerControllers = require('../Controller/workers-controller');

officeRouter.get("/" , workerControllers.getAll)

officeRouter.get("/:id" , workerControllers.getById)

officeRouter.post("/" , workerControllers.addWorker)

officeRouter.put("/:id" , workerControllers.updateWorker)

officeRouter.delete("/:id" , workerControllers.deleteWorker)

module.exports = officeRouter;