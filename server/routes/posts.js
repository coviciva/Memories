const express = require("express");
//const getPosts = require("../controllers/posts.js");
const { getPosts, createPost } = require("../controllers/posts.js");

const router = express.Router();

router.get("/", getPosts);
router.post("/", createPost);

module.exports = router;
