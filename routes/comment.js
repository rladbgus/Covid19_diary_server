const express = require("express");
const router = express.Router();
const { commentController } = require("../controllers");

router.post("/", commentController.makeComment.post);
router.delete("/:commentId", commentController.deleteComment.delete);
router.patch("/:commentId", commentController.patchComment.patch);
module.exports = router;
