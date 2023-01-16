const PostModel = require("../models/post");

async function getAllPosts() {
  try {
    let postsList = await PostModel.find({}).populate("author");
    return postsList;
  } catch (error) {
    console.log(error);
  }
}
async function getPostById(postId) {
  try {
    let post = await PostModel.findById(postId).populate("author");
    return post;
  } catch (error) {
    console.log(error);
  }
}
async function createNewPost(post) {
  try {
    let createdPost = await PostModel.create(post);
    return createdPost;
  } catch (error) {
    console.log(error);
  }
}
async function updatePost(postID, post) {
  try {
    let updatedPost = await PostModel.findByIdAndUpdate(postID, post, {
      new: true,
    });
    return updatedPost;
  } catch (error) {
    console.log(error);
  }
}
async function deletePost(postID) {
  try {
    let deletedPost = await PostModel.findByIdAndDelete(postID);
    return deletedPost;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAllPosts,
  getPostById,
  createNewPost,
  updatePost,
  deletePost,
};
