const db = require('../models/index');
const { sequelize, Sequelize } = require('../models/index');
const Op = Sequelize.Op


const getAllUsers = async (req, res) => {
  const allUsers = await db.User.findAll()
  console.log('allUsers: ', allUsers);
  res.status(200).send(allUsers)
}

const getUserById = async (req, res) => {
  console.log('req', req);
  const targetId = req.params.id
  const UserById = await db.User.findOne({
    where: {
      userId: targetId
    }
  })
  console.log('UserById: ', UserById);
  res.status(200).send(UserById)
}

const createUser = async (req, res) => {
  const { userId, userName } = req.body
  const newUser = await db.User.create({
    userId: userId,
    userName: userName
  })
  console.log('newUser: ', newUser);
  res.status(201).send(newUser)
}

const updateUser = async (req, res) => {
  const targetId = req.params.id
  const { userName } = req.body
  await db.User.update({
    userName: userName
  }, { where: { userId: targetId } })
  res.status(202).send(`update userName: ${userName} success.`)
}

const deleteUser = async (req, res) => {
  const targetId = req.params.id
  await db.User.destroy({
    where: {
      userId: targetId
    }
  })
  console.log(`delete userId: ${userId} success.`);
  res.status(204).send()
}


module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}