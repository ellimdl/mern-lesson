const {
  create,
  findAll,
  updateOne,
  deleteOne,
} = require("../controllers/show-controller");
const express = require("express");
const router = express.Router();

router.post("/", create);
router.get("/", findAll);
router.put("/:id", updateOne);
router.delete("/:id", deleteOne);

module.exports = {
  router,
};
