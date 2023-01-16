const UserModel = require("../models/user");

async function getAllUsers() {
  try {
    let usersList = await UserModel.find({});
    return usersList;
  } catch (error) {
    console.log(error);
  }
}
async function getUserById(userId) {
  try {
    let user = await UserModel.findById(userId);
    return user;
  } catch (error) {
    console.log(error);
  }
}
async function createNewUser(newUser) {
  try {
    let createdUser = await UserModel.create(newUser);
    return createdUser;
  } catch (error) {
    console.log(error);
  }
}
async function updateUser(userID, user) {
  try {
    let updatedUser = await UserModel.findByIdAndUpdate(userID, user, {
      new: true,
    });
    return updatedUser;
  } catch (error) {
    console.log(error);
  }
}
async function deleteUser(userID) {
  try {
    let deletedUser = await UserModel.findByIdAndDelete(userID);
    return deletedUser;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getAllUsers,
  getUserById,
  createNewUser,
  updateUser,
  deleteUser,
};
