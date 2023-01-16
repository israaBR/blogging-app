const {
  getAllUsers,
  getUserById,
  createNewUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");

const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  return res.json(await getAllUsers());
});
router.get("/:id", async (req, res) => {
  return res.json(await getUserById(req.params.id));
});
router.post("/", async (req, res) => {
  return res.json(await createNewUser(req.body));
});
router.put("/:id", async (req, res) => {
  return res.json(await updateUser(req.params.id, req.body));
});
router.delete("/:id", async (req, res) => {
  return res.json(await deleteUser(req.params.id));
});

module.exports = router;
