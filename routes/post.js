const {
  getAllPosts,
  getPostById,
  createNewPost,
  updatePost,
  deletePost,
} = require("../controllers/post");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  return res.json(await getAllPosts());
});
router.get("/:id", async (req, res) => {
  return res.json(await getPostById(req.params.id));
});
router.post("/", async (req, res) => {
  return res.json(await createNewPost(req.body));
});
router.put("/:id", async (req, res) => {
  return res.json(await updatePost(req.params.id, req.body));
});
router.delete("/:id", async (req, res) => {
  return res.json(await deletePost(req.params.id));
});

module.exports = router;
