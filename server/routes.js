const express = require("express");
const {
  signin,
  login,
  userDetails,
  followUser,
  updateProfile,
  searchUser,
  logout,
  myInfo,
} = require("./controllers/user-controller");
const auth = require("./middleware/auth");
const {
  addPost,
  allPost,
  deletePost,
  likePost,
  repost,
  singlePost,
} = require("./controllers/post-controller");
const {
  addComment,
  deleteComment,
} = require("./controllers/comment-controller");

const router = express.Router();
router.get("/users/search/:query", auth, searchUser);
router.get("/post/:id", auth, singlePost);
// router.get("/me", auth, myInfo);
router.get("/post", allPost);
router.get("/user/:id", auth, userDetails);

router.post("/signin", signin);
router.post("/login", login);
router.post("/logout", auth, logout);
router.post("/post", auth, addPost);
router.post("/comment/:id", auth, addComment);

router.put("/update", auth, updateProfile);
router.put("/user/follow/:id", auth, followUser);
router.put("/post/like/:id", auth, likePost);
router.put("/repost/:id", auth, repost);

router.delete("/post/:id", auth, deletePost);
router.delete("/comment/:postId/:id", auth, deleteComment);

module.exports = router;
