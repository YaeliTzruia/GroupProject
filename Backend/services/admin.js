const User = require("../models/User");
const Purchase = require("../models/Purchase");

const getAllUsersData = async () => {
  try {
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const getAllPurchasesData = async () => {
  try {
    const purchases = await Purchase.find();
    return purchases;
  } catch (err) {
    console.log(err);
    return err;
  }
};

const delUser = async (id) => {
  console.log(id, "id");
  try {
    const users = await User.findById(id);
    const del = await users.remove(id);
    return del;
  } catch (err) {
    console.log(err);
    return err;
  }
};

module.exports = {
  getAllUsersData,
  delUser,
  getAllPurchasesData,
};
